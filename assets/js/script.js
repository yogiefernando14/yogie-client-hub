// =========================
// LIVE CLOCK & DATE
// =========================

function updateClock() {

const clock = document.getElementById("live-clock");
const date = document.getElementById("live-date");

if (!clock || !date) return;

const now = new Date();

clock.textContent = now.toLocaleTimeString("en-US", {
hour: "2-digit",
minute: "2-digit",
second: "2-digit"
});

date.textContent = now.toLocaleDateString("en-US", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric"
});

}

setInterval(updateClock, 1000);
updateClock();

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll("[data-counter]");

function runCounter(counter) {

const target = +counter.dataset.counter;

let current = 0;

const increment = Math.max(1, target / 60);

const timer = setInterval(() => {

current += increment;

if (current >= target) {

counter.textContent = target;
clearInterval(timer);

} else {

counter.textContent = Math.floor(current);

}

}, 20);

}

const counterObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

runCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

}, {
threshold: 0.5
});

counters.forEach(counter => {
counterObserver.observe(counter);
});

// =========================
// REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
".stat-card,.revenue-card,.activity-card,.projects-section,.action-card,.client-card"
);

const revealObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

}, {
threshold: 0.15
});

revealElements.forEach(el => {

el.style.opacity = "0";
el.style.transform = "translateY(30px)";
el.style.transition = "all .8s ease";

revealObserver.observe(el);

});

// =========================
// SEARCH DEMO
// =========================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

searchInput.addEventListener("focus", () => {

searchInput.parentElement.style.transform = "scale(1.02)";

});

searchInput.addEventListener("blur", () => {

searchInput.parentElement.style.transform = "scale(1)";

});

}

// =========================
// BUTTON EFFECT
// =========================

document.querySelectorAll(".icon-btn").forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transform = "translateY(-4px)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform = "translateY(0)";

});

});

// =========================
// ACTIVE SIDEBAR LINK
// =========================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

navLinks.forEach(item => {
item.classList.remove("active");
});

link.classList.add("active");

});

});

// =========================
// CONSOLE SIGNATURE
// =========================

console.log(
"%cYogie Client Hub",
"font-size:20px;font-weight:bold;color:white;"
);

console.log(
"%cBuilt by Yogie Fernando",
"color:#999;"
);

// =========================
// SMOOTH CARD FLOAT
// =========================

document.querySelectorAll(
".stat-card,.action-card,.client-card"
).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*8;
const rotateX=((y/rect.height)-0.5)*-8;

