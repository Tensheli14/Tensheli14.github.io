/* ====== DONNÉES : modifie ici pour ajouter projets, compétences, certifications ====== */
const SKILLS={
 "Cybersécurité":["Wazuh","Splunk","Suricata","Wireshark","Nmap","Nikto","Metasploit","Burp Suite","Autopsy","Volatility","Kali Linux"],
 "Systèmes":["Windows","Windows Server","Active Directory","Linux","GPO","VMware","Hyper-V","VirtualBox"],
 "Microsoft 365":["Entra ID","Exchange Online","Teams","SharePoint","OneDrive"],
 "Réseau":["VLAN","OSPF","RIP","ACL","DHCP","DNS","Cisco","Stormshield","Fortinet","LoRaWAN"],
 "Supervision":["Zabbix","Grafana","InfluxDB","Splunk","GLPI"],
 "Dev & automatisation":["Python","Bash","PowerShell","Java","Git","Docker","Ansible","MariaDB"]};
/* cat : filtre | rapport : lien du PDF (mets les fichiers dans documents/rapports/) */
const PROJECTS=[
 {cat:"Cybersécurité",titre:"Infrastructure vulnérable & supervision SOC",sub:"SAE5.03",
  desc:"Réseau segmenté volontairement vulnérable, chaîne d'attaque complète et détection en temps réel.",
  fait:["Architecture VLAN utilisateurs / admin / DMZ derrière un pare-feu Stormshield","Services internes : Web, FTP, Samba, Mail, Active Directory","Vulnérabilités intégrées : injection SQL, path traversal, CVE ActiveMQ","Chaîne d'attaque : reconnaissance, exploitation, pivot, compromission de l'AD","Supervision avec Suricata (IDS), Splunk (logs) et Zabbix"],
  res:["Attaques détectées en temps réel par la supervision","Documentation complète de la chaîne d'attaque et des incidents"],
  tags:["Stormshield","Suricata","Splunk","Zabbix","Active Directory"],rapport:"documents/rapports/SAE5-03.pdf"},
 {cat:"Cybersécurité",titre:"Pentesting : Kioptrix et Hackable:III",sub:"SAE3.04",
  desc:"Tests d'intrusion complets avec méthodologie professionnelle, jusqu'aux droits administrateur.",
  fait:["Réseau isolé avec Kali Linux et machines cibles (VirtualBox, VMPlayer)","Reconnaissance avec Nmap et Nikto, recherche de CVE et d'exploits (ExploitDB)","Exploitation d'une faille Samba avec Metasploit, puis élévation de privilèges","Étude des chapitres 13 à 17 de Cisco CyberOps Associate (SIEM, détection, réponse à incident)"],
  res:["Accès administrateur obtenu sur les machines cibles","Rapports de pentest documentés étape par étape"],
  tags:["Kali Linux","Metasploit","Nmap","Nikto"],rapport:"documents/rapports/SAE3-04.pdf"},
 {cat:"Cybersécurité",titre:"Capture The Flag et Hackcess",sub:"Association",
  desc:"Compétitions CTF et animation de la plateforme d'entraînement Erreur 502 en tant que vice-présidente.",
  fait:["Catégories pratiquées : OSINT, cryptographie, stéganographie, réseau, reverse, pwn","Entraînement sur TryHackMe, Hack The Box, Root-me et Erreur 502","Participation à Mars@Hack, CSAW et InterIUT avec l'équipe Hackcess"],
  res:["InterIUT 2026 : 1ère place","CSAW 2025 : 5ème Europe","Mars@Hack 2026 : 15ème"],
  tags:["OSINT","Crypto","Stéganographie","Réseau"]},
 {cat:"Systèmes & Réseaux",titre:"Monitoring automatisé BDGZ",sub:"SAE5.02",
  desc:"Solution de monitoring conteneurisée, déployée en une commande avec Ansible.",
  fait:["3 conteneurs Docker : Web (PHP), Processor (Python), MariaDB","Script Python : lecture Excel, appel API, comparaison des écarts, traçabilité (first_detected)","Interface web : tableau de bord des rapports et déclenchement manuel sécurisé par token","Cron à 9h et 16h avec logs dédiés","Secrets chiffrés avec Ansible Vault"],
  res:["Déploiement reproductible en 3 minutes","Outil exploitable par un technicien"],
  tags:["Docker","Python","Ansible","MariaDB","PHP"],rapport:"https://github.com/Tensheli14"},
 {cat:"Systèmes & Réseaux",titre:"Déploiement GLPI sous Docker",sub:"SAE5.01",
  desc:"Parc informatique et ticketing avec inventaire automatique des postes.",
  fait:["GLPI et MariaDB via Docker Compose, volumes persistants","Utilisateurs, entités, profils, droits et notifications SMTP","Inventaire automatique avec GLPI Agent, validé sur un poste Windows","Tentative d'automatisation du déploiement par script PowerShell","Documentation et diagramme de Gantt prévisionnel et réel"],
  res:["Instance stable et reproductible","Documentation permettant la reprise du projet"],
  tags:["GLPI","Docker","MariaDB","PowerShell"],rapport:"documents/rapports/SAE5-01.pdf"},
 {cat:"Systèmes & Réseaux",titre:"Réseau PME sécurisé avec accès distant",sub:"SAE3.03",
  desc:"Infrastructure d'entreprise segmentée avec services Windows Server et accès distant sécurisé.",
  fait:["Routage OSPFv2, VLAN et ACL","Active Directory, DNS, DHCP, IIS et script PowerShell de création d'utilisateurs","Accès distant RDP et RDWeb chiffré en SSL/TLS","GPO, pare-feu, journalisation et surveillance avec Grafana"],
  res:["Gestion centralisée des utilisateurs","Accès distant fiable et sécurisé"],
  tags:["Windows Server","Active Directory","OSPF","VLAN","RDS"],rapport:"documents/rapports/SAE3-03.pdf"},
 {cat:"IoT & Dev",titre:"Objet connecté LoRaWAN : qualité de l'air",sub:"SAE3.01",
  desc:"Capteur CO2, température et humidité transmis via The Things Network, avec domotique.",
  fait:["Capteur SCD30 sur carte Seeeduino LoRaWAN, connexion sécurisée en OTAA","Passerelle et application TTN","Scripts Python vers Google Sheets et InfluxDB, tableaux de bord Grafana","Ventilateur au-delà de 26°C et moteur pas à pas selon le seuil de CO2"],
  res:["Données en temps réel de bout en bout","Qualité de l'air souvent insuffisante en salle de classe"],
  tags:["LoRaWAN","TTN","Python","InfluxDB","Grafana"],rapport:"documents/rapports/SAE3-01.pdf"},
 {cat:"IoT & Dev",titre:"Application client/serveur Android",sub:"SAE3.02",
  desc:"Application Java communiquant en TCP et UDP avec tableau de bord en temps réel.",
  fait:["Serveur multithreadé (ExecutorService), connexions multiples","Authentification centralisée et choix du protocole TCP ou UDP","Interface Android SDK avec statistiques d'activité"],
  res:["Application conforme au cahier des charges"],
  tags:["Java","Android","TCP/UDP"],rapport:"documents/rapports/SAE3-02.pdf"}];
