document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBILE MENU
  ========================== */
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

  /* =========================
     STICKY HEADER EFFECT
  ========================== */
  const header = document.getElementById('main-header');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('sticky-active', 'bg-gray-950', 'shadow-lg');
      } else {
        header.classList.remove('sticky-active', 'bg-gray-950', 'shadow-lg');
      }
    });
  }

  /* =========================
     CAROUSEL
  ========================== */
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  if (carousel && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  /* =========================
     PRODUCT FILTER
  ========================== */
  const lifestyleCards = document.querySelectorAll('.lifestyle-card');
  const productCards = document.querySelectorAll('.product-card');
  const showAllBtn = document.getElementById('show-all-btn');

  if (lifestyleCards.length > 0 && productCards.length > 0) {
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
      });
    });
  }

  if (showAllBtn && productCards.length > 0) {
    showAllBtn.addEventListener('click', () => {
      productCards.forEach(product => {
        product.style.display = 'flex';
      });
    });
  }

  /* =========================
     NEWSLETTER FORM
  ========================== */
  const form = document.getElementById("newsletterForm");
  const responseMessage = document.getElementById("responseMessage");

  if (form && responseMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();

      if (name && email) {
        responseMessage.style.color = "#00FFB1";
        responseMessage.textContent = `Thank you ${name}! You are now subscribed to TurboCare updates.`;
        form.reset();
      } else {
        responseMessage.style.color = "#FF7A7A";
        responseMessage.textContent = "Please enter valid details.";
      }
    });
  }

  /* =========================
     FADE-IN ON SCROLL
  ========================== */
  const faders = document.querySelectorAll(".fade-in");

  if (faders.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    faders.forEach(el => observer.observe(el));
  }

});