card.style.transform=
`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// =========================
// RIPPLE EFFECT
// =========================

document.querySelectorAll(
".action-card,.icon-btn"
).forEach(btn=>{

btn.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=btn.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.15)";
ripple.style.transform="scale(0)";
ripple.style.pointerEvents="none";
ripple.style.left=(e.offsetX-size/2)+"px";
ripple.style.top=(e.offsetY-size/2)+"px";
ripple.style.transition=".6s";

btn.style.position="relative";
btn.style.overflow="hidden";

btn.appendChild(ripple);

setTimeout(()=>{
ripple.style.transform="scale(4)";
ripple.style.opacity="0";
},10);

setTimeout(()=>{
ripple.remove();
},700);

});

});

// =========================
// TABLE STAGGER ANIMATION
// =========================

document.querySelectorAll(
".projects-table tbody tr"
).forEach((row,index)=>{

row.style.opacity="0";
row.style.transform="translateY(20px)";

setTimeout(()=>{

row.style.transition=".5s";
row.style.opacity="1";
row.style.transform="translateY(0)";

},index*120);

});

// =========================
// RANDOM ACTIVITY PULSE
// =========================

setInterval(()=>{

const dots=document.querySelectorAll(".activity-dot");

if(!dots.length) return;

dots.forEach(dot=>{

dot.style.boxShadow=
"0 0 15px rgba(255,255,255,.4)";

});

const random=
dots[Math.floor(Math.random()*dots.length)];

random.style.boxShadow=
"0 0 30px rgba(255,255,255,1)";

},1500);

// =========================
// HERO GLOW
// =========================

const heroTitle=
document.querySelector(".hero h1");

if(heroTitle){

document.addEventListener("mousemove",(e)=>{

const x=
(e.clientX/window.innerWidth)*100;

heroTitle.style.background=
`linear-gradient(
90deg,
rgb(255,255,255),
rgb(${150+x},${150+x},${150+x})
)`;

heroTitle.style.webkitBackgroundClip="text";
heroTitle.style.webkitTextFillColor="transparent";

});

}

// =========================
// SPOTLIGHT EFFECT
// =========================

const spotlight=document.createElement("div");

spotlight.style.position="fixed";
spotlight.style.width="350px";
spotlight.style.height="350px";
spotlight.style.borderRadius="50%";
spotlight.style.pointerEvents="none";
spotlight.style.background=
"radial-gradient(circle, rgba(255,255,255,.08), transparent 70%)";
spotlight.style.zIndex="-1";
spotlight.style.filter="blur(30px)";

document.body.appendChild(spotlight);

document.addEventListener("mousemove",(e)=>{

spotlight.style.left=
(e.clientX-175)+"px";

spotlight.style.top=
(e.clientY-175)+"px";

});

// =========================
// KEYBOARD SHORTCUTS
// =========================

document.addEventListener("keydown",(e)=>{

if(e.key==="/"){

e.preventDefault();

const search=document.querySelector(".search-box input");

if(search){
search.focus();
}

}

});

// =========================
// LIVE GREETING
// =========================

function updateGreeting(){

const heroLabel=document.querySelector(".hero-label");

if(!heroLabel) return;

const hour=new Date().getHours();

let greeting="Welcome Back";

if(hour<12){
greeting="Good Morning";
}
else if(hour<18){
greeting="Good Afternoon";
}
else{
greeting="Good Evening";
}

heroLabel.textContent=`${greeting} • YOGIE CLIENT HUB`;

}

updateGreeting();

// =========================
// PROJECT TABLE HOVER GLOW
// =========================

document.querySelectorAll(
".projects-table tbody tr"
).forEach(row=>{

row.addEventListener("mouseenter",()=>{

row.style.boxShadow=
"inset 0 0 0 1px rgba(255,255,255,.08)";

});

row.addEventListener("mouseleave",()=>{

row.style.boxShadow="none";

});

});


function formatRevenue(value){
if(value >= 1000000000){
return "Rp " + (value / 1000000000).toFixed(1) + "B";
}
if(value >= 1000000){
return "Rp " + (value / 1000000).toFixed(1) + "M";
}
if(value >= 1000){
return "Rp " + (value / 1000).toFixed(0) + "K";
}
return "Rp " + value.toLocaleString("id-ID");
}

// =========================
// PAGE LOADER
// =========================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s ease";
document.body.style.opacity="1";

},50);

});

// =========================
// RANDOM QUOTES
// =========================

const quotes=[

"Build. Improve. Repeat.",
"Every project starts with one client.",
"Small wins compound into big success.",
"Consistency beats motivation.",
"Your next client is one message away."

];

const heroDesc=
document.querySelector(".hero-description");

if(heroDesc){

setInterval(()=>{

const random=
quotes[Math.floor(Math.random()*quotes.length)];

heroDesc.textContent=random;

},8000);

}

// =========================
// CONSOLE EASTER EGG
// =========================

console.log(
"%c🚀 Yogie Client Hub Premium",
"font-size:22px;font-weight:bold;color:white;"
);

console.log(
"%cDashboard Loaded Successfully",
"font-size:14px;color:#999;"
);

// =========================
// CLIENT SEARCH
// =========================

const clientSearch =
document.querySelector(".client-search input");

if(clientSearch){

clientSearch.addEventListener("keyup",()=>{

const value =
clientSearch.value.toLowerCase();

const rows =
document.querySelectorAll(".clients-table tbody tr");

rows.forEach(row=>{

const text =
row.innerText.toLowerCase();

row.style.display =
text.includes(value) ? "" : "none";

});

});

}

// =========================
// CLIENT TABLE ANIMATION
// =========================

document.querySelectorAll(
".clients-table tbody tr"
).forEach((row,index)=>{

row.style.opacity="0";
row.style.transform="translateY(20px)";

setTimeout(()=>{

row.style.transition=".5s";
row.style.opacity="1";
row.style.transform="translateY(0)";

},index*120);

});

// =========================
// CLIENT STATS COUNTER
// =========================

document.querySelectorAll(
".client-stat-card h2[data-counter]"
).forEach(counter=>{

const target=
+counter.dataset.counter;

let current=0;

const increment=
Math.max(1,target/50);

const timer=setInterval(()=>{

current+=increment;

if(current>=target){

counter.textContent=target;

clearInterval(timer);

}else{

counter.textContent=
Math.floor(current);

}

},20);

});

// =========================
// TABLE BUTTON EFFECT
// =========================

document.querySelectorAll(
".mini-btn"
).forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform=
"translateY(-2px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform=
"translateY(0)";

});

});

// =========================
// FILTER SELECT EFFECT
// =========================

document.querySelectorAll(
".filter-select"
).forEach(select=>{

select.addEventListener("change",()=>{

select.style.borderColor=
"rgba(255,255,255,.15)";

});

});

// =========================
// CLIENT ACTIVITY REVEAL
// =========================

const activityItems =
document.querySelectorAll(".activity-item");

activityItems.forEach((item,index)=>{

item.style.opacity="0";
item.style.transform="translateY(20px)";

setTimeout(()=>{

item.style.transition=".6s";
item.style.opacity="1";
item.style.transform="translateY(0)";

},index*150);

});

// =========================
// CLIENT STORAGE
// =========================

let clients =
JSON.parse(
localStorage.getItem("yogie_clients")
) || [];

/* =========================
ACTIVITY STORAGE
========================= */

let activityLog =
JSON.parse(
localStorage.getItem("yogie_activity")
) || [];
function saveActivity(){
localStorage.setItem(
"yogie_activity",
JSON.stringify(activityLog)
);
}
function addActivity(
title,
description
){
activityLog.unshift({
title,
description,
time:
new Date().toLocaleString("id-ID")
});
if(activityLog.length > 100){
activityLog.length = 100;
}
saveActivity();
renderRecentActivity();
}

function renderRecentActivity(){
const list =
document.getElementById(
"recent-activity-list"
);
if(!list) return;
list.innerHTML = "";
if(activityLog.length === 0){
list.innerHTML = `
<li class="activity-item">
No activity yet
</li>
`;
return;
}
activityLog
.slice(0,8)
.forEach(activity=>{
list.innerHTML += `
<li class="activity-item">
<div>
<strong>
${activity.title}
</strong>
<p>
${activity.description}
</p>
</div>
<span>
${activity.time}
</span>
</li>
`;
});
}

// =========================
// SAVE CLIENTS
// =========================

function saveClients(){

localStorage.setItem(
"yogie_clients",
JSON.stringify(clients)
);

}

// =========================
// UPDATE STATS
// =========================

function updateClientStats(){

const totalClients =
document.querySelector(
".client-stat-card:nth-child(1) h2"
);

const activeClients =
document.querySelector(
".client-stat-card:nth-child(2) h2"
);

if(totalClients){

totalClients.textContent =
clients.length;

}

if(activeClients){

const active =
clients.filter(
c=>c.status==="Active"
).length;

activeClients.textContent =
active;

}

}

// =========================
// GENERATE CLIENT ROW
// =========================

function createClientRow(client){

return `
<tr>

<td>

<div class="client-info">

<div class="client-avatar">
${client.name.charAt(0)}
</div>

<div>

<h4>${client.name}</h4>

<p>${client.email}</p>

</div>

</div>

</td>

<td>
${client.package}
</td>

<td>

<span class="status-badge ${client.status.toLowerCase()}">
${client.status}
</span>

</td>

