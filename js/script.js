/* ====== DONNÉES : modifie ici pour ajouter projets, compétences, certifications ====== */
const SKILLS={
 "Cybersécurité":["Wazuh","Splunk","Suricata","Wireshark","Nmap","Nikto","Metasploit","Burp Suite","Autopsy","Volatility","Kali Linux"],
 "Audit & OSINT":["Shodan","Censys","FOFA","Analyse de risques","Pentest","Cartographie réseau"],
 "Systèmes":["Windows 10/11","Windows Server","Active Directory","GPO","Linux","BitLocker","Defender","VMware","Hyper-V","VirtualBox"],
 "Microsoft 365":["Entra ID","A2F / MFA","Exchange Online","Teams","SharePoint","OneDrive"],
 "Réseau":["VLAN","OSPF","RIP","ACL","DHCP","DNS","VPN","Cisco","Stormshield","Fortinet","LoRaWAN"],
 "Supervision":["Zabbix","Grafana","InfluxDB","Splunk","GLPI"],
 "Dev & automatisation":["Python","Bash","PowerShell","Java","Git","Docker","Ansible","MariaDB"],
 "Savoir-être":["Pédagogie","Autonomie","Rigueur","Esprit d'équipe","Communication","Veille technologique"]};
const MISSIONS=["Déploiement et migration de postes","Support utilisateurs","Administration Microsoft 365 / Entra ID","Déploiement de l'A2F","Sauvegarde et restauration de données","Réseau","Audit de sécurité","Documentation technique"];
/* cat : filtre | sub : étiquette | ctx : contexte | fait : réalisations | res : résultats | ret : ce que j'en retiens */
const PROJECTS=[
 {cat:"Cybersécurité",sub:"SAE5.03",titre:"Infrastructure vulnérable et supervision SOC/CERT",
  desc:"Réseau segmenté volontairement vulnérable, chaîne d'attaque complète et détection en temps réel.",
  ctx:"Concevoir une infrastructure réaliste, y intégrer des failles pour construire une attaque, puis la détecter comme le ferait un SOC/CERT.",
  fait:["Architecture VLAN utilisateurs / admin / DMZ derrière un pare-feu Stormshield (WAN, LAN, DMZ)","Services internes : Web, FTP, Samba, Mail, Active Directory","Failles intégrées : injection SQL, path traversal, CVE ActiveMQ","Chaîne d'attaque : reconnaissance, exploitation, pivot, compromission de l'AD","Supervision avec Suricata (IDS), Splunk (logs) et Zabbix"],
  res:["Attaques détectées en temps réel par la supervision","Documentation de la chaîne d'attaque et analyse des incidents"],
  ret:"Une vision globale du fonctionnement d'un SOC/CERT : architecture, sécurité système, offensif et supervision.",
  tags:["Stormshield","Suricata","Splunk","Zabbix","Active Directory"]},
 {cat:"Cybersécurité",sub:"SAE3.04",titre:"Pentesting : Kioptrix et Hackable:III",
  desc:"Tests d'intrusion avec une méthodologie professionnelle, jusqu'aux droits administrateur.",
  ctx:"Un pentest guidé, l'étude de Cisco CyberOps Associate, puis un pentest complet sur une machine virtuelle Hackable:III.",
  fait:["Réseau privé isolé avec Kali Linux et machines cibles (VirtualBox, VMPlayer)","Reconnaissance avec Nmap et Nikto, recherche de CVE et d'exploits (ExploitDB)","Exploitation d'une faille Samba avec Metasploit (reverse TCP), puis élévation de privilèges","Chapitres 13 à 17 de CyberOps : surveillance, SIEM, détection et réponse à incident"],
  res:["Accès administrateur obtenu sur les cibles","Méthodologie documentée : reconnaissance, vulnérabilités, exploitation, restitution"],
  ret:"Une démarche structurée de pentest et la connaissance des types d'attaques.",
  tags:["Kali Linux","Metasploit","Nmap","Nikto"]},
 {cat:"Cybersécurité",sub:"Association",titre:"Capture The Flag et Hackcess",
  desc:"Compétitions CTF et animation de la plateforme d'entraînement Erreur 502 comme vice-présidente.",
  ctx:"Hackcess est l'association cybersécurité de l'IUT de Roanne : plateforme CTF, partage de connaissances et communauté Discord.",
  fait:["Catégories pratiquées : OSINT, cryptographie, stéganographie, réseau, reverse, pwn","Entraînement sur TryHackMe, Hack The Box, Root-me et Erreur 502","Compétitions : Mars@Hack, CSAW, InterIUT, Opération Bellatrix","Contenus et défis pour faire vivre la plateforme"],
  res:["InterIUT 2026 : 1ère place","CSAW 2025 : 5ème Europe","Mars@Hack 2026 : 15ème"],
  ret:"Le travail d'équipe sous pression et la progression par la pratique.",
  tags:["OSINT","Cryptographie","Stéganographie","Réseau"]},
 {cat:"Systèmes & Réseaux",sub:"SAE5.02",titre:"Monitoring automatisé BDGZ",
  desc:"Solution de monitoring conteneurisée, déployée en une commande avec Ansible.",
  ctx:"Surveiller automatiquement des rapports et leurs écarts, avec une interface exploitable par un technicien.",
  fait:["3 conteneurs Docker : Web (PHP), Processor (Python), MariaDB","Script Python : lecture Excel, appel API, comparaison des écarts, traçabilité (first_detected)","Interface web : tableau de bord, détail des écarts, déclenchement manuel sécurisé par token","Cron à 9h et 16h avec logs dédiés","Déploiement Ansible, secrets chiffrés avec Ansible Vault"],
  res:["Déploiement reproductible en 3 minutes","Outil proche d'une solution professionnelle"],
  ret:"L'orchestration complète d'une solution, de la base de données au déploiement.",
  tags:["Docker","Python","Ansible","MariaDB","PHP"]},
 {cat:"Systèmes & Réseaux",sub:"SAE5.01",titre:"Déploiement GLPI sous Docker",
  desc:"Gestion de parc et de tickets avec inventaire automatique des postes.",
  ctx:"Moderniser et simplifier la maintenance de GLPI grâce à une architecture conteneurisée.",
  fait:["GLPI et MariaDB via Docker Compose, volumes persistants","Utilisateurs, entités, profils, droits et notifications SMTP","Inventaire automatique avec GLPI Agent, validé sur un poste Windows","Tentative d'automatisation du déploiement par script PowerShell","Documentation et Gantt prévisionnel et réel"],
  res:["Instance stable, reproductible et prête pour un usage professionnel","Documentation permettant la reprise du projet"],
  ret:"La gestion de projet et la documentation technique.",
  tags:["GLPI","Docker","MariaDB","PowerShell"]},
 {cat:"Systèmes & Réseaux",sub:"SAE3.03",titre:"Réseau PME sécurisé avec accès distant",
  desc:"Infrastructure d'entreprise segmentée, services Windows Server et accès distant sécurisé.",
  ctx:"Moderniser le réseau d'une PME en garantissant un accès sécurisé en local et à distance.",
  fait:["Routage OSPFv2, VLAN et ACL","Active Directory, DNS, DHCP, IIS et script PowerShell de création d'utilisateurs","Accès distant RDP et RDWeb chiffré en SSL/TLS","GPO, pare-feu, journalisation et surveillance avec Grafana"],
  res:["Gestion centralisée des utilisateurs","Accès distant fiable et sécurisé, segments réseau communiquant correctement"],
  ret:"La maîtrise des services Windows Server et de la sécurisation d'un accès distant.",
  tags:["Windows Server","Active Directory","OSPF","VLAN","RDS"]},
 {cat:"IoT & Dev",sub:"SAE3.01",titre:"Objet connecté LoRaWAN : qualité de l'air",
  desc:"Capteur CO2, température et humidité transmis via The Things Network, avec domotique.",
  ctx:"Concevoir un objet connecté sécurisé avec des interfaces de visualisation.",
  fait:["Capteur SCD30 sur carte Seeeduino LoRaWAN, connexion sécurisée en OTAA","Passerelle et application TTN","Scripts Python vers Google Sheets et InfluxDB, tableaux de bord Grafana","Ventilateur au-delà de 26°C, moteur pas à pas selon le seuil de CO2"],
  res:["Données en temps réel de bout en bout","Qualité de l'air souvent insuffisante en salle de classe"],
  ret:"Un projet mêlant électronique, programmation, réseau et données.",
  tags:["LoRaWAN","TTN","Python","InfluxDB","Grafana"]},
 {cat:"IoT & Dev",sub:"SAE3.02",titre:"Application client/serveur Android",
  desc:"Application Java en TCP et UDP avec tableau de bord en temps réel.",
  ctx:"Développer une application client-serveur respectant un cahier des charges précis.",
  fait:["Serveur multithreadé (ExecutorService), connexions multiples","Authentification centralisée, choix du protocole TCP ou UDP","Interface Android SDK avec statistiques d'activité"],
  res:["Application conforme au cahier des charges"],
  ret:"Les protocoles réseau appliqués à une solution concrète.",
  tags:["Java","Android","TCP/UDP"]}];
