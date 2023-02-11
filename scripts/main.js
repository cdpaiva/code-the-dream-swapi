import { request, getIdFromUrl } from "./utils";
import { episodeIdsToPosters } from "./imageMapper";

var rootURL = "https://swapi.dev/api/films/";

//========================== SEARCH CHARACTER =============================
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", searchCharacter);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchCharacter();
  }
});

const searchLoader = document.querySelector("#search-loading");

function searchCharacter() {
  const query = document.getElementById("search-input").value;

  if (!query) {
    return;
  }

  searchLoader.classList.add("display");
  //cleans the container in case of having previous results
  const container = document.querySelector("#characters");
  container.innerHTML = null;

  request(
    `https://swapi.dev/api/people?search=${query}`,
    presentSearchResults,
    onSearchFinish
  );
}

function onSearchFinish() {
  searchLoader.classList.remove("display");
}

function presentSearchResults(data) {
  const characters = data.results;
  const container = document.querySelector("#characters");

  const closeBtn = getCloseBtn();
  container.append(closeBtn);

  if (characters.length === 0) {
    const p = document.createElement("p");
    p.innerText = "No results found, please try a different name.";

    container.append(p);
    return;
  }

  characters.map((c) => {
    const id = getIdFromUrl(c.url);
    const htmlElement = `<a href="/character.html?id=${id}">${c.name}
    </a>`;
    const div = document.createElement("div");
    div.innerHTML = htmlElement;

    container.append(div);
  });
}

function getCloseBtn() {
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.innerText = "X";
  closeBtn.addEventListener("click", closeSearch);

  return closeBtn;
}

function closeSearch() {
  document.querySelector("#characters").innerHTML = null;
}

//================================ REQUEST MOVIES ==============================
const loader = document.querySelector("#loading");

loader.classList.add("display");

request(rootURL, displayFilms, onLoadingFinish);

function displayFilms(data) {
  const results = data.results;
  const container = document.querySelector("#container");

  results.map((film) => {
    const id = getIdFromUrl(film.url);

    const link = document.createElement("a");
    link.href = `/film.html?id=${id}`;

    const poster = document.createElement("img");
    poster.src = `/images/posters/${episodeIdsToPosters[film.episode_id]}`;
    poster.alt = film.title;
    poster.width = "150";
    poster.classList.add("poster");

    link.appendChild(poster);

    const title = document.createElement("p");
    title.classList.add("film-title");
    title.innerText = film.title;

    const div = document.createElement("div");
    div.append(link);
    div.append(title);

    container.append(div);
  });
}

function onLoadingFinish() {
  loader.classList.remove("display");
}
