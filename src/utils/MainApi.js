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
    return this._transmit(`${this._baseUrl}/cards`, "GET").then(
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
      about: data.about,
    }).then(this._checkResponse);
  }

  // Атрибут action со значением DELETE снимает лайк
  setLike(id, action) {
    // `${this._baseUrl}/cards/likes/${id}` action == "DELETE" ? "DELETE" : "PUT"

    return this._transmit(
      `${this._baseUrl}/cards/${id}/likes`,
      action ? "DELETE" : "PUT"
    ).then(this._checkResponse);
  }
}

const connectMainApi = new Api(connectConfig);
export default connectMainApi;