const ALT=[
 {cat:"Alternance",sub:"Cybersécurité",titre:"Analyse du réseau et des risques de sécurité",
  desc:"Audit complet du réseau d'une TPE : cartographie, risques et feuille de route de sécurisation.",
  ctx:"Projet fil rouge d'un semestre pour améliorer la visibilité sur l'infrastructure et proposer des actions adaptées à une petite structure.",
  fait:["Analyse externe de l'IP publique avec Shodan, Censys et FOFA : services exposés (RTSP, IKE, HTTP/HTTPS, accès GLPI)","Inventaire interne : serveurs, VM, NAS, IoT, caméras, routeurs, switchs, imprimantes, postes","Segmentation : usage du VLAN 1, absence de séparation IoT / serveurs / utilisateurs","Sécurité périmétrique : box opérateur, filtrage basique, absence de journalisation, proposition d'un firewall UTM","Failles internes : ports physiques non sécurisés, mises à jour, mots de passe faibles, firmwares IoT obsolètes","Rapport de 31 pages avec comparatifs (anti-DDoS, firewall) et plan d'action"],
  res:["Premières corrections appliquées : ports fermés, RTSP retiré, accès durcis","Feuille de route de sécurisation validée par l'entreprise"],
  ret:"Prioriser les risques et formuler des recommandations réalistes selon les contraintes humaines et budgétaires.",
  tags:["Shodan","Censys","VLAN","Firewall UTM","Audit"]},
 {cat:"Alternance",sub:"Microsoft 365",titre:"Déploiement de la double authentification (A2F)",
  desc:"Généralisation de l'A2F sur les comptes Microsoft 365 de clients professionnels.",
  ctx:"Renforcer la sécurité des accès face au phishing et aux mots de passe faibles, sans perturber les utilisateurs.",
  fait:["Activation de l'A2F dans Entra ID et choix des méthodes autorisées (Authenticator, SMS, codes de secours)","Accompagnement des utilisateurs : installation, QR code, première validation","Gestion des incidents : perte de téléphone, changement d'appareil, reset MFA, comptes bloqués","Procédures internes standardisées pour les futures activations"],
  res:["Réduction du risque de compromission des comptes","Adoption progressive par les utilisateurs"],
  ret:"Expliquer simplement la sécurité et rassurer. Prochaine étape : accès conditionnel et automatisation du MFA.",
  tags:["Entra ID","Microsoft Authenticator","MFA","IAM"]},
 {cat:"Alternance",sub:"Systèmes",titre:"Migration Windows 10 vers Windows 11",
  desc:"Migrations de postes pour des particuliers, des professionnels et des collectivités.",
  ctx:"Avec la fin du support de Windows 10, des parcs hétérogènes à migrer sans perte de données et avec un minimum d'impact sur l'activité.",
  fait:["Compatibilité : TPM, Secure Boot, CPU, RAM, stockage, 32/64 bits, BIOS/UEFI","Sauvegardes préventives : clonage, copie sécurisée, favoris, signatures Outlook, paramètres réseau","Mises à niveau directes ou réinstallations propres (postes en 32 bits)","Restauration : logiciels métiers, imprimantes, VPN, boîtes mail, partages réseau","Protections Windows 11 : BitLocker, Defender, SmartScreen","Accompagnement à la prise en main"],
  res:["Aucune perte de données","Postes plus performants et plus sécurisés, continuité de service"],
  ret:"Une méthodologie fiable et reproductible. Prochaine étape : automatiser sauvegardes et réinstallations (PowerShell, GPO).",
  tags:["Windows 11","BitLocker","Defender","Sauvegarde"]}];
