const identities=require('./identities.json');
const cloud=require('wx-server-sdk');const crypto=require('node:crypto');
cloud.init({env:cloud.DYNAMIC_CURRENT_ENV});const db=cloud.database();
const POLICY_VERSION='draft-2026-10-20';
function memberId(openid){return crypto.createHash('sha256').update(openid).digest('hex').slice(0,32);}
function publicProfile(row){return {identityType:identities.some(x=>x.value===row.identityType)?row.identityType:'',id:row._id,nickname:row.nickname||'花与爪铲屎官',avatarFileID:row.avatarFileID||'',phoneMasked:row.phoneNumber?row.phoneNumber.slice(0,3)+'****'+row.phoneNumber.slice(-4):'',mode:'wechat',createdAt:row.createdAt};}
exports.main=async(event={})=>{
 const {OPENID}=cloud.getWXContext();if(!OPENID)return {error:'请在微信小程序中登录'};
 const id=memberId(OPENID),users=db.collection('users');
 try{
 const result=await users.where({_id:id,_openid:OPENID}).limit(1).get();let row=result.data[0];
 if(event.action==='me')return {profile:row?publicProfile(row):null};
 if(event.action==='register'){
 if(event.consentVersion!==POLICY_VERSION)return {error:'请重新阅读并同意最新账号与隐私说明'};
 if(!row){
 if(process.env.ACCEPT_REGISTRATIONS!=='true')return {error:'账号服务尚未开放，请由运营者完成隐私说明与服务配置'};
 row={_id:id,_openid:OPENID,nickname:'花与爪铲屎官',avatarFileID:'',phoneNumber:'',createdAt:Date.now(),consentVersion:POLICY_VERSION,consentedAt:Date.now()};
 try{await users.add({data:row});}catch(e){const existing=await users.where({_id:id,_openid:OPENID}).limit(1).get();if(!existing.data.length)throw e;row=existing.data[0];}
 }return {profile:publicProfile(row)};
 }
 if(!row)return {error:'请先完成账号注册'};
 if(event.action==='update'){
 const identityType=event.identityType===undefined?(row.identityType||''):event.identityType;if(identityType!==''&&!identities.some(x=>x.value===identityType))return {error:'请选择有效的养宠身份'};
 const nickname=String(event.nickname||'').trim()||'花与爪铲屎官';if(nickname.length>20)return {error:'昵称最多20字'};
 const avatar=String(event.avatarFileID||'');
 if(avatar&&!new RegExp('^cloud://[^/]+/avatars/'+id+'/[a-zA-Z0-9._-]+$').test(avatar))return {error:'头像文件不属于当前账号'};
 await users.doc(id).update({data:{nickname,identityType,avatarFileID:avatar,updatedAt:Date.now()}});return {profile:publicProfile({...row,nickname,identityType,avatarFileID:avatar})};
 }
 if(event.action==='bindPhone'){
 if(typeof event.code!=='string'||event.code.length<1||event.code.length>1024)return {error:'缺少有效的手机号授权码'};
 const r=await cloud.openapi.phonenumber.getPhoneNumber({code:event.code});
 const info=r.phoneInfo||r.phone_info;const number=info&&(info.purePhoneNumber||info.pure_phone_number);
 if(!number||!/^\d{5,20}$/.test(number))return {error:'手机号授权未成功，请重试'};
 await users.doc(id).update({data:{phoneNumber:number,phoneBoundAt:Date.now()}});return {profile:publicProfile({...row,phoneNumber:number})};
 }
 return {error:'不支持的账号操作'};
 }catch(_){return {error:'账号服务暂不可用，请检查云环境、users 集合与函数权限后重试'};}
};
