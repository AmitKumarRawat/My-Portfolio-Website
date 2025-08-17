  const duration = 1200;
    const ease = t => 1 - Math.pow(1 - t, 3);

    document.querySelectorAll('.circle').forEach(c => {
      const val = +c.dataset.value;
      let start;
      function anim(ts) {
        if (!start) start = ts;
        const t = Math.min(1, (ts - start) / duration);
        const cur = Math.round(val * ease(t));
        c.style.setProperty('--p', cur);
        c.querySelector('span').textContent = cur + '%';
        if (t < 1) requestAnimationFrame(anim);
      }
      requestAnimationFrame(anim);
    });

    // for moving card
    document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.13 });

  document.querySelectorAll(".achievement-card").forEach(card => {
    observer.observe(card);
  });
});

//  extra 
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".experience-card, .achievement-card, .card").forEach(card => {
    observer.observe(card);
  });
});

const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('night');
    document.body.classList.toggle("dark-mode");
});

// for navbar glow
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 50);
});

// for open nav

const navbar = document.getElementById("navbarId");
const ulElements = document.getElementById("ulelements");

// Create toggle button dynamically
const menuBtn = document.createElement("button");
menuBtn.innerText = "☰";
menuBtn.classList.add("menu-toggle");
navbar.insertBefore(menuBtn, ulElements);

menuBtn.addEventListener("click", () => {
  ulElements.classList.toggle("open");
   // change button text/icon
  if (ulElements.classList.contains("open")) {
    menuBtn.innerText = "☰⇧";  // close icon
  } else {
    menuBtn.innerText = "☰⇩";  // menu icon
  }
});

