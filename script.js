// Mobile Menu Toggle
// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

if (menuBtn && mobileMenu && menuOpen && menuClose) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
  });
}

// Sticky shadow effect on scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('sticky-active');
  } else {
    header.classList.remove('sticky-active');
  }
});


const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (carousel && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  });
}
const lifestyleCards = document.querySelectorAll('.lifestyle-card');
const productCards = document.querySelectorAll('.product-card');
const showAllBtn = document.getElementById('show-all-btn');

// Filter products by lifestyle
lifestyleCards.forEach(card => {
  card.addEventListener('click', () => {
    const category = card.dataset.category;
    
    productCards.forEach(product => {
      if (product.dataset.category === category) {
        product.style.display = 'flex';
      } else {
        product.style.display = 'none';
      }
    });
    
    document.getElementById('featured-products').scrollIntoView({ behavior: 'smooth' });
  });
});

// Show all products
if (showAllBtn) {
  showAllBtn.addEventListener('click', () => {
    productCards.forEach(product => {
      product.style.display = 'flex';
    });

    const featured = document.getElementById('featured-products');
    if (featured) {
      featured.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("newsletterForm");
  const responseMessage = document.getElementById("responseMessage");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    
    if (name && email) {
      responseMessage.style.color = "#00FFB1";
      responseMessage.textContent = `Thank you ${name}! You are now subscribed to TurboCare updates.`;
      form.reset();
      
      // You can integrate Google Form or backend here later
    } else {
      responseMessage.style.color = "#FF7A7A";
      responseMessage.textContent = "Please enter valid details.";
    }
  });
});


// Navbar shrink effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("bg-gray-950", "shadow-lg");
  } else {
    header.classList.remove("bg-gray-950", "shadow-lg");
  }
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Smooth parallax effect
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax-bg");
  let scrollPosition = window.pageYOffset;
  if (parallax) {
    parallax.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(el => observer.observe(el));
});