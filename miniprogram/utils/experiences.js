const identities=require('../data/identities.json');
const categories = ['养护心得','隔离防护','接触经历'];
const pets = ['猫咪','狗狗','猫狗家庭'];
function validate(input) {
 const nickname=String(input.nickname||'').trim()||'一位铲屎官';
 const content=String(input.content||'').trim();
 if(nickname.length>20)throw new Error('昵称请控制在20字以内');
 if(content.length<10||content.length>1000)throw new Error('请填写10至1000字的实际体验');
 if(!categories.includes(input.category)||!pets.includes(input.pet))throw new Error('请选择经验分类与宠物类型');
 return {nickname,content,category:input.category,pet:input.pet};
}
function create(input,plantId,now=Date.now(),random=Math.random()) {
 if(!plantId)throw new Error('缺少植物档案');
 const identity=identities.find(x=>x.value===input.identityType);
 return {...validate(input),identityType:identity?identity.value:'',identityTitle:identity?identity.title:'',plantId,id:now.toString(36)+'-'+random.toString(36).slice(2,10),createdAt:now,date:new Date(now+8*3600000).toISOString().slice(0,10),scope:'local'};
}
function list(records,plantId,category='全部') {
 return records.filter(x=>x.plantId===plantId&&(category==='全部'||x.category===category)).sort((a,b)=>b.createdAt-a.createdAt);
}
module.exports={categories,pets,validate,create,list};
