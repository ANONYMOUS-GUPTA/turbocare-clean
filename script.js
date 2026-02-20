// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuOpen.classList.toggle('hidden');
  menuClose.classList.toggle('hidden');
});

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

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -300, // adjust based on card width + gap
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});
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
showAllBtn.addEventListener('click', () => {
  productCards.forEach(product => {
    product.style.display = 'flex';
  });
  
  document.getElementById('featured-products').scrollIntoView({ behavior: 'smooth' });
});
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
