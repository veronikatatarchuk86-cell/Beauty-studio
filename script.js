(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();




const controls = document.querySelector(".controls");

controls.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    return;
  }

  const prevActivePane = document.querySelector(".pane.is-active");
  if (prevActivePane) {
    prevActivePane.classList.remove("is-active");
  }

  const paneId = e.target.dataset.id;
  const nextActivePane = document.querySelector(`#${paneId}`);
  nextActivePane.classList.add("is-active");
});