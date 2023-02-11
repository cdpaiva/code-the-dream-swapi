import { request, getIdFromUrl } from "./utils";

var rootURL = "https://swapi.dev/api/films/";

//Setup the loading animations

const loader = document.querySelector("#loading");
const charactersLoader = document.querySelector("#characters-loading");

loader.classList.add("display");
charactersLoader.classList.add("display");

//Parse the character id from the URL

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//============================= GET A MOVIE ==================================

if (id !== undefined) {
  request(rootURL + id, displayInformation);
}

function displayInformation(data) {
  const title = document.getElementById("filmTitle");
  title.innerText = data.title;

  //The perspective requires fixed hight, so we add the classes dinamically,
  //to not interfere with the loading animation
  const textCrawlBg = document.getElementById("text-crawl-bg");
  textCrawlBg.classList.add("text-crawl-bg");

  const textCrawlContainer = document.getElementById("text-crawl-container");
  textCrawlContainer.classList.add("text-crawl");

  const textCrawl = document.getElementById("text-crawl");
  textCrawl.classList.add("text-crawl-content");
  textCrawl.innerText = data.opening_crawl;

  //Transforms the animation into plain text once over
  textCrawl.addEventListener("animationend", () => {
    textCrawlContainer.classList.remove("text-crawl");
    textCrawlContainer.innerHTML = `<p>${data.opening_crawl}</p>`;

    textCrawlBg.classList.remove("text-crawl-bg");
  });

  const htmlSegment = `<div>
                          <p>Episode: ${data.episode_id}</p>
                          <p>Release date: ${data.release_date}</p>
                          <p>Director: ${data.director}</p>
                          <p>Producer: ${data.producer}</p>
                          <p>Creation year: ${data.created.substring(0, 4)}</p>
                      `;
  const container = document.querySelector("#container");
  container.innerHTML = htmlSegment;

  loader.classList.remove("display");

  displayCharacters(data.characters);
}

//======================= GET ALL CHARACTERS OF A MOVIE =============================

function displayCharacters(characters) {
  const container = document.querySelector("#characters");

  const requests = [];
  for (let charUri of characters) {
    const promise = fetch(charUri).then((res) => res.json());
    requests.push(promise);
  }

  Promise.all(requests)
    .then((chars) => {
      chars.map((char) => {
        const id = getIdFromUrl(char.url);
        const htmlElement = `<a href="/character.html?id=${id}">
                               ${char.name}
                             </a>`;
        const div = document.createElement("div");
        div.innerHTML = htmlElement;

        container.append(div);
      });
    })
    .then(() => charactersLoader.classList.remove("display"));
}
