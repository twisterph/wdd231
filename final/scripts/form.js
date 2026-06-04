
import "./main.js";

const results = document.querySelector("#form-results");
const params = new URLSearchParams(window.location.search);

if (results) {
  const entries = [...params.entries()];

  if (entries.length === 0) {
    results.innerHTML = "<p>No form data was submitted.</p>";
  } else {
    results.innerHTML = entries.map(([key, value]) => `
      <dt>${key}</dt>
      <dd>${value}</dd>
    `).join("");
  }
}
