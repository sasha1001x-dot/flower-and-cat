// Local learning milestones, never a qualification or evidence of plant safety.
function day(now=Date.now()){return new Date(now+8*3600000).toISOString().slice(0,10)}
function normalize(value={}){return {days:[...new Set((Array.isArray(value.days)?value.days:[]).filter(x=>/^\d{4}-\d{2}-\d{2}$/.test(x)))].sort(),learned:[...new Set((Array.isArray(value.learned)?value.learned:[]).filter(x=>typeof x==='string'))]}}
function checkIn(value,now=Date.now()){const s=normalize(value);return {...s,days:[...new Set([...s.days,day(now)])].sort()}}
function learn(value,id,validIds){const s=normalize(value);if(!validIds.includes(id))throw new Error('植物档案不存在');return {...s,learned:[...new Set([...s.learned,id])]}}
function summary(value,records,validIds,now=Date.now()){
 const s=normalize(value),today=day(now);const learned=s.learned.filter(id=>validIds.includes(id));const experiencePlants=[...new Set((Array.isArray(records)?records:[]).filter(r=>validIds.includes(r.plantId)&&String(r.content||'').trim().length>=10).map(r=>r.plantId))];
 let streak=0;let cursor=Date.parse(today+'T00:00:00+08:00');if(!s.days.includes(today))cursor-=86400000;while(s.days.includes(day(cursor))){streak++;cursor-=86400000}
 const tracks=[{key:'learn',label:'认识植物',unit:'份档案',count:learned.length,steps:[3,10,20,30],names:['初识花草','花间漫步','绿意同行','花与爪探索家']},{key:'days',label:'每日打卡',unit:'天',count:s.days.filter(d=>d<=today).length,steps:[3,7,30],names:['三日之约','一周陪伴','长情花友']},{key:'experience',label:'记录经验',unit:'份植物档案',count:experiencePlants.length,steps:[1,3,10],names:['第一篇手记','生活观察员','花与它的记录者']}];
 const badges=tracks.flatMap(t=>t.steps.map((n,i)=>({id:t.key+'-'+n,title:t.names[i],requirement:t.label+' '+n+' '+t.unit,unlocked:t.count>=n,current:Math.min(t.count,n),target:n,percent:Math.min(100,Math.floor(t.count/n*100))})));
 return {today,checked:s.days.includes(today),streak,learnedCount:learned.length,dayCount:tracks[1].count,experienceCount:experiencePlants.length,badges,unlocked:badges.filter(b=>b.unlocked).length,next:badges.find(b=>!b.unlocked&&b.id.startsWith('learn-'))||null};
}
module.exports={day,normalize,checkIn,learn,summary};
