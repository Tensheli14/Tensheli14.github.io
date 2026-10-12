/* ====== DONNÉES : modifie ici pour ajouter projets, compétences, certifications ====== */
const SKILLS={
 "Cybersécurité":["Wazuh","Splunk","Wireshark","Nmap","Autopsy","Volatility","Burp Suite","Metasploit"],
 "Systèmes":["Windows","Linux","Windows Server","Active Directory","VMware","Hyper-V"],
 "Microsoft 365":["Exchange Online","Teams","SharePoint","OneDrive","Entra ID"],
 "Réseau":["VLAN","OSPF","RIP","DHCP","DNS","Cisco","Stormshield","Fortinet"],
 "Développement":["Python","Bash","PowerShell","Git","Docker"]};
const PROJECTS=[ // ajoute image:"images/xxx.png" et lien:"https://..." quand tu veux
 {titre:"Forensic numérique",desc:"Analyse de preuves numériques (disque, mémoire, réseau).",tags:["Autopsy","Volatility","Wireshark"]},
 {titre:"Administration Microsoft 365",desc:"Gestion des utilisateurs, licences, messagerie et accès.",tags:["Entra ID","Exchange Online","Teams"]},
 {titre:"Infrastructure réseau",desc:"Conception et configuration d'un réseau segmenté.",tags:["VLAN","OSPF","Cisco"]},
 {titre:"Capture The Flag (CTF)",desc:"Participation à des compétitions de cybersécurité.",tags:["Burp Suite","Nmap","Metasploit"]},
 {titre:"Automatisation PowerShell",desc:"Scripts d'automatisation pour l'administration système.",tags:["PowerShell","Windows","Active Directory"]}];
const CERTS=[
 {nom:"Cisco Introduction to Networks",icone:"🌐"},
 {nom:"Cisco Introduction to Cybersecurity",icone:"🛡️"},
 {nom:"Stormshield CSNA",icone:"🔥"}];
/* ====== RENDU ====== */
const tags=a=>`<div class="tags">${a.map(t=>`<span>${t}</span>`).join("")}</div>`;
const R={
 skills:()=>Object.entries(SKILLS).map(([k,v])=>`<div class="card reveal"><h3>${k}</h3>${tags(v)}</div>`).join(""),
 projects:()=>PROJECTS.map(p=>{const o=p.lien?`a href="${p.lien}" target="_blank" rel="noopener"`:"div",c=p.lien?"a":"div";
  return `<${o} class="card reveal">${p.image?`<img src="${p.image}" alt="" style="width:100%;border-radius:8px;margin-bottom:12px">`:""}<h3>${p.titre}</h3><p>${p.desc}</p><br>${tags(p.tags)}</${c}>`}).join(""),
 certs:()=>CERTS.map(c=>`<div class="card badge reveal"><div class="ic">${c.icone}</div><h3>${c.nom}</h3></div>`).join("")};
document.querySelectorAll("[data-render]").forEach(e=>e.innerHTML=R[e.dataset.render]());
const nav=document.getElementById("nav");document.getElementById("burger").onclick=()=>nav.classList.toggle("open");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
const top=document.getElementById("top");top.onclick=()=>scrollTo({top:0,behavior:"smooth"});
addEventListener("scroll",()=>top.classList.toggle("show",scrollY>400));
const calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
const ty=document.getElementById("typed");
if(ty&&!calm){const W=JSON.parse(ty.dataset.words);let w=0,i=0,del=false;
 (function loop(){const s=W[w];ty.textContent=s.slice(0,i);
  if(!del&&i===s.length){del=true;return setTimeout(loop,1600)}
  if(del&&i===0){del=false;w=(w+1)%W.length}
  i+=del?-1:1;setTimeout(loop,del?30:70)})();}
const cv=document.getElementById("bg"),x=cv.getContext("2d");let P=[];
function size(){cv.width=innerWidth;cv.height=innerHeight;P=Array.from({length:Math.min(80,innerWidth/14)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
size();addEventListener("resize",size);
function draw(){x.clearRect(0,0,cv.width,cv.height);
 P.forEach((p,i)=>{p.x=(p.x+p.vx+cv.width)%cv.width;p.y=(p.y+p.vy+cv.height)%cv.height;
  x.fillStyle="#38bdf8";x.globalAlpha=.7;x.fillRect(p.x,p.y,2,2);
  for(let j=i+1;j<P.length;j++){const d=Math.hypot(p.x-P[j].x,p.y-P[j].y);
   if(d<130){x.globalAlpha=.18*(1-d/130);x.strokeStyle="#38bdf8";x.beginPath();x.moveTo(p.x,p.y);x.lineTo(P[j].x,P[j].y);x.stroke()}}});
 if(!calm)requestAnimationFrame(draw)}
draw();