const CTFS=[["InterIUT 2026","1ère place"],["CSAW 2025","5ème Europe"],["Mars@Hack 2026","15ème"],["InterIUT 2025","18ème"],["CSAW 2024","5ème Europe"],["Mars@Hack 2025","28ème"],["Mars@Hack 2024","29ème"]];
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
const cards=(L,k)=>L.map((p,i)=>`<button class="card reveal" data-cat="${p.cat}" data-k="${k}" data-i="${i}"><small>${p.sub} · ${p.cat}</small><h3>${p.titre}</h3><p>${p.desc}</p><br>${tags(p.tags)}</button>`).join("");
const R={
 skills:()=>Object.entries(SKILLS).map(([k,v])=>`<div class="card reveal"><h3>${k}</h3>${tags(v)}</div>`).join(""),
 projects:()=>cards(PROJECTS,"p"),alt:()=>cards(ALT,"a"),
 ctf:()=>CTFS.map(c=>`<div class="card reveal"><h3>${c[1]}</h3><p>${c[0]}</p></div>`).join(""),
 certs:()=>CERTS.map(c=>`<div class="card reveal${c.statut=="ok"?"":" wip"}"><small>${c.org} · ${c.statut=="ok"?"Obtenue":"En cours"}</small><h3>${c.nom}</h3><p>${c.date}</p></div>`).join("")};
