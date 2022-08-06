const btn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  // if (!navLinks.classList.contains("active")) {
  sidebar.classList.add("active");
  // }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
