import { request, getIdFromUrl } from "./utils";
import { namesToImages } from "./imageMapper";

var rootURL = "https://swapi.dev/api/people/";

//Setup the loading animations

const loader = document.querySelector("#loading");
const filmsLoader = document.querySelector("#films-loading");

loader.classList.add("display");
filmsLoader.classList.add("display");

//Parse the character id from the URL

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//=========================== GET A CHARACTER ==================================

if (id !== undefined) {
  request(rootURL + id, displayInformation);
}

function displayInformation(data) {
  const titleContainer = document.getElementById("character-title-container");
  const name = document.getElementById("character-name");
  name.innerText = data.name;

  const avatar = getImage(data.name);

  if (avatar) {
    titleContainer.append(avatar);
  }
  titleContainer.append(name);

  const characterInfo = document.createElement("div");

  addInformation(characterInfo, "Gender", data.gender);
  addInformation(characterInfo, "Hair color", data.hair_color);
  addInformation(characterInfo, "Weight", data.mass, "kg");
  addInformation(characterInfo, "Height", data.height, "cm");

  const container = document.querySelector("#container");
  container.append(characterInfo);

  loader.classList.remove("display");

  displayMovies(data.films);
}

/**
 *
 * Generates the  character information fields, ignoring fields without information provided
 *
 * @param {HTMLElement} element the HTMLElement where the information will be included
 * @param {string} label name of the information
 * @param {string} data  value of the information
 * @param {string} unit kg,cm or other quantifiers of the value
 * @returns
 */
function addInformation(element, label, data, unit) {
  if (!data || data === "unknown" || data === "n/a") {
    return;
  }

  const p = document.createElement("p");

  p.innerText = `${label}: ${data}`;

  if (unit) {
    p.innerText += ` ${unit}`;
  }

  element.appendChild(p);
}

/**
 *
 * Returns the image for a character, if it exists.
 *
 * @param {string} name character name
 * @returns {HTMLImageElement | null}
 */
function getImage(name) {
  if (namesToImages[name] === "unknown") {
    return;
  }
  const img = document.createElement("img");
  img.src = `/images/${namesToImages[name]}.png`;
  img.alt = name;
  img.classList.add("avatar");

  return img;
}

//======================= GET ALL MOVIES FROM A CHARACTER ========================
function displayMovies(films) {
  const container = document.querySelector("#films");

  const requests = [];
  for (let filmUri of films) {
    const promise = fetch(filmUri).then((res) => res.json());
    requests.push(promise);
  }

  Promise.all(requests)
    .then((films) => {
      films.map((film) => {
        const id = getIdFromUrl(film.url);
        const htmlElement = `<a href="/film.html?id=${id}">
                               ${film.title}
                             </a>`;
        const div = document.createElement("div");
        div.innerHTML = htmlElement;

        container.append(div);
      });
    })
    .then(() => filmsLoader.classList.remove("display"));
}
