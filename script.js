/* ============ EDIT ONLY THIS DATA BLOCK ============ */
const DATA = {
  email: "raselurrahman1@gmail.com",
  phone: "+8801742767562",
  location: "Rajshahi, Bangladesh",
  github: "https://github.com/raselurrahman0",
  linkedin: "https://www.linkedin.com/in/raselurrahman",

  about: [
    "I'm a Full Stack Web Developer and a Computer Science & Engineering student at Varendra University.",
    "I build web applications from the database to the interface: REST APIs with Django REST Framework and FastAPI, React front ends with RTK Query, and secure authentication with JWT, Google OAuth and two-factor authentication.",
    "I finished the Full Stack Web Development course at Ostad in 2026 and keep learning by building real projects. I am also interested in web application security, networking and Linux.",
  ],
  facts: [
    ["fa-graduation-cap", "B.Sc. in CSE, Varendra University (expected June 2027)"],
    ["fa-certificate", "Full Stack Web Development, Ostad (2026)"],
    ["fa-people-group", "Founding member, VU Networking & Cyber Security Club"],
    ["fa-chess-knight", "Chess player, rating 1400"],
  ],

  skills: {
    "Web development": ["HTML", "CSS", "JavaScript", "React", "RTK Query", "Django", "Django REST Framework", "FastAPI", "REST API", "JWT", "Google OAuth"],
    "Languages": ["Python", "JavaScript", "C++"],
    "Database and tools": ["MySQL", "Git", "GitHub", "VS Code"],
    "Networking and Linux": ["TCP/IP", "OSI model", "DNS", "DHCP", "Subnetting", "VLAN", "Routing", "Ubuntu", "Shell scripting", "File permissions"],
    "Hardware and signals": ["Digital logic", "Microcontrollers", "MATLAB/Simulink", "FFT"],
    "Soft skills": ["Communication", "Teamwork", "Critical thinking", "Time management"],
  },

  /* Lab practice: put photos in assets/lab/ and list file names in images */
  lab: [
    { title: "Networking lab", text: "Planned IP addressing and subnets, set up VLANs, terminated and tested UTP cables, configured static and dynamic routing, and verified connectivity between devices.", images: [] },
    { title: "Linux (Ubuntu)", text: "Managed files, directories and permissions from the command line and wrote shell scripts to automate repetitive tasks.", images: [] },
    { title: "Hardware and signals", text: "Built and tested circuits with digital logic and microcontroller basics. Used FFT, convolution and filtering in MATLAB/Simulink to analyze signals.", images: [] },
  ],

  /* Projects: image = file in assets/projects/, github and live = full URLs (leave "" to hide the button)
     category must be one of: Web, Research, Hardware */
  projects: [
    { title: "Devport", category: "Web", status: "", image: "", github: "", live: "",
      text: "A responsive web app where students buy courses online with payments and teachers offer their own courses.", tech: ["React", "Django", "MySQL"] },
    { title: "Medical Report Analyzer", category: "Web", status: "Built at AI Launchpad Hackathon", image: "", github: "", live: "",
      text: "A web app that analyzes medical reports, built within the hackathon time limit.", tech: ["Python", "FastAPI", "React"] },
    { title: "User Management System", category: "Web", status: "", image: "", github: "", live: "",
      text: "Registration, login, Google OAuth, password recovery, two-factor authentication and account deletion.", tech: ["Django REST Framework", "React", "RTK Query", "JWT"] },
    { title: "Portfolio Website", category: "Web", status: "", image: "", github: "https://github.com/raselurrahman0/Protfolio-website", live: "https://raselurrahman0.github.io/Protfolio-website/",
      text: "This site. Responsive, light and dark theme, and easy to update from one data block.", tech: ["HTML", "CSS", "JavaScript"] },
    { title: "Enterprise RAG Privacy Research", category: "Research", status: "In progress", image: "", github: "", live: "",
      text: "Studying privacy risks and sensitive information exposure in Retrieval-Augmented Generation systems, and ways to prevent them.", tech: ["RAG", "Privacy", "Python"] },
    { title: "FFT-Based Bridge Vibration Analyzer", category: "Hardware", status: "", image: "", github: "", live: "",
      text: "Finds the dominant vibration frequencies of a bridge using FFT, low-pass filtering and spectrum analysis.", tech: ["MATLAB", "Simulink", "FFT"] },
  ],

  /* Certificates: put images in assets/certificates/. link = verify URL (optional) */
  certificates: [
    { title: "Full Stack Web Development", issuer: "Ostad", year: "2026", image: "", link: "" },
    { title: "AI Launchpad Hackathon", issuer: "Participation", year: "", image: "", link: "" },
    { title: "Tech Debate 4.0", issuer: "Participation", year: "", image: "", link: "" },
  ],

  education: [
    ["B.Sc. in Computer Science & Engineering", "Varendra University", "Expected June 2027"],
    ["HSC, Science", "Rajshahi Govt. Model School & College", "2022, GPA 5.00"],
    ["SSC, Science", "Ujalkhalshi High School", "2020, GPA 5.00"],
  ],

  activities: [
    ["Founding Member", "Varendra University Networking & Cyber Security Club (VUNC)", "fa-network-wired"],
    ["Member", "Varendra University Research Club (VURC)", "fa-flask"],
    ["Chess Player", "International chess rating of 1400", "fa-chess-knight"],
  ],
};
/* ============ END DATA ============ */

