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

const revenueElement=[...document.querySelectorAll(".stat-card h2")]
.find(el=>el.textContent.includes("Rp"));

if(revenueElement){

let value=0;

const target=32000000;

const interval=setInterval(()=>{

value+=650000;

if(value>=target){

value=target;
clearInterval(interval);

}

revenueElement.textContent=
formatRevenue(value);

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
