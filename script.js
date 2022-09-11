const toggleArrow = document.querySelector(".toggle-btn");

toggleArrow.addEventListener("click", () => {
  const sidebar = document.querySelector("#sidebar");

  sidebar.classList.toggle("active");
});
