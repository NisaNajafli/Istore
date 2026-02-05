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
      clickable: true,
    },
    navigation: {
      nextEl: ".apple-hero__next",
      prevEl: ".apple-hero__prev",
    },
    grabCursor: true,
  });
});
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    item.classList.toggle("active");
  });
});
const openBtns = document.querySelectorAll("[data-modal-open]");
const modal = document.querySelector("[data-modal]");
const overlay = document.querySelector("[data-modal-overlay]");
const closeBtn = document.querySelector("[data-modal-close]");

function openModal(e) {
  e.preventDefault();
  modal.classList.add("is-active");
  overlay.classList.add("is-active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-active");
  overlay.classList.remove("is-active");
  document.body.style.overflow = "";
}

openBtns.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
document.getElementById("year").textContent = new Date().getFullYear();
const mainButton = document.getElementById("main-button");
mainButton.addEventListener("click", function () {
  this.classList.toggle("open");
});
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open_menu");
  const closeBtn = document.getElementById("close_menu");
  const menu = document.querySelector(".mobile__menu");
  const overlay = document.getElementById("menu_overlay");
  const menuLinks = document.querySelectorAll(".mobile__menu a");

  function openMenu() {
    menu.classList.add("is-open");
    overlay.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    overlay.classList.remove("is-active");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdownLinks = document.querySelectorAll(
    ".mobile__menu .nav-dropdown > a",
  );

  dropdownLinks.forEach((link) => {
    /* CAPTURE PHASE – ƏVVƏL TUTURUQ */
    link.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const parent = this.closest(".nav-dropdown");
        parent.classList.toggle("active");
      },
      true,
    ); // 🔥 BURASI ƏSASDIR
  });
});

const thumbsSwiper = new Swiper(".thumbsSwiper", {
  direction: "vertical",
  slidesPerView: 4,
  spaceBetween: 12,
  navigation: {
    nextEl: ".thumbs-next",
    prevEl: ".thumbs-prev",
  },
});

// Thumb click
document.querySelectorAll(".product-thumbs .swiper-slide").forEach((slide) => {
  slide.addEventListener("click", function () {
    document
      .querySelectorAll(".product-thumbs .swiper-slide")
      .forEach((s) => s.classList.remove("is-active"));
    this.classList.add("is-active");

    const img = this.querySelector("img");
    const full = img.getAttribute("data-full");

    // change main image
    document.getElementById("mainProductImage").src = full;
    document.getElementById("mainImageLink").href = full;
  });
});
Fancybox.bind("[data-fancybox='gallery']");
