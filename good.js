 // Fade out preloader
window.addEventListener("load", () => {
  const loader = document.querySelector("#preloader");
  Object.assign(loader?.style || {}, { opacity: "0", visibility: "hidden" });
});

// Mobile menu logic
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const nav = navbar?.querySelector("nav");

  navbar?.addEventListener("click", ({ clientX }) => {
    if (window.innerWidth <= 992 && clientX > navbar.offsetWidth - 60) {
      nav?.classList.toggle("active");
      navbar.classList.toggle("nav-open");
    }
  });
});
