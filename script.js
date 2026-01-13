const countriesContainer = document.getElementById("countriesContainer");
const statusMessage = document.getElementById("statusMessage");
const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");

let countriesData = [];
let filteredCountries = [];

/* -----------------------------
   UI Helpers
------------------------------ */

function showStatus(message) {
  statusMessage.textContent = message;
  statusMessage.classList.remove("hidden");
}

function hideStatus() {
  statusMessage.classList.add("hidden");
}

function clearCountries() {
  countriesContainer.innerHTML = "";
}

/* -----------------------------
   Render Country Cards
------------------------------ */

function renderCountries(countries) {
  clearCountries();

  if (countries.length === 0) {
    showStatus("No countries match your search criteria.");
    return;
  }

  hideStatus();

  const fragment = document.createDocumentFragment();

  countries.forEach((country) => {
    const card = document.createElement("article");
    card.className = "country-card";

    card.innerHTML = `
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" />
      <h3>${country.name.common}</h3>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    `;

    fragment.appendChild(card);
  });

  countriesContainer.appendChild(fragment);
}

/* -----------------------------
   Fetch Data
------------------------------ */

async function fetchCountries() {
  showStatus("Loading country data...");

  try {
    const response = await fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population");

    if (!response.ok) {
      throw new Error("Failed to fetch country data");
    }

    const data = await response.json();

    countriesData = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

    filteredCountries = countriesData;
    renderCountries(filteredCountries);
  } catch (error) {
    showStatus("Unable to load data. Please try again later.");
    console.error(error);
  }
}

/* -----------------------------
   Filtering Logic
------------------------------ */

function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedRegion = regionFilter.value;

  filteredCountries = countriesData.filter((country) => {
    const matchesName = country.name.common
      .toLowerCase()
      .includes(searchValue);

    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;

    return matchesName && matchesRegion;
  });

  renderCountries(filteredCountries);
}

/* -----------------------------
   Event Listeners
------------------------------ */

searchInput.addEventListener("input", applyFilters);
regionFilter.addEventListener("change", applyFilters);

/* -----------------------------
   Init
------------------------------ */

fetchCountries();
