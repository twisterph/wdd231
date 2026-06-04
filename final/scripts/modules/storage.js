
const KEY = "courtfinder-favorites";

export function getFavorites() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveFavorite(id) {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem(KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(id) {
  const favorites = getFavorites().filter(item => item !== id);
  localStorage.setItem(KEY, JSON.stringify(favorites));
}

export function isFavorite(id) {
  return getFavorites().includes(id);
}
