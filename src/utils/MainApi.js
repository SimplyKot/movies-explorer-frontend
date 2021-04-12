import { mainConnectConfig as connectConfig } from "./constants";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _transmit(url, method, body = "") {
    const localParam = { method: method };
    if (body) {
      localParam.body = JSON.stringify(body);
    }
    localParam.headers = {
      ...this._headers,
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
    return fetch(url, localParam);
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(
        `Ошибка сервера (${res.status}): ${res.statusText}`
      );
    }
    return res.json();
  }

  getSavedMovies() {
    // `${this._baseUrl}/cards` GET
    return this._transmit(`${this._baseUrl}/movies`, "GET").then(
      this._checkResponse
    );
  }

  getUserInfo() {
    // `${this._baseUrl}/users/me` GET
    return this._transmit(`${this._baseUrl}/users/me`, "GET").then(
      this._checkResponse
    );
  }

  editProfile(data) {
    // `${this._baseUrl}/users/me` PATCH
    return this._transmit(`${this._baseUrl}/users/me`, "PATCH", {
      name: data.name,
      email: data.email,
    }).then(this._checkResponse);
  }

  // Атрибут action со значением DELETE снимает лайк
  postMovie(movie) {
    return this._transmit(`${this._baseUrl}/movies`, "POST", movie).then(
      this._checkResponse
    );
  }

  deleteMovie(movie) {
    return this._transmit(
      `${this._baseUrl}/movies/${movie._id}`,
      "DELETE"
    ).then(this._checkResponse);
  }
}

const mainApi = new Api(connectConfig);
export default mainApi;