<td>
${client.price}
</td>

<td>
${client.date}
</td>

<td>

<div class="table-buttons">

<button
class="mini-btn edit-client"
data-id="${client.id}"
>
Edit
</button>

<button
class="mini-btn delete-client"
data-id="${client.id}"
>
Delete
</button>

</div>

</td>

</tr>
`;

}

// =========================
// RENDER CLIENTS
// =========================

function renderClients(){

const tbody =
document.querySelector(
".clients-table tbody"
);

if(!tbody) return;

tbody.innerHTML="";

clients.forEach(client=>{

tbody.innerHTML +=
createClientRow(client);

});

updateClientStats();
  loadProjectClientOptions();

}

// =========================
// ADD DUMMY CLIENT
// =========================

function addClient(client){

clients.push({

id:Date.now(),

...client

});
addActivity(
"Client Added",
`${client.name} added`
);

saveClients();

renderClients();

}

// =========================
// FIRST LOAD
// =========================

renderClients();

// =========================
// ADD CLIENT MODAL
// =========================

const modal =
document.getElementById("clientModal");

const addButtons =
document.querySelectorAll(".primary");

const closeModal =
document.getElementById("closeModal");

addButtons.forEach(btn=>{

if(btn.textContent.includes("Add")){

btn.addEventListener("click",()=>{

modal.classList.add("show");

});

}

});

if(closeModal){

closeModal.addEventListener("click",()=>{

modal.classList.remove("show");

});

}

// =========================
// AUTO REVENUE
// =========================

function updateRevenue(){

const revenue =
document.getElementById("client-revenue");

if(!revenue) return;

let total = 0;

clients.forEach(client=>{

const number =
parseInt(
client.price.replace(/[^0-9]/g,"")
);

total += number;

});

revenue.textContent =
formatRevenue(total);

}

// =========================
// DELETE CONFIRMATION
// =========================

function bindDeleteButtons(){

document
.querySelectorAll(".delete-client")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const id =
Number(btn.dataset.id);

const client =
clients.find(
c => c.id === id
);

const confirmDelete =
confirm(
"Delete this client permanently?"
);

if(!confirmDelete) return;
clients =
clients.filter(
client => client.id !== id
);

if(client){
addActivity(
"Client Deleted",
`${client.name} removed`
);
}

saveClients();

  loadProjectClientOptions();

renderClients();

updateRevenue();

updateDashboardStats();

  renderAnalytics();

});

});

}

// =========================
// EDIT CLIENT
// =========================

let editingClientId = null;

function bindEditButtons(){

document
.querySelectorAll(".edit-client")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const id =
Number(btn.dataset.id);

const client =
clients.find(
c=>c.id===id
);

if(!client) return;

editingClientId = id;

document.getElementById(
"clientName"
).value = client.name;

document.getElementById(
"clientEmail"
).value = client.email;

document.getElementById(
"clientPackage"
).value = client.package;

document.getElementById(
"clientStatus"
).value = client.status;

document.getElementById(
"clientPrice"
).value =
client.price.replace(/[^0-9]/g,"");

modal.classList.add("show");

});

});

}

// =========================
// OVERRIDE FORM SAVE
// =========================

const clientForm =
document.getElementById("clientForm");
if(clientForm){
clientForm.addEventListener("submit",(e)=>{

e.preventDefault();

const data = {

name:
document.getElementById("clientName").value,

email:
document.getElementById("clientEmail").value,

package:
document.getElementById("clientPackage").value,

status:
document.getElementById("clientStatus").value,

price:
"Rp " +
Number(
document.getElementById("clientPrice").value
).toLocaleString("id-ID"),

date:
new Date().toLocaleDateString("id-ID")

};

if(editingClientId){

const index =
clients.findIndex(
c=>c.id===editingClientId
);

clients[index] = {

...clients[index],

...data

};

editingClientId = null;

}else{

clients.push({

id:Date.now(),

...data

});

}

saveClients();

renderClients();

loadProjectClientOptions();

updateRevenue();

updateDashboardStats();

renderAnalytics();

modal.classList.remove("show");

editingClientId = null;

clientForm.reset();

});

}

// =========================
// RENDER EXTENSION
// =========================

const originalRender =
renderClients;

renderClients = function(){

originalRender();

bindEditButtons();

bindDeleteButtons();

updateRevenue();

};

renderClients();

// =========================
// GLOBAL DASHBOARD STATS
// =========================

function getClients(){

return JSON.parse(
localStorage.getItem("yogie_clients")
) || [];

}

// =========================
// TOTAL CLIENTS
// =========================

function updateDashboardClients(){

const clients = getClients();

const totalClientsCard =
document.querySelector(
"#dashboard-total-clients"
);

if(totalClientsCard){

totalClientsCard.textContent =
clients.length;

}

}

// =========================
// ACTIVE CLIENTS
// =========================

function updateDashboardActive(){

const projects =
JSON.parse(
localStorage.getItem("yogie_projects")
) || [];

const active =
projects.filter(
project => project.status === "Active"
).length;

const activeCard =
document.querySelector(
"#dashboard-active-projects"
);

if(activeCard){
activeCard.textContent = active;
}

}

// =========================
// TOTAL REVENUE
// =========================

function updateDashboardRevenue(){
const invoices =
JSON.parse(
localStorage.getItem("yogie_invoices")
) || [];

let total = 0;

invoices.forEach(invoice=>{

if(invoice.status === "Paid"){

const value =
Number(
invoice.amount.replace(/[^0-9]/g,"")
) || 0;

total += value;

}

});

const revenueCard =
document.querySelector(
"#dashboard-revenue"
);

if(revenueCard){

revenueCard.textContent =
formatRevenue(total);

}

}

// =========================
// COMPLETED
// =========================

function updateDashboardCompleted(){

const projects =
JSON.parse(
localStorage.getItem("yogie_projects")
) || [];

const completed =
projects.filter(
project => project.status === "Completed"
).length;

const completedCard =
document.querySelector(
"#dashboard-completed"
);

if(completedCard){
completedCard.textContent = completed;
}

}

// =========================
// PENDING
// =========================

function updateDashboardPending(){

const projects =
JSON.parse(
localStorage.getItem("yogie_projects")
) || [];

const pending =
projects.filter(
project => project.status === "Pending"
).length;

const pendingCard =
document.querySelector(
"#dashboard-pending"
);

if(pendingCard){
pendingCard.textContent = pending;
}

}

// =========================
// DASHBOARD UPDATE
// =========================

function updateDashboardStats(){

updateDashboardClients();
updateDashboardRevenue();
updateDashboardActive();
updateDashboardCompleted();
updateDashboardPending();
updateDashboardProjects();
updateFooterStats();
}

updateDashboardStats();
window.addEventListener(
"storage",
updateDashboardStats
);

function updateDashboardProjects(){

const projects =
JSON.parse(
localStorage.getItem("yogie_projects")
) || [];

const card =
document.getElementById(
"dashboard-total-projects"
);

if(card){
card.textContent =
projects.length;
}

}

function updateFooterStats(){

const clients =
JSON.parse(
localStorage.getItem("yogie_clients")
) || [];

const projects =
JSON.parse(
localStorage.getItem("yogie_projects")
) || [];

const invoices =
JSON.parse(
localStorage.getItem("yogie_invoices")
) || [];

let revenue = 0;

invoices.forEach(invoice=>{

if(invoice.status === "Paid"){

revenue += Number(
invoice.amount.replace(/[^0-9]/g,"")
) || 0;

}

});

const footerRevenue =
document.getElementById("footer-revenue");

const footerClients =
document.getElementById("footer-clients");

const footerProjects =
document.getElementById("footer-projects");

if(footerRevenue){
footerRevenue.textContent =
formatRevenue(revenue);
}

if(footerClients){
footerClients.textContent =
clients.length;
}

if(footerProjects){
footerProjects.textContent =
projects.length;
}

}

// =========================

// PROJECT STORAGE

// =========================

let projects =

JSON.parse(

localStorage.getItem("yogie_projects")

) || [];

// =========================

// SAVE PROJECTS

// =========================

function saveProjects(){

localStorage.setItem(

"yogie_projects",

JSON.stringify(projects)

);

}

// =========================

// PROJECT SEARCH

// =========================

const projectSearch =

document.querySelector(

'.projects-page .client-search input'

);

if(projectSearch){

projectSearch.addEventListener("keyup",()=>{

const value =

projectSearch.value.toLowerCase();

const rows =

document.querySelectorAll(

".projects-page .clients-table tbody tr"

);

rows.forEach(row=>{

const text =

row.innerText.toLowerCase();

row.style.display =

text.includes(value) ? "" : "none";

});

});

}

// =========================

// PROJECT STATS

// =========================

function updateProjectStats(){

const total =

document.getElementById("project-total");

const active =

document.getElementById("project-active");

const pending =

document.getElementById("project-pending");

const completed =

document.getElementById("project-completed");

if(total)

total.textContent =

projects.length;

if(active)

active.textContent =

projects.filter(

p=>p.status==="Active"

).length;

if(pending)

pending.textContent =

projects.filter(

p=>p.status==="Pending"

).length;

if(completed)

completed.textContent =

projects.filter(

p=>p.status==="Completed"

).length;

}

// =========================

// PROJECT ROW

// =========================

function createProjectRow(project){

return `

