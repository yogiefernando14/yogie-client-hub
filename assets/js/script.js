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
// FLOATING ORB PARALLAX
// =========================

document.addEventListener("mousemove", (e) => {

const x = e.clientX / window.innerWidth;
const y = e.clientY / window.innerHeight;

const orb1 = document.querySelector(".orb-1");
const orb2 = document.querySelector(".orb-2");
const orb3 = document.querySelector(".orb-3");

if (orb1) {
orb1.style.transform =
`translate(${x * -20}px, ${y * -20}px)`;
}

if (orb2) {
orb2.style.transform =
`translate(${x * 25}px, ${y * 25}px)`;
}

if (orb3) {
orb3.style.transform =
`translate(${x * -15}px, ${y * -15}px)`;
}

});

// =========================
// FAKE NOTIFICATION
// =========================

const bell = document.querySelector(".icon-btn");

if (bell) {

bell.addEventListener("click", () => {

alert(
"🔔 Notifications\\n\\nNo new notifications."
);

});

}

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
