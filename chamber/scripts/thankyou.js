const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

const params = new URLSearchParams(window.location.search);

const results = document.querySelector("#form-results");

results.innerHTML = `
  <p><strong>First Name:</strong> ${params.get("firstName")}</p>
  <p><strong>Last Name:</strong> ${params.get("lastName")}</p>
  <p><strong>Email:</strong> ${params.get("email")}</p>
  <p><strong>Mobile Phone:</strong> ${params.get("phone")}</p>
  <p><strong>Business Name:</strong> ${params.get("organization")}</p>
  <p><strong>Submitted:</strong> ${params.get("timestamp")}</p>
`;