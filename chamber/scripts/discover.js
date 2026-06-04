import { places } from "../data/discover.mjs";

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

const grid = document.querySelector("#discover-grid");
const visitMessage = document.querySelector("#visit-message");

const imageModal = document.querySelector("#imageModal");
const closeImageModal = document.querySelector("#closeImageModal");
const modalImage = document.querySelector("#modalImage");
const modalTitle = document.querySelector("#modalTitle");
const modalAddress = document.querySelector("#modalAddress");
const modalDescription = document.querySelector("#modalDescription");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

function displayVisitMessage() {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((now - Number(lastVisit)) / 86400000);

    if (days < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
      visitMessage.textContent = "You last visited 1 day ago.";
    } else {
      visitMessage.textContent = `You last visited ${days} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
}

function displayPlaces() {
  grid.innerHTML = "";

  places.forEach((place, index) => {
    const card = document.createElement("article");

    card.classList.add("discover-card");
    card.classList.add(`area-${index + 1}`);

    card.innerHTML = `
      <h2>${place.name}</h2>

      <figure>
        <img
          src="images/${place.image}"
          alt="${place.name}"
          loading="lazy"
          width="300"
          height="200">
      </figure>

      <address>${place.address}</address>

      <p>${place.description}</p>

      <button class="learn-more" type="button">Learn More</button>
    `;

    const button = card.querySelector(".learn-more");

    button.addEventListener("click", () => {
      modalImage.src = `images/${place.image}`;
      modalImage.alt = place.name;

      modalTitle.textContent = place.name;
      modalAddress.textContent = place.address;
      modalDescription.textContent = place.details;

      imageModal.showModal();
    });

    grid.appendChild(card);
  });
}

closeImageModal.addEventListener("click", () => {
  imageModal.close();
});

imageModal.addEventListener("click", (event) => {
  const box = imageModal.getBoundingClientRect();

  if (
    event.clientX < box.left ||
    event.clientX > box.right ||
    event.clientY < box.top ||
    event.clientY > box.bottom
  ) {
    imageModal.close();
  }
});

displayVisitMessage();
displayPlaces();