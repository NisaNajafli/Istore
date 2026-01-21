document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".appleHeroSwiper");
  if (!hero) return;

  new Swiper(".appleHeroSwiper", {
    loop: true,
    speed: 900,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false
    // },
    pagination: {
      el: ".apple-hero__pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".apple-hero__next",
      prevEl: ".apple-hero__prev"
    },
    grabCursor: true
  });
});
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})
document.querySelectorAll('.faq-question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    item.classList.toggle('active');
  });
});
const openBtns = document.querySelectorAll('[data-modal-open]');
const modal = document.querySelector('[data-modal]');
const overlay = document.querySelector('[data-modal-overlay]');
const closeBtn = document.querySelector('[data-modal-close]');

function openModal(e) {
  e.preventDefault();
  modal.classList.add('is-active');
  overlay.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-active');
  overlay.classList.remove('is-active');
  document.body.style.overflow = '';
}

openBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
document.getElementById("year").textContent = new Date().getFullYear();
const mainButton = document.getElementById("main-button");
      mainButton.addEventListener("click", function () {
        this.classList.toggle("open");
      });