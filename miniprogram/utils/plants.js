const plants = require('../data/plants');
const ambiguities = require('../data/ambiguities');
const labels = {high:'高危 · 避免接触',toxic:'有毒 · 需要隔离',caution:'谨慎 · 避免啃食',low:'资料列为无毒',unknown:'证据不足 · 未知风险'};
const normalize = s => String(s || '').trim().toLowerCase().replace(/×/g,'x').replace(/\s+/g,' ');
function getAmbiguity(query) { return ambiguities.find(a=>a.terms.some(t=>normalize(t)===normalize(query))) || null; }
function search(query = '', pet = 'cat', risk = 'all', favorites = null, order = 'default') {
 const q = normalize(query), ambiguity = getAmbiguity(q);
 const result = plants.filter(p => (!q || (ambiguity && ambiguity.ids.includes(p.id)) || [p.name,p.latin,...p.aliases,...p.searchTerms].some(s=>normalize(s).includes(q))) && (risk === 'all' || (risk === 'risk' ? p[pet] !== 'low' : risk === 'toxic' ? ['high','toxic'].includes(p[pet]) : p[pet] === risk)) && (!favorites || favorites.includes(p.id))).map(p=>({...p,risk:p[pet],label:labels[p[pet]]}));
 if(order==='scientific')result.sort((a,b)=>a.latin.localeCompare(b.latin,'en'));
 if(order==='common')result.sort((a,b)=>a.name.localeCompare(b.name,'zh-Hans-CN'));
 return result;
}
function resolveCandidate(name) {
 const q=normalize(name), ambiguity=getAmbiguity(q);
 if(ambiguity)return {status:'ambiguous',message:ambiguity.message,candidates:ambiguity.ids.map(id=>plants.find(p=>p.id===id)).filter(Boolean)};
 const matches=plants.filter(p=>[p.name,p.latin,...p.aliases].some(n=>normalize(n)===q));
 if(matches.length!==1)return {status:matches.length?'ambiguous':'unknown',message:'未能唯一匹配已收录的分类单元，风险未知。',candidates:matches};
 return {status:'candidate',message:'仅为名称候选，尚未确认照片中的植物身份。请核对学名、标签及特征。',candidates:matches};
}
function matchCandidate(name) {const result=resolveCandidate(name);return result.status==='candidate'?result.candidates[0]:undefined;}
module.exports = { plants, labels, search, getAmbiguity, resolveCandidate, matchCandidate };