const $ = (s) => document.querySelector(s);
const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tags = (a) => `<div class="tags">${a.map((t) => `<span>${esc(t)}</span>`).join("")}</div>`;

// Theme
const root = document.documentElement, tbtn = $("#theme");
const setTheme = (t) => { root.dataset.theme = t; tbtn.innerHTML = `<i class="fas fa-${t === "dark" ? "moon" : "sun"}"></i>`; try { localStorage.setItem("theme", t); } catch (e) {} };
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
tbtn.onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

// Mobile menu
$("#burger").onclick = () => $("#nav").classList.toggle("open");
$("#nav").addEventListener("click", () => $("#nav").classList.remove("open"));

// Lightbox
const lb = $("#lightbox");
const openLb = (src, cap) => { lb.querySelector("img").src = src; lb.querySelector("p").textContent = cap; lb.showModal(); };
$("#closeLb").onclick = () => lb.close();
lb.onclick = (e) => { if (e.target === lb) lb.close(); };

// Hero social + about + contact
$("#social").innerHTML = [[DATA.github, "fa-brands fa-github", "GitHub"], [DATA.linkedin, "fa-brands fa-linkedin-in", "LinkedIn"], ["mailto:" + DATA.email, "fas fa-envelope", "Email"]]
  .map(([h, i, l]) => `<a href="${h}" target="_blank" rel="noopener" aria-label="${l}"><i class="${i}"></i></a>`).join("");
$("#aboutText").innerHTML = DATA.about.map((p) => `<p>${esc(p)}</p>`).join("");
$("#facts").innerHTML = DATA.facts.map(([i, t]) => `<li><i class="fas ${i}"></i><span>${esc(t)}</span></li>`).join("");
$("#contactList").innerHTML = [["fa-envelope", DATA.email, "mailto:" + DATA.email], ["fa-phone", DATA.phone, "tel:" + DATA.phone], ["fa-location-dot", DATA.location, ""], ["fa-brands fa-github", "GitHub profile", DATA.github], ["fa-brands fa-linkedin", "LinkedIn profile", DATA.linkedin]]
  .map(([i, t, h]) => `<li><i class="${i.includes("brands") ? i : "fas " + i}"></i>${h ? `<a href="${h}" target="_blank" rel="noopener">${esc(t)}</a>` : esc(t)}</li>`).join("");

// Skills
$("#skillGrid").innerHTML = Object.entries(DATA.skills).map(([k, v]) => `<div><h3>${esc(k)}</h3>${tags(v)}</div>`).join("");

