const modal = document.getElementById("modal");
const onSummit = document.getElementById("onSubmmit");
const closeModal = document.getElementById("closeModal");

onSummit.addEventListener("submit", () => {
  modal.style.display = "flex";
  event.preventDefault();
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