<tr>

<td>${project.name}</td>

<td>${project.client}</td>

<td>

<span class="status-badge ${project.status.toLowerCase()}">

${project.status}

</span>

</td>

<td>${project.price}</td>

<td>${project.deadline}</td>

<td>

<div class="table-buttons">

<button

class="mini-btn edit-project"

data-id="${project.id}"

>

Edit

</button>

<button

class="mini-btn delete-project"

data-id="${project.id}"

>

Delete

</button>

</div>

</td>

</tr>

`;

}

// =========================
// RENDER PROJECTS
// =========================

function renderProjects(){
const tbody =
document.getElementById(
"projectsTableBody"
);
if(!tbody) return;
tbody.innerHTML = "";
projects.forEach(project=>{
tbody.innerHTML +=
createProjectRow(project);
});
updateProjectStats();
bindProjectDelete();
bindProjectEdit();
}

// =========================
// DELETE PROJECT
// =========================

function bindProjectDelete(){
document
.querySelectorAll(".delete-project")
.forEach(btn=>{
btn.addEventListener("click",()=>{
const id =
Number(btn.dataset.id);

if( !confirm(
"Delete this project?"
)
) return;

const project =
projects.find(
p=>p.id===id
);

if(project){

addActivity(
"Project Deleted",
`${project.name} removed`
);
}

projects =
projects.filter(
p=>p.id!==id
);

saveProjects();

renderProjects();

  loadProjectOptions();

updateDashboardStats();
  renderAnalytics();

});

});

}

// =========================

// PROJECT MODAL

// =========================

let editingProjectId = null;

const projectModal =

document.getElementById(

"projectModal"

);

const projectForm =

document.getElementById(

"projectForm"

);

const closeProjectModal =

document.getElementById(

"closeProjectModal"

);

document

.querySelectorAll(".projects-page .primary")

.forEach(btn=>{

if(

btn.textContent.includes("Add")

){

btn.addEventListener("click",()=>{

projectModal.classList.add(

"show"

);

});

}

});

if(closeProjectModal){

closeProjectModal.addEventListener(

"click",

()=>{

projectModal.classList.remove(

"show"

);

}

);

}

// =========================

// ADD PROJECT

// =========================

if(projectForm){

projectForm.addEventListener(

"submit",

(e)=>{

e.preventDefault();

const data = {

name:

document.getElementById(

"projectName"

).value,

client:

document.getElementById(

"projectClient"

).value,

status:

document.getElementById(

"projectStatus"

).value,

price:

"Rp " +

Number(

document.getElementById(

"projectPrice"

).value

).toLocaleString("id-ID"),

deadline:

document.getElementById(

"projectDeadline"

).value

};

if(editingProjectId){

const index =

projects.findIndex(

p=>p.id===editingProjectId

);

projects[index] = {

...projects[index],

...data

};

editingProjectId = null;

}else{

projects.push({

id:Date.now(),

...data

});
addActivity(
"Project Created",
`${data.name} created`
);

}

saveProjects();

renderProjects();

loadProjectOptions();

updateDashboardStats();

  renderAnalytics();

projectModal.classList.remove(

"show"

);

projectForm.reset();

});

}

// =========================

// EDIT PROJECT

// =========================

function bindProjectEdit(){

document

.querySelectorAll(".edit-project")

.forEach(btn=>{

btn.addEventListener("click",()=>{

const id =

Number(btn.dataset.id);

const project =

projects.find(

p=>p.id===id

);

if(!project) return;
  
  loadProjectClientOptions();
document.getElementById(
"projectClient"
).value = project.client;

editingProjectId = id;

document.getElementById(

"projectName"

).value = project.name;

document.getElementById(

"projectClient"

).value = project.client;

document.getElementById(

"projectStatus"

).value = project.status;

document.getElementById(

"projectPrice"

).value =

project.price.replace(

/[^0-9]/g,

""

);

document.getElementById(

"projectDeadline"

).value =

project.deadline;

projectModal.classList.add(

"show"

);

});

});

}

// =========================
// LOAD CLIENTS TO PROJECT SELECT
// =========================

function loadProjectClientOptions(){

const select =
document.getElementById("projectClient");

if(!select) return;

const clients =
JSON.parse(
localStorage.getItem("yogie_clients")
) || [];

select.innerHTML =
'<option value="">Select Client</option>';

clients.forEach(client=>{

select.innerHTML += `
<option value="${client.name}">
${client.name}
</option>
`;

});

}

loadProjectClientOptions();

// =========================
// PAYMENT STORAGE
// =========================

let invoices =
JSON.parse(
localStorage.getItem("yogie_invoices")
) || [];

// =========================
// SAVE INVOICES
// =========================

function saveInvoices(){

localStorage.setItem(
"yogie_invoices",
JSON.stringify(invoices)
);

}

// =========================
// SEARCH INVOICE
// =========================

const paymentSearch =
document.querySelector(
'.payments-page .client-search input'
);

if(paymentSearch){

paymentSearch.addEventListener(
"keyup",
()=>{

const value =
paymentSearch.value.toLowerCase();

const rows =
document.querySelectorAll(
".payments-page .clients-table tbody tr"
);

rows.forEach(row=>{

const text =
row.innerText.toLowerCase();

row.style.display =
text.includes(value)
? ""
: "none";

});

});

}

// =========================
// FORMAT REVENUE
// =========================

function paymentValue(str){

return parseInt(
str.replace(/[^0-9]/g,"")
) || 0;

}

// =========================
// UPDATE PAYMENT STATS
// =========================

function updatePaymentStats(){

let totalRevenue = 0;
let paidRevenue = 0;
let pendingRevenue = 0;

invoices.forEach(invoice=>{

const value =
paymentValue(invoice.amount);

totalRevenue += value;

if(invoice.status==="Paid"){

paidRevenue += value;

}else{

pendingRevenue += value;

}

});

const total =
document.getElementById(
"payment-total-revenue"
);

const paid =
document.getElementById(
"payment-paid"
);

const pending =
document.getElementById(
"payment-pending"
);

const count =
document.getElementById(
"payment-invoices"
);

if(total)
total.textContent =
formatRevenue(totalRevenue);

if(paid)
paid.textContent =
formatRevenue(paidRevenue);

if(pending)
pending.textContent =
formatRevenue(pendingRevenue);

if(count)
count.textContent =
invoices.length;

}

// =========================
// INVOICE ROW
// =========================

function createInvoiceRow(invoice){

return `

