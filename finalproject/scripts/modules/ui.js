
import { saveFavorite, removeFavorite, isFavorite } from "./storage.js";

export function courtCardTemplate(court) {
  const favoriteText = isFavorite(court.id) ? "Remove Favorite" : "Save Favorite";
  return `
    <article class="court-card">
      <img src="${court.image}" alt="${court.name} basketball court" width="900" height="560" loading="lazy">
      <div class="court-card-content">
        <h3>${court.name}</h3>
        <p>${court.city}</p>
        <div class="badge-row">
          <span class="badge">${court.type}</span>
          <span class="badge">${court.skillLevel}</span>
          <span class="badge">⭐ ${court.rating}</span>
          <span class="badge">Lights: ${court.lighting}</span>
        </div>
        <p>${court.description}</p>
        <div class="card-actions">
          <button class="card-button" data-id="${court.id}" data-action="details">View Court</button>
          <button class="favorite-button" data-id="${court.id}" data-action="favorite">${favoriteText}</button>
        </div>
      </div>
    </article>
  `;
}

export function showCourtDialog(court, dialog, content) {
  content.innerHTML = `
    <img class="dialog-image" src="${court.image}" alt="${court.name}" width="900" height="560">
    <h2 id="dialog-title">${court.name}</h2>
    <p><strong>City:</strong> ${court.city}</p>
    <p><strong>Type:</strong> ${court.type}</p>
    <p><strong>Skill Level:</strong> ${court.skillLevel}</p>
    <p><strong>Rating:</strong> ${court.rating}</p>
    <p><strong>Lighting:</strong> ${court.lighting}</p>
    <p><strong>Best Time:</strong> ${court.bestTime}</p>
    <p><strong>Surface:</strong> ${court.surface}</p>
    <p><strong>Parking:</strong> ${court.parking}</p>
    <p>${court.description}</p>
  `;
  dialog.showModal();
}

export function toggleFavorite(id) {
  if (isFavorite(id)) {
    removeFavorite(id);
  } else {
    saveFavorite(id);
  }
}