document.querySelectorAll("[data-render]").forEach(e=>e.innerHTML=R[e.dataset.render]());
const ms=document.getElementById("missions");if(ms)ms.innerHTML=MISSIONS.map(m=>`<span>${m}</span>`).join("");
/* Filtres et fenêtre de détail */
const fl=document.getElementById("filters"),dlg=document.getElementById("dlg");
if(fl){["Tous",...new Set(PROJECTS.map(p=>p.cat))].forEach((c,k)=>{const b=document.createElement("button");b.textContent=c;b.className="chip"+(k?"":" on");
  b.onclick=()=>{fl.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on",x===b));
   document.querySelectorAll("[data-cat]").forEach(card=>card.style.display=(c=="Tous"||card.dataset.cat==c)?"":"none")};fl.append(b)})}
if(dlg){document.querySelectorAll("[data-i]").forEach(card=>card.onclick=()=>{const p=(card.dataset.k=="a"?ALT:PROJECTS)[card.dataset.i];
  document.getElementById("dbody").innerHTML=`<small>${p.sub} · ${p.cat}</small><h2>${p.titre}</h2><p>${p.ctx}</p><h3>Ce que j'ai fait</h3>${li(p.fait)}<h3>Résultats</h3>${li(p.res)}<h3>Ce que j'en retiens</h3><p>${p.ret}</p>${tags(p.tags)}`;
  dlg.showModal()});
 dlg.onclick=e=>{if(e.target===dlg||e.target.classList.contains("close"))dlg.close()}}
const nav=document.getElementById("nav");document.getElementById("burger").onclick=()=>nav.classList.toggle("open");
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
const toTop=document.getElementById("top");toTop.onclick=()=>scrollTo({top:0,behavior:"smooth"});
addEventListener("scroll",()=>toTop.classList.toggle("show",scrollY>400));
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
