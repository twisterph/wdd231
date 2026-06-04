
import { getCourts } from "./modules/data.js";

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#primary-nav");
const year = document.querySelector("#current-year");
const modified = document.querySelector("#last-modified");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    const expanded = nav.classList.contains("open");
    menuButton.setAttribute("aria-expanded", expanded);
  });
}

document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

if (year) {
  year.textContent = new Date().getFullYear();
}

if (modified) {
  modified.textContent = `Last Modified: ${document.lastModified}`;
}

const featuredTitle = document.querySelector("#featured-title");
const featuredDescription = document.querySelector("#featured-description");
const courtCount = document.querySelector("#court-count");

async function loadFeaturedCourt() {
  const courts = await getCourts();

  if (courtCount && courts.length > 0) {
    courtCount.textContent = courts.length;
  }

  if (featuredTitle && featuredDescription && courts.length > 0) {
    const court = courts[Math.floor(Math.random() * courts.length)];
    featuredTitle.textContent = court.name;
    featuredDescription.textContent = `${court.city} • ${court.type} • ${court.skillLevel} • Rating ${court.rating}`;
  }
}

loadFeaturedCourt();