<tr>

<td>${invoice.invoice}</td>

<td>${invoice.client}</td>

<td>

<span class="status-badge ${
invoice.status==="Paid"
? "active"
: "pending"
}">

${invoice.status}

</span>

</td>

<td>${invoice.amount}</td>

<td>${invoice.dueDate}</td>

<td>

<div class="table-buttons">

<button
class="mini-btn edit-invoice"
data-id="${invoice.id}"
>

Edit

</button>

<button
class="mini-btn delete-invoice"
data-id="${invoice.id}"
>

Delete

</button>

</div>

</td>

</tr>

`;

}

// =========================
// RENDER INVOICES
// =========================

function renderInvoices(){

const tbody =
document.querySelector(
".payments-page .clients-table tbody"
);

if(!tbody) return;

tbody.innerHTML = "";

invoices.forEach(invoice=>{

tbody.innerHTML +=
createInvoiceRow(invoice);

});

updatePaymentStats();
updateDashboardStats();
bindInvoiceDelete();
bindInvoiceEdit();

}

// =========================

// INVOICE MODAL

// =========================

let editingInvoiceId = null;

const invoiceModal =

document.getElementById(

"invoiceModal"

);

const invoiceForm =

document.getElementById(

"invoiceForm"

);

const closeInvoiceModal =

document.getElementById(

"closeInvoiceModal"

);

document

.querySelectorAll(".payments-page .primary")

.forEach(btn=>{

if(

btn.textContent.includes("Create")

){

btn.addEventListener("click",()=>{

invoiceModal.classList.add(

"show"

);

});

}

});

if(closeInvoiceModal){

closeInvoiceModal.addEventListener(

"click",

()=>{

invoiceModal.classList.remove(

"show"

);

}

);

}

// =========================

// ADD / EDIT INVOICE

// =========================

if(invoiceForm){

invoiceForm.addEventListener(

"submit",

(e)=>{

e.preventDefault();
if(
!document.getElementById("invoiceProject").value
){
alert("Select project first");
return;
}
const data = {

invoice:
editingInvoiceId
? invoices.find(i => i.id === editingInvoiceId).invoice
: "INV-" + String(Date.now()).slice(-4),

client:
document.getElementById("invoiceClient").value,

project:
document.getElementById("invoiceProject").value,

amount:
"Rp " +
Number(
document.getElementById("invoiceAmount").value
).toLocaleString("id-ID"),

status:
document.getElementById("invoiceStatus").value,

dueDate:
document.getElementById("invoiceDueDate").value

};

if(editingInvoiceId){

const index =

invoices.findIndex(

i=>i.id===editingInvoiceId

);

invoices[index] = {

...invoices[index],
...data
};
  addActivity(
"Invoice Updated",
`${data.client} invoice updated`
);

editingInvoiceId = null;

}else{

invoices.push({

id:Date.now(),

...data

});

  addActivity(
"Invoice Created",
`${data.client} invoice Created`
);

}

saveInvoices();

renderInvoices();

invoiceModal.classList.remove(
"show"
);
invoiceForm.reset();
});

}

// =========================
// LOAD PROJECTS TO INVOICE SELECT
// =========================

function loadProjectOptions(){

const select =
document.getElementById("invoiceProject");

if(!select) return;

select.innerHTML =
'<option value="">Select Project</option>';

projects.forEach(project=>{

select.innerHTML += `
<option value="${project.name}">
${project.name}
</option>
`;

});

}

loadProjectOptions();

const invoiceProject =

document.getElementById("invoiceProject");

if(invoiceProject){

invoiceProject.addEventListener("change",()=>{

const project =

projects.find(

p=>p.name === invoiceProject.value

);

if(project){

document.getElementById(

"invoiceClient"

).value = project.client;

}

});

}

// =========================

// DELETE INVOICE

// =========================

function bindInvoiceDelete(){
document
.querySelectorAll(".delete-invoice")
.forEach(btn=>{
btn.addEventListener("click",()=>{

const id =
Number(btn.dataset.id);

  const invoice =
invoices.find(
i=>i.id===id
);

if(
!confirm(
"Delete invoice?"
)

) return;
if(invoice){
addActivity(
"Invoice Deleted",
`${invoice.invoice} removed`
);

}
  
invoices =
invoices.filter(
i=>i.id!==id

);

saveInvoices();

renderInvoices();

});

});

}

// =========================

// EDIT INVOICE

// =========================

function bindInvoiceEdit(){

document

.querySelectorAll(".edit-invoice")

.forEach(btn=>{

btn.addEventListener("click",()=>{

const id =

Number(btn.dataset.id);

const invoice =

invoices.find(

i=>i.id===id

);

if(!invoice) return;

editingInvoiceId = id;

  loadProjectOptions();

document.getElementById(

"invoiceClient"

).value =

invoice.client;

document.getElementById(

"invoiceAmount"

).value =

invoice.amount.replace(

/[^0-9]/g,

""

);

document.getElementById(

"invoiceStatus"

).value =

invoice.status;

document.getElementById(

"invoiceDueDate"

).value =

invoice.dueDate;

  document.getElementById(
"invoiceProject"
).value =
invoice.project || "";  

invoiceModal.classList.add(

"show"

);

});

});

}

// =========================

// INITIALIZE

// =========================

renderInvoices();

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e){

        const href = this.getAttribute('href');

        e.preventDefault();

        document.body.classList.add('page-exit');

        setTimeout(() => {
            window.location.href = href;
        }, 300);

    });
});

/* =========================
FILE STORAGE SYSTEM
========================= */

let files =
JSON.parse(
localStorage.getItem("yogie_files")
) || [];

function saveFiles(){
localStorage.setItem(
"yogie_files",
JSON.stringify(files)
);
}

/* =========================
LOAD CLIENTS
========================= */

function loadFileClientOptions(){

const select =
document.getElementById("fileClient");

const filter =
document.getElementById("fileClientFilter");

if(!select) return;

const clients =
JSON.parse(
localStorage.getItem("yogie_clients")
) || [];

select.innerHTML = "";

if(filter){
filter.innerHTML =
'<option value="">All Clients</option>';
}

clients.forEach(client=>{

select.innerHTML += `
<option value="${client.name}">
${client.name}
</option>
`;

if(filter){
filter.innerHTML += `
<option value="${client.name}">
${client.name}
</option>
`;
}

});

}

/* =========================
FILE STATS
========================= */

function updateFilesStats(){

const total =
document.getElementById("files-total");

const docs =
document.getElementById("files-documents");

const assets =
document.getElementById("files-assets");

const storage =
document.getElementById("files-storage");

if(total){
total.textContent =
files.length;
}

if(docs){

docs.textContent =
files.filter(file =>
["PDF","DOCX"].includes(file.type)
).length;

}

if(assets){

assets.textContent =
files.filter(file =>
["PNG","JPG"].includes(file.type)
).length;

}

let totalSize = 0;

files.forEach(file=>{
totalSize += file.size;
});

if(storage){

storage.textContent =
(totalSize / 1024 / 1024)
.toFixed(2) + " MB";

}

}

/* =========================
CREATE FILE ROW
========================= */

function createFileRow(file){

return `
<tr>
<td>${file.name}</td>
<td>${file.client}</td>
<td>${file.type}</td>
<td>${(file.size/1024/1024).toFixed(2)} MB</td>
<td>${file.date}</td>
<td>

