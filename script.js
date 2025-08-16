// Scroll Reveal Animation
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  observer.observe(card);
});

let gained = 76; // your gained percentage
let progress = 0;
let bar = document.getElementById("bar");
let percent = document.getElementById("percent");

let timer = setInterval(() => {
  if (progress >= gained) clearInterval(timer);
  else {
    progress++;
    bar.style.width = progress + "%";
    percent.textContent = progress + "%";
  }
}, 20);

// for second progress bar
let gained1 = 83; // your gained percentage
let progress1 = 0;
let bar1 = document.getElementById("bar1");
let percent1 = document.getElementById("percent1");

let timer1 = setInterval(() => {
  if (progress1 >= gained1) clearInterval(timer1);
  else {
    progress1++;
    bar1.style.width = progress1 + "%";
    percent1.textContent = progress1 + "%";
  }
}, 20);

 const backbtn = document.getElementById("backbtn");

backbtn.addEventListener('click', () =>{
 if (document.referrer !== "") {
      window.history.back();
    } else {
      window.location.href = "index.html"; // fallback page
    }
});