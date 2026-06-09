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
// AUTO REVENUE COUNTER
// =========================

const revenueElement =
document.getElementById("dashboard-revenue");
if(revenueElement){
let value = 0;
const target = 32000000;
const interval = setInterval(()=>{
value += 650000;
if(value >= target){
value = target;
clearInterval(interval)
}
revenueElement.textContent = formatRevenue(value);
},25);

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

bindDeleteButtons();

}

// =========================
// DELETE CLIENT
// =========================

function bindDeleteButtons(){

document
.querySelectorAll(".delete-client")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const id =
Number(btn.dataset.id);

clients =
clients.filter(
client=>client.id!==id
);

saveClients();

renderClients();

});

});

}

// =========================
// ADD DUMMY CLIENT
// =========================

function addClient(client){

clients.push({

id:Date.now(),

...client

});

saveClients();

renderClients();

}

// =========================
// FIRST LOAD
// =========================

renderClients();

// =========================
// DEMO DATA
// =========================

if(clients.length===0){

addClient({

name:"Yogie Store",

email:"client@yogiestore.com",

package:"Business Website",

status:"Active",

price:"Rp 5.000.000",

date:"08 Jun 2026"

});

addClient({

name:"Arkana Digital",

email:"hello@arkana.id",

package:"Landing Page",

status:"Pending",

price:"Rp 1.500.000",

date:"06 Jun 2026"

});

addClient({

name:"PT Prima Jaya",

email:"admin@primajaya.co.id",

package:"E-Commerce",

status:"Completed",

price:"Rp 8.500.000",

date:"03 Jun 2026"

});

}

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
// CLIENT FORM
// =========================

const clientForm =
document.getElementById("clientForm");

if(clientForm){

clientForm.addEventListener("submit",(e)=>{

e.preventDefault();

const price =
Number(
document.getElementById("clientPrice").value
);

addClient({

name:
document.getElementById("clientName").value,

email:
document.getElementById("clientEmail").value,

package:
document.getElementById("clientPackage").value,

status:
document.getElementById("clientStatus").value,

price:
"Rp " + price.toLocaleString("id-ID"),

date:
new Date().toLocaleDateString("id-ID")

});

updateRevenue();

modal.classList.remove("show");

clientForm.reset();

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

const confirmDelete =
confirm(
"Delete this client permanently?"
);

if(!confirmDelete) return;

clients =
clients.filter(
client=>client.id!==id
);

saveClients();

renderClients();

updateRevenue();

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

updateRevenue();

modal.classList.remove("show");

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

const clients = getClients();

const active =
clients.filter(
client =>
client.status === "Active"
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

const clients = getClients();

let total = 0;

clients.forEach(client=>{

const value =
parseInt(
client.price.replace(/[^0-9]/g,"")
);

total += value;

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

const clients = getClients();

const completed =
clients.filter(
client =>
client.status === "Completed"
).length;

const completedCard =
document.querySelector(
"#dashboard-completed"
);

if(completedCard){

completedCard.textContent =
completed;

}

}

// =========================
// PENDING
// =========================

function updateDashboardPending(){

const clients = getClients();

const pending =
clients.filter(
client =>
client.status === "Pending"
).length;

const pendingCard =
document.querySelector(
"#dashboard-pending"
);

if(pendingCard){

pendingCard.textContent =
pending;

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

}

updateDashboardStats();

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

document.querySelector(

".projects-page .clients-table tbody"

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

if(

!confirm(

"Delete this project?"

)

) return;

projects =

projects.filter(

p=>p.id!==id

);

saveProjects();

renderProjects();

updateDashboardStats();

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

}

saveProjects();

renderProjects();

updateDashboardStats();

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

// DEMO PROJECTS

// =========================

if(projects.length===0){

projects.push({

id:Date.now(),

name:"Yogie Store",

client:"Yogie Store",

status:"Active",

price:"Rp 5000000",

deadline:"2026-06-15"

});

projects.push({

id:Date.now()+1,

name:"Landing Page Arkana",

client:"Arkana Digital",

status:"Pending",

price:"Rp 1500000",

deadline:"2026-06-20"

});

saveProjects();

}

renderProjects();

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

const data = {

invoice:

"INV-" +

String(

Date.now()

).slice(-4),

client:

document.getElementById(

"invoiceClient"

).value,

amount:

"Rp " +

Number(

document.getElementById(

"invoiceAmount"

).value

).toLocaleString("id-ID"),

status:

document.getElementById(

"invoiceStatus"

).value,

dueDate:

document.getElementById(

"invoiceDueDate"

).value

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

editingInvoiceId = null;

}else{

invoices.push({

id:Date.now(),

...data

});

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

// DELETE INVOICE

// =========================

function bindInvoiceDelete(){

document

.querySelectorAll(".delete-invoice")

.forEach(btn=>{

btn.addEventListener("click",()=>{

const id =

Number(btn.dataset.id);

if(

!confirm(

"Delete invoice?"

)

) return;

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

invoiceModal.classList.add(

"show"

);

});

});

}

// =========================

// DEMO INVOICES

// =========================

if(invoices.length===0){

invoices.push({

id:1,

invoice:"INV-001",

client:"Yogie Store",

amount:"Rp 5000000",

status:"Paid",

dueDate:"2026-06-15"

});

invoices.push({

id:2,

invoice:"INV-002",

client:"Arkana Digital",

amount:"Rp 1500000",

status:"Pending",

dueDate:"2026-06-20"

});

saveInvoices();

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