<div class="table-buttons">

<button
class="mini-btn delete-file"
data-id="${file.id}">
Delete
</button>

</div>

</td>
</tr>
`;

}

/* =========================
RENDER FILES
========================= */

function renderFiles(){

const tbody =
document.getElementById(
"filesTableBody"
);

if(!tbody) return;

tbody.innerHTML = "";

files.forEach(file=>{

tbody.innerHTML +=
createFileRow(file);

});

updateFilesStats();
bindDeleteFiles();

}

/* =========================
DELETE FILE
========================= */

function bindDeleteFiles(){

document
.querySelectorAll(".delete-file")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const id =
Number(btn.dataset.id);

if(
!confirm("Delete file?")
) return;

files =
files.filter(
file=>file.id!==id
);

saveFiles();
renderFiles();

});

});

}

/* =========================
UPLOAD FILE
========================= */

const fileForm =
document.getElementById("fileForm");

if(fileForm){

fileForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const uploaded =
document.getElementById(
"fileInput"
).files[0];

if(!uploaded) return;

addActivity(
"File Uploaded",
document.getElementById("fileName").value
);

files.push({
id: Date.now(),

name:
document.getElementById("fileName").value,

client:
document.getElementById("fileClient").value,

type:
document.getElementById("fileType").value,

size:
uploaded.size,
date:
new Date().toLocaleDateString("id-ID")
});

saveFiles();
renderFiles();

document
.getElementById("fileModal")
.classList.remove("show");

fileForm.reset();

});

}

/* =========================
INITIALIZE
========================= */
window.addEventListener("load", () => {
loadFileClientOptions();
renderFiles();
});

// =========================
// NOTES STORAGE
// =========================

let notes =
JSON.parse(
localStorage.getItem("yogie_notes")
) || [];

function saveNotes(){
localStorage.setItem(
"yogie_notes",
JSON.stringify(notes)
);
}

// =========================
// NOTE STATS
// =========================

function updateNotesStats(){

document.getElementById("notes-total").textContent =
notes.length;

document.getElementById("notes-important").textContent =
notes.filter(
n => n.category === "Important"
).length;

document.getElementById("notes-client").textContent =
notes.filter(
n => n.category === "Client"
).length;

document.getElementById("notes-project").textContent =
notes.filter(
n => n.category === "Project"
).length;

}

// =========================
// NOTE ROW
// =========================

function createNoteRow(note){

return `
<tr>

