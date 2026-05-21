
const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const forecastContainer = document.querySelector("#forecast");

const latitude = 34.48;
const longitude = -114.32;
const apiKey = "f5a10ba1a899c2ab8521e1bbf6fff12f";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherUrl);

    if (response.ok) {
      const data = await response.json();

      currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
      weatherDesc.textContent = data.weather[0].description;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);

    if (response.ok) {
      const data = await response.json();

      displayForecast(data.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(forecastList) {
  const dailyForecasts = forecastList.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  forecastContainer.innerHTML = "";

  dailyForecasts.slice(0, 3).forEach((day) => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-day");

    forecastCard.innerHTML = `
      <strong>${dayName}</strong>
      <p>${Math.round(day.main.temp)}&deg;F</p>
    `;

    forecastContainer.appendChild(forecastCard);
  });
}

const spotlightContainer = document.querySelector("#spotlight-cards");
const membersUrl = "data/members.json";

async function getSpotlights() {
  try {
    const response = await fetch(membersUrl);

    if (response.ok) {
      const data = await response.json();

      displaySpotlights(data.members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displaySpotlights(members) {
  const qualifiedMembers = members.filter(
    (member) => member.membership === 2 || member.membership === 3
  );

  qualifiedMembers.sort(() => Math.random() - 0.5);

  const selectedMembers = qualifiedMembers.slice(0, 3);

  spotlightContainer.innerHTML = "";

  selectedMembers.forEach((member) => {
    const card = document.createElement("section");
    card.classList.add("spotlight-card");

    const membershipLevel =
      member.membership === 3 ? "Gold Member" : "Silver Member";

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><strong>${membershipLevel}</strong></p>
    `;

    spotlightContainer.appendChild(card);
  });
}

getWeather();
getForecast();
getSpotlights();