
import { getCourts } from "./modules/data.js";
import { courtCardTemplate, showCourtDialog, toggleFavorite } from "./modules/ui.js";

const courtList = document.querySelector("#court-list");
const searchInput = document.querySelector("#search-input");
const filterButtons = document.querySelectorAll(".filter");
const resultsCount = document.querySelector("#results-count");
const dialog = document.querySelector("#court-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeDialog = document.querySelector("#close-dialog");

let courts = [];
let activeFilter = "all";

function renderCourts(items) {
  if (!courtList) return;

  courtList.innerHTML = items.map(courtCardTemplate).join("");
  resultsCount.textContent = `${items.length} court${items.length === 1 ? "" : "s"} found`;

  courtList.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const action = button.dataset.action;
      const selectedCourt = courts.find(court => court.id === id);

      if (action === "details") {
        showCourtDialog(selectedCourt, dialog, dialogContent);
      }

      if (action === "favorite") {
        toggleFavorite(id);
        applyFilters();
      }
    });
  });
}

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();

  let filteredCourts = courts.filter(court => {
    const matchesSearch = court.name.toLowerCase().includes(searchTerm) ||
      court.city.toLowerCase().includes(searchTerm);

    const matchesFilter =
      activeFilter === "all" ||
      court.type === activeFilter ||
      court.skillLevel === activeFilter ||
      (activeFilter === "lights" && court.lighting === "Yes");

    return matchesSearch && matchesFilter;
  });

  renderCourts(filteredCourts);
}

async function init() {
  courts = await getCourts();
  renderCourts(courts);

  searchInput.addEventListener("input", applyFilters);

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.dataset.filter;
      applyFilters();
    });
  });

  closeDialog.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", event => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

init();