const CTFS=[["InterIUT 2026","1ère place"],["CSAW 2025","5ème Europe"],["Mars@Hack 2026","15ème"],["InterIUT 2025","18ème"],["CSAW 2024","5ème Europe"]];
const CERTS=[ // statut : "ok" ou "en cours"
 {nom:"Certified Stormshield Network Administrator",org:"Stormshield",date:"Déc. 2025 – déc. 2028",statut:"ok"},
 {nom:"Introduction to Networks",org:"Cisco",date:"Juin 2026",statut:"ok"},
 {nom:"Introduction to Cybersecurity",org:"Cisco",date:"Mars 2026",statut:"ok"},
 {nom:"Networking Basics",org:"Cisco",date:"Mars 2026",statut:"ok"},
 {nom:"Hacker Éthique",org:"Cisco",date:"En préparation",statut:"en cours"},
 {nom:"CCNA2",org:"Cisco",date:"En préparation",statut:"en cours"}];
/* ====== RENDU ====== */
const tags=a=>`<div class="tags">${a.map(t=>`<span>${t}</span>`).join("")}</div>`;
const li=a=>`<ul>${a.map(t=>`<li>${t}</li>`).join("")}</ul>`;
const R={
 skills:()=>Object.entries(SKILLS).map(([k,v])=>`<div class="card reveal"><h3>${k}</h3>${tags(v)}</div>`).join(""),
 projects:()=>PROJECTS.map((p,i)=>`<button class="card reveal" data-cat="${p.cat}" data-i="${i}"><small>${p.sub} · ${p.cat}</small><h3>${p.titre}</h3><p>${p.desc}</p><br>${tags(p.tags)}</button>`).join(""),
 ctf:()=>CTFS.map(c=>`<div class="card reveal"><h3>${c[1]}</h3><p>${c[0]}</p></div>`).join(""),
 certs:()=>CERTS.map(c=>`<div class="card reveal${c.statut=="ok"?"":" wip"}"><small>${c.org} · ${c.statut=="ok"?"Obtenue":"En cours"}</small><h3>${c.nom}</h3><p>${c.date}</p></div>`).join("")};
document.querySelectorAll("[data-render]").forEach(e=>e.innerHTML=R[e.dataset.render]());
/* Filtres et fenêtre de détail des projets */
const fl=document.getElementById("filters"),dlg=document.getElementById("dlg");
if(fl){["Tous",...new Set(PROJECTS.map(p=>p.cat))].forEach((c,k)=>{const b=document.createElement("button");b.textContent=c;b.className="chip"+(k?"":" on");
  b.onclick=()=>{fl.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on",x===b));
   document.querySelectorAll("[data-cat]").forEach(card=>card.style.display=(c=="Tous"||card.dataset.cat==c)?"":"none")};fl.append(b)});
 document.querySelectorAll("[data-i]").forEach(card=>card.onclick=()=>{const p=PROJECTS[card.dataset.i];
  document.getElementById("dbody").innerHTML=`<small>${p.sub} · ${p.cat}</small><h2>${p.titre}</h2><p>${p.desc}</p><h3>Ce que j'ai fait</h3>${li(p.fait)}<h3>Résultats</h3>${li(p.res)}${tags(p.tags)}${p.rapport?`<div class="btns"><a class="btn" href="${p.rapport}" target="_blank" rel="noopener">Voir le rapport</a></div>`:""}`;
  dlg.showModal()});
 dlg.onclick=e=>{if(e.target===dlg||e.target.classList.contains("close"))dlg.close()}}
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
