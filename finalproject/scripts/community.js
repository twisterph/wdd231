
import { getCourts } from "./modules/data.js";
import { getFavorites } from "./modules/storage.js";
import "./main.js";

const list = document.querySelector("#favorite-list");

async function displayFavorites() {
  const courts = await getCourts();
  const favorites = getFavorites();
  const favoriteCourts = courts.filter(court => favorites.includes(court.id));

  if (!list) return;

  if (favoriteCourts.length === 0) {
    list.innerHTML = "<li>No favorite courts saved yet. Visit the courts page to save one.</li>";
    return;
  }

  list.innerHTML = favoriteCourts
    .map(court => `<li><strong>${court.name}</strong> — ${court.city}</li>`)
    .join("");
}

displayFavorites();