<td>${note.title}</td>

<td>${note.category}</td>

<td>${note.date}</td>

<td>
<span class="status-badge active">
Saved
</span>
</td>

<td>

<div class="table-buttons">

<button
class="mini-btn edit-note"
data-id="${note.id}">
Edit
</button>

<button
class="mini-btn delete-note"
data-id="${note.id}">
Delete
</button>

</div>

</td>

</tr>
`;

}

// =========================
// RENDER NOTES
// =========================

function renderNotes(){

const tbody =
document.getElementById(
"notesTableBody"
);

if(!tbody) return;

tbody.innerHTML = "";

notes.forEach(note=>{

tbody.innerHTML +=
createNoteRow(note);

});

updateNotesStats();

bindDeleteNote();
bindEditNote();

}

// =========================
// SAVE / EDIT NOTE
// =========================

let editingNoteId = null;

const noteForm =
document.getElementById("noteForm");

if(noteForm){

noteForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

const data = {

title:
document.getElementById(
"noteTitle"
).value,

category:
document.getElementById(
"noteCategory"
).value,

content:
document.getElementById(
"noteContent"
).value,

date:
new Date()
.toLocaleDateString("id-ID")

};

if(editingNoteId){

const index =
notes.findIndex(
n=>n.id===editingNoteId
);

notes[index] = {

...notes[index],
...data

};

editingNoteId = null;

}else{

notes.push({

id:Date.now(),
...data

});

}

saveNotes();
renderNotes();

document
.getElementById("noteModal")
.classList.remove("show");

noteForm.reset();

});

}

// =========================
// DELETE NOTE
// =========================

function bindDeleteNote(){

document
.querySelectorAll(".delete-note")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const id =
Number(btn.dataset.id);

if(
!confirm("Delete note?")
) return;

notes =
notes.filter(
note=>note.id!==id
);

saveNotes();
renderNotes();

});

});

}

// =========================
// EDIT NOTE
// =========================

function bindEditNote(){

document
.querySelectorAll(".edit-note")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const id =
Number(btn.dataset.id);

const note =
notes.find(
n=>n.id===id
);

if(!note) return;

editingNoteId = id;

document.getElementById(
"noteTitle"
).value =
note.title;

document.getElementById(
"noteCategory"
).value =
note.category;

document.getElementById(
"noteContent"
).value =
note.content;

document
.getElementById("noteModal")
.classList.add("show");

});

});

}

// =========================
// NOTES SEARCH
// =========================

const notesSearch =
document.getElementById(
"notesSearch"
);

if(notesSearch){

notesSearch.addEventListener(
"keyup",
()=>{

const value =
notesSearch.value.toLowerCase();

const rows =
document.querySelectorAll(
"#notesTableBody tr"
);

rows.forEach(row=>{

const text =
row.innerText.toLowerCase();

row.style.display =
text.includes(value)
? ""
: "none";

});

});

}

// =========================
// INITIALIZE NOTES
// =========================

renderNotes();

/* =========================
ANALYTICS
========================= */

function renderAnalytics(){

const clients =
JSON.parse(
localStorage.getItem("yogie_clients")
) || [];

const projects =
JSON.parse(
localStorage.getItem("yogie_projects")
) || [];

const invoices =
JSON.parse(
localStorage.getItem("yogie_invoices")
) || [];

let revenue = 0;

invoices.forEach(invoice=>{

if(invoice.status === "Paid"){

revenue += Number(
invoice.amount.replace(/[^0-9]/g,"")
) || 0;

}

});

const totalRevenue =
document.getElementById(
"analytics-totalRevenue"
);

const totalClients =
document.getElementById(
"analytics-totalClients"
);

const totalProjects =
document.getElementById(
"analytics-totalProjects"
);

const totalInvoices =
document.getElementById(
"analytics-totalInvoices"
);

if(totalRevenue)
totalRevenue.textContent =
formatRevenue(revenue);

if(totalClients)
totalClients.textContent =
clients.length;

if(totalProjects)
totalProjects.textContent =
projects.length;

if(totalInvoices)
totalInvoices.textContent =
invoices.length;

/* TABLE SUMMARY */

const summary =
document.getElementById(
"analyticsTableBody"
);

if(summary){

summary.innerHTML = `