// Lab practice
DATA.lab.forEach((l) => {
  const n = el(`<article class="lab"><div><h3>${esc(l.title)}</h3><p>${esc(l.text)}</p></div><div class="shots"></div></article>`);
  const box = n.querySelector(".shots");
  if (!l.images.length) box.innerHTML = `<div class="shot" style="display:grid;place-items:center;color:var(--mute);cursor:default"><i class="fas fa-image"></i></div>`;
  l.images.forEach((f) => { const s = el(`<div class="shot" tabindex="0"><img loading="lazy" src="assets/lab/${esc(f)}" alt="${esc(l.title)}"></div>`); s.onclick = () => openLb(`assets/lab/${f}`, l.title); s.onkeydown = (e) => e.key === "Enter" && s.click(); box.append(s); });
  $("#labList").append(n);
});

// Projects with filter
const cats = ["All", ...new Set(DATA.projects.map((p) => p.category))];
const drawProjects = (c) => {
  $("#filters").innerHTML = cats.map((x) => `<button class="${x === c ? "on" : ""}">${x}</button>`).join("");
  $("#filters").querySelectorAll("button").forEach((b) => (b.onclick = () => drawProjects(b.textContent)));
  $("#projectGrid").innerHTML = DATA.projects.filter((p) => c === "All" || p.category === c).map((p) => `
    <article class="card"><div class="thumb">${p.image ? `<img loading="lazy" src="assets/projects/${esc(p.image)}" alt="${esc(p.title)}">` : `<i class="fas fa-code"></i>`}</div>
    <div class="body">${p.status ? `<span class="status">${esc(p.status)}</span>` : ""}<h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>${tags(p.tech)}
    <div class="links">${p.github ? `<a href="${p.github}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>` : ""}${p.live ? `<a href="${p.live}" target="_blank" rel="noopener"><i class="fas fa-arrow-up-right-from-square"></i> Live</a>` : ""}</div></div></article>`).join("");
};
drawProjects("All");

// Certificates
DATA.certificates.forEach((c) => {
  const n = el(`<article class="card"><div class="thumb" tabindex="0">${c.image ? `<img loading="lazy" src="assets/certificates/${esc(c.image)}" alt="${esc(c.title)}">` : `<i class="fas fa-award"></i>`}</div>
  <div class="body"><h3>${esc(c.title)}</h3><p>${esc(c.issuer)}${c.year ? ", " + esc(c.year) : ""}</p>${c.link ? `<div class="links"><a href="${c.link}" target="_blank" rel="noopener">Verify</a></div>` : ""}</div></article>`);
  if (c.image) { const t = n.querySelector(".thumb"); t.onclick = () => openLb(`assets/certificates/${c.image}`, c.title); t.onkeydown = (e) => e.key === "Enter" && t.click(); }
  $("#certGrid").append(n);
});

// Education + activities
$("#eduList").innerHTML = DATA.education.map(([d, s, y]) => `<li><h3>${esc(d)}</h3><div>${esc(s)}</div><span>${esc(y)}</span></li>`).join("");
$("#actGrid").innerHTML = DATA.activities.map(([r, t, i]) => `<article class="card"><div class="body"><i class="fas ${i}" style="color:var(--accent);font-size:26px"></i><h3>${esc(r)}</h3><p>${esc(t)}</p></div></article>`).join("");

// Contact form: opens the visitor's email app (GitHub Pages has no server)
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  location.href = `mailto:${DATA.email}?subject=${encodeURIComponent(f.get("subject"))}&body=${encodeURIComponent(f.get("message") + "\n\nFrom: " + f.get("name") + " (" + f.get("email") + ")")}`;
});

// Highlight current section in nav
const links = [...document.querySelectorAll("#nav a")];
document.querySelectorAll("main section").forEach((sec) =>
  new IntersectionObserver((es) => es.forEach((x) => x.isIntersecting && links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + sec.id))), { rootMargin: "-45% 0px -50% 0px" }).observe(sec));
