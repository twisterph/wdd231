const url = "data/members.json";
const cards = document.querySelector("#members");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();

  displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {
  members.forEach((member) => {

    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" loading="lazy">
      <h2>${member.name}</h2>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p>
        <a href="${member.website}" target="_blank">
          Visit Website
        </a>
      </p>
      <p>${member.description}</p>
    `;

    cards.appendChild(card);
  });
};

const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");

gridButton.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});