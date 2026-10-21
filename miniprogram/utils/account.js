const identities=require('../data/identities.json');
const config=require('../config');
const POLICY_VERSION='draft-2026-10-20';
let current=null;
let signedOut=false;
function local(){return !config.cloudEnv;}
async function invoke(action,data={}){const r=await wx.cloud.callFunction({name:'account',data:{action,...data}});if(!r.result||r.result.error)throw new Error(r.result&&r.result.error||'账号服务暂不可用');return r.result.profile;}
async function me(){if(signedOut)return null;if(current)return current;if(local()){if(wx.getStorageSync('huamao-demo-signed-in'))current=wx.getStorageSync('huamao-demo-profile')||null;return current;}current=await invoke('me');return current;}
async function login(consent){if(!consent)throw new Error('请先阅读并同意账号与隐私说明');signedOut=false;if(local()){current=wx.getStorageSync('huamao-demo-profile')||{id:'demo-'+Date.now().toString(36),nickname:'花猫铲屎官',avatarFileID:'',phoneMasked:'',mode:'demo',createdAt:Date.now()};wx.setStorageSync('huamao-demo-profile',current);wx.setStorageSync('huamao-demo-signed-in',true);return current;}current=await invoke('register',{consentVersion:POLICY_VERSION});return current;}
async function save(nickname,avatarFileID,identityType){if(identityType!==undefined&&identityType!==''&&!identities.some(x=>x.value===identityType))throw new Error('请选择有效的养宠身份');nickname=String(nickname||'').trim()||'花猫铲屎官';if(nickname.length>20)throw new Error('昵称最多20字');const profile=await me();if(!profile)throw new Error('请先登录');identityType=identityType===undefined?(profile.identityType||''):identityType;if(local()){current={...profile,nickname,identityType,avatarFileID:avatarFileID||''};wx.setStorageSync('huamao-demo-profile',current);return current;}current=await invoke('update',{nickname,identityType,avatarFileID:avatarFileID||''});return current;}
async function bindPhone(code){if(local())throw new Error('本地体验不收集手机号，部署微信云服务后才能授权绑定');if(!code)throw new Error('未获得手机号授权，可稍后绑定');current=await invoke('bindPhone',{code});return current;}
function logout(){signedOut=true;current=null;wx.removeStorageSync('huamao-demo-signed-in');wx.reLaunch({url:'/pages/login/login'});}
function safeNext(value){return /^\/pages\/(index\/index|library\/library|shop\/shop|growth\/growth|identify\/identify|account\/account|detail\/detail\?id=[a-z0-9-]+)$/.test(value||'')?value:'/pages/index/index';}
async function requireAccount(next){try{const p=await me();if(p)return p;}catch(_){/* Login page exposes service error and retry. */}wx.reLaunch({url:'/pages/login/login?next='+encodeURIComponent(safeNext(next))});return null;}
function ownerKey(kind,id){if(!current)throw new Error('请先登录');return 'huamao-'+kind+'-'+current.id+(id?'-'+id:'');}
module.exports={POLICY_VERSION,local,me,login,save,bindPhone,logout,requireAccount,safeNext,ownerKey};
