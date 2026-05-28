const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

const timestamp = document.querySelector("#timestamp");
timestamp.value = new Date().toLocaleString();

const modalLinks = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll(".close-modal");

modalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const modalId = link.getAttribute("data-modal");
    const modal = document.querySelector(`#${modalId}`);

    modal.showModal();
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    const dimensions = dialog.getBoundingClientRect();

    if (
      event.clientX < dimensions.left ||
      event.clientX > dimensions.right ||
      event.clientY < dimensions.top ||
      event.clientY > dimensions.bottom
    ) {
      dialog.close();
    }
  });
});