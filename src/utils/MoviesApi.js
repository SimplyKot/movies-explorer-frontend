import { moviesConnectConfig as connectConfig } from "./constants";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _transmit(url, method, body = "") {
    const localParam = { method: method };
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

  getMovies() {
    return this._transmit(`${this._baseUrl}`, "GET").then(this._checkResponse);
  }
}

const connectMoviesApi = new Api(connectConfig);
export default connectMoviesApi;
