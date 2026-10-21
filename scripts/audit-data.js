const fs=require('node:fs');const path=require('node:path');
const plants=require('../miniprogram/data/plants');
const root=path.resolve(__dirname,'..');
const records=plants.map(p=>{
 const missing=[];
 for(const field of ['latin','rank','family','genus','evidenceTaxon','evidenceScope','identityNote','catHarm','dogHarm','light','water','temp'])if(!p[field])missing.push('缺少字段：'+field);
 for(const kind of ['toxicity','care'])if(!p.sources.some(s=>s.kind===kind&&s.url&&s.accessed&&s.taxon))missing.push('缺少可追溯'+kind+'来源');
 const vet=p.review?.veterinary,hort=p.review?.horticultural;
 if(!(vet?.status==='approved'&&vet.reviewer&&vet.date))missing.push('待兽医复核');
 if(!(hort?.status==='approved'&&hort.reviewer&&hort.date))missing.push('待分类/园艺复核');
 if(!p.photos?.some(x=>x.url&&x.author&&x.license&&x.source&&x.taxon&&x.verifiedBy&&x.verifiedAt))missing.push('待实拍照片与许可记录');
 if(p.cat==='unknown'||p.dog==='unknown')missing.push('至少一种宠物的风险证据未补齐（须人工确认是否按未知状态发布）');
 for(const issue of p.openIssues||[])if(issue.status!=='resolved')missing.push(issue.message);
 return {id:p.id,name:p.name,latin:p.latin,rank:p.rank,scene:p.scene,cat:p.cat,dog:p.dog,scope:p.evidenceScope,sourceCount:p.sources.length,missing,ready:missing.length===0,sources:p.sources};
});
const report={updatedAt:'2026-10-21',total:records.length,ready:records.filter(x=>x.ready).length,withToxicitySource:plants.filter(p=>p.sources.some(s=>s.kind==='toxicity')).length,withCareSource:plants.filter(p=>p.sources.some(s=>s.kind==='care')).length,veterinaryApproved:plants.filter(p=>p.review?.veterinary?.status==='approved'&&p.review.veterinary.reviewer&&p.review.veterinary.date).length,withVerifiedPhoto:plants.filter(p=>p.photos?.some(x=>x.verifiedBy&&x.license&&x.author)).length,records};
fs.writeFileSync(path.join(root,'preview/readiness.json'),JSON.stringify(report,null,2)+'\n');
const md=['# 首批植物资料进度','',`核对整理日期：${report.updatedAt}。${report.total} 个分类档案，${report.ready} 个通过本项目发布前资料检查。此检查不代替专业判断。`,'','| 档案 | 学名 | 层级 | 场景 | 仍缺什么 |','|---|---|---|---|---|',...records.map(p=>`| ${p.name} | ${p.latin} | ${p.rank} | ${p.scene} | ${p.missing.join('；')||'已通过结构检查'} |`)];
fs.writeFileSync(path.join(root,'docs/PLANT_READINESS.md'),md.join('\n')+'\n');
console.log(`分类档案 ${report.total}；有毒性来源 ${report.withToxicitySource}；有养护来源 ${report.withCareSource}；兽医复核通过 ${report.veterinaryApproved}；有核实照片 ${report.withVerifiedPhoto}；资料发布检查通过 ${report.ready}。`);
if(process.argv.includes('--release')&&report.ready!==report.total){console.error('资料尚未达到发布要求；请查看 docs/PLANT_READINESS.md，不要把已附来源等同于专业复核。');process.exitCode=1;}
