/**
 * Parses the id from a URL from SWAPI
 *
 * @param {string} url example: https://swapi.dev/api/people/1/
 * @returns {string} id
 */
export function getIdFromUrl(url) {
  return url.split("/").at(-2);
}

/**
 *
 * General request used to access SWAPI. Expects a response status 200.
 * Can accept a callback to execute once the data is parsed as json.
 *
 * @param {string} url request URL
 * @param {function} callback executed once the data is received
 * @param {function} onLoadingFinish executed once loading is complete
 * @returns
 */
export function request(url, callback, onLoadingFinish) {
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `The ${url} did not answered with an OK, status code was ${res.status}`
        );
      }
      return res.json();
    })
    .then((data) => {
      if (typeof callback === "function") {
        callback(data);
      } else {
        return data;
      }
    })
    .then(() => {
      if (typeof onLoadingFinish === "function") {
        onLoadingFinish();
      }
    })
    .catch(() => (location.href = "./error.html"));
}
