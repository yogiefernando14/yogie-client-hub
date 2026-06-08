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
