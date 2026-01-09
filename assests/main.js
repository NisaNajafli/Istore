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
});