const https = require('node:https');
const cloud = require('wx-server-sdk');
cloud.init({env:cloud.DYNAMIC_CURRENT_ENV});
function post(url,fields){return new Promise((resolve,reject)=>{const body=new URLSearchParams(fields).toString();const req=https.request(url,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded','Content-Length':Buffer.byteLength(body)}},res=>{let data='';res.on('data',c=>{data+=c;if(data.length>1024*1024)req.destroy(new Error('response too large'))});res.on('end',()=>{try{if(res.statusCode!==200)throw new Error('upstream unavailable');resolve(JSON.parse(data))}catch(e){reject(e)}});res.on('error',reject)});req.setTimeout(15000,()=>req.destroy(new Error('timeout')));req.on('error',reject);req.end(body)})}
let token,expires=0;
exports.main=async event=>{
 const {OPENID}=cloud.getWXContext();if(!OPENID)return {error:'请通过微信小程序调用识别服务。'};
 try{const id=require('node:crypto').createHash('sha256').update(OPENID).digest('hex').slice(0,32);const registered=await cloud.database().collection('users').where({_id:id,_openid:OPENID}).limit(1).get();if(!registered.data.length)return {error:'请先登录并注册花猫账号。'};}catch(_){return {error:'账号状态暂时无法验证，请稍后重试。'};}
 const image=event.image;
 if(typeof image!=='string'||image.length<16||image.length>4*1024*1024||!/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(image))return {error:'图片格式不正确或过大。'};
 const bytes=Buffer.from(image,'base64');
 if(!(bytes[0]===255&&bytes[1]===216||bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))))return {error:'请使用 JPEG 或 PNG 植物照片。'};
 if(!process.env.BAIDU_API_KEY||!process.env.BAIDU_SECRET_KEY)return {error:'识别服务尚未配置，请使用名称搜索。'};
 try{
 if(!token||Date.now()>=expires){const auth=await post('https://aip.baidubce.com/oauth/2.0/token',{grant_type:'client_credentials',client_id:process.env.BAIDU_API_KEY,client_secret:process.env.BAIDU_SECRET_KEY});if(!auth.access_token)throw new Error('auth');token=auth.access_token;expires=Date.now()+Math.max(0,(Number(auth.expires_in)||0)-120)*1000}
 const r=await post('https://aip.baidubce.com/rest/2.0/image-classify/v1/plant?access_token='+encodeURIComponent(token),{image});
 if(r.error_code){token=null;throw new Error('provider')}
 if(!Array.isArray(r.result))throw new Error('invalid response');
 return {results:r.result.filter(x=>typeof x.name==='string'&&Number.isFinite(Number(x.score))&&Number(x.score)>=0&&Number(x.score)<=1).slice(0,5).map(x=>({name:x.name.slice(0,100),score:Number(x.score)}))};
 }catch(_){return {error:'识别服务暂不可用，请稍后重试或使用名称搜索。'}}
};