<tr>
<td>Total Revenue</td>
<td>${formatRevenue(revenue)}</td>
<td>Tracking</td>
</tr>

<tr>
<td>Total Clients</td>
<td>${clients.length}</td>
<td>Tracking</td>
</tr>

<tr>
<td>Total Projects</td>
<td>${projects.length}</td>
<td>Tracking</td>
</tr>

<tr>
<td>Total Invoices</td>
<td>${invoices.length}</td>
<td>Tracking</td>
</tr>

`;

}

/* PERFORMANCE TABLE */

const performance =
document.getElementById(
"analyticsPerformanceBody"
);

if(performance){

performance.innerHTML = `

<tr>
<td>Revenue</td>
<td>${formatRevenue(revenue)}</td>
<td>100%</td>
</tr>

<tr>
<td>Clients</td>
<td>${clients.length}</td>
<td>100%</td>
</tr>

<tr>
<td>Projects</td>
<td>${projects.length}</td>
<td>100%</td>
</tr>

<tr>
<td>Invoices</td>
<td>${invoices.length}</td>
<td>100%</td>
</tr>

`;

}

}

window.addEventListener(
"load",
renderAnalytics
);

/* =========================
SETTINGS STORAGE
========================= */

let settings =
JSON.parse(
localStorage.getItem("yogie_settings")
) || {

ownerName: "Yogie Fernando",
businessName: "YF Client Hub",
email: "",
phone: "",
theme: "Dark",
currency: "IDR",
dateFormat: "DD/MM/YYYY"

};

function saveSettings(){

localStorage.setItem(
"yogie_settings",
JSON.stringify(settings)
);

}

function loadSettings(){

const owner =
document.getElementById("settingsOwnerName");

const business =
document.getElementById("settingsBusinessName");

const email =
document.getElementById("settingsEmail");

const phone =
document.getElementById("settingsPhone");

const theme =
document.getElementById("settingsTheme");

const currency =
document.getElementById("settingsCurrency");

const dateFormat =
document.getElementById("settingsDateFormat");

if(owner) owner.value = settings.ownerName;
if(business) business.value = settings.businessName;
if(email) email.value = settings.email;
if(phone) phone.value = settings.phone;
if(theme) theme.value = settings.theme;
if(currency) currency.value = settings.currency;
if(dateFormat) dateFormat.value = settings.dateFormat;

}

const saveSettingsBtn =
document.getElementById("saveSettingsBtn");

if(saveSettingsBtn){

saveSettingsBtn.addEventListener("click",()=>{

settings = {

ownerName:
document.getElementById("settingsOwnerName").value,

businessName:
document.getElementById("settingsBusinessName").value,

email:
document.getElementById("settingsEmail").value,

phone:
document.getElementById("settingsPhone").value,

theme:
document.getElementById("settingsTheme").value,

currency:
document.getElementById("settingsCurrency").value,

dateFormat:
document.getElementById("settingsDateFormat").value

};

saveSettings();

alert("Settings saved");

});

}

const resetSettingsBtn =
document.getElementById("resetSettingsBtn");

if(resetSettingsBtn){

resetSettingsBtn.addEventListener("click",()=>{

if(!confirm("Reset settings?"))
return;

localStorage.removeItem(
"yogie_settings"
);

location.reload();

});

}

window.addEventListener(
"load",
loadSettings
);

/* =========================
EXPORT BACKUP JSON
========================= */

const exportBtn =
document.getElementById(
"exportBackupBtn"
);

if(exportBtn){

exportBtn.addEventListener(
"click",
()=>{

const backup = {

settings:
JSON.parse(
localStorage.getItem("yogie_settings")
) || {},

clients:
JSON.parse(
localStorage.getItem("yogie_clients")
) || [],

projects:
JSON.parse(
localStorage.getItem("yogie_projects")
) || [],
invoices:
JSON.parse(
localStorage.getItem("yogie_invoices")
) || [],
files:
JSON.parse(
localStorage.getItem("yogie_files")
) || [],
notes:
JSON.parse(
localStorage.getItem("yogie_notes")
) || [],
exportDate:
new Date().toISOString()
};
const blob =
new Blob(
[
JSON.stringify(
backup,
null,
2
)
],
{
type:"application/json"
}
);
const url =
URL.createObjectURL(blob);
const a =
document.createElement("a");
a.href = url;
a.download =
`YF-Backup-${
new Date()
.toISOString()
.slice(0,10)
}.json`;

document.body.appendChild(a);
a.click();
a.remove();
URL.revokeObjectURL(url);
alert(
"Backup exported successfully"
);

});

}

/* =========================
IMPORT BACKUP JSON
========================= */

const importBtn =
document.getElementById(
"importBackupBtn"
);
const importInput =
document.getElementById(
"importBackupInput"
);
if(importBtn && importInput){
importBtn.addEventListener(
"click",
()=>{
importInput.click();
});
}
if(importInput){
importInput.addEventListener(
"change",
(e)=>{
const file =
e.target.files[0];
if(!file) return;
const reader =
new FileReader();
reader.onload =
(event)=>{
try{
const backup =
JSON.parse(
event.target.result
);
if(backup.settings){
localStorage.setItem(
"yogie_settings",
JSON.stringify(
backup.settings
)
);
}
if(backup.clients){
localStorage.setItem(
"yogie_clients",
JSON.stringify(
backup.clients
)
);
}
if(backup.projects){
localStorage.setItem(
"yogie_projects",
JSON.stringify(
backup.projects
)
);
}
if(backup.invoices){
localStorage.setItem(
"yogie_invoices",
JSON.stringify(
backup.invoices
)
);
}
if(backup.files){
localStorage.setItem(
"yogie_files",
JSON.stringify(
backup.files
)
);
}
if(backup.notes){
localStorage.setItem(
"yogie_notes",
JSON.stringify(
backup.notes
)
);
}
alert(
"Backup imported successfully"
);
location.reload();
}catch(error){
alert(
"Invalid backup file"
);
}
};
reader.readAsText(file);
});
}