import { mainConnectConfig } from "./constants";
const BASE_URL = mainConnectConfig.baseUrl;

const checkAuthResponse = (response) => {
  let message = "";
  switch (response.status) {
    case 400:
      message = "Не передано одно из полей";
      break;
    case 401:
      message = "Пользователь с email не найден";
      break;
    default:
      message = "Ошибка на сервере";
      break;
  }
  return response.ok ? response.json() : Promise.reject({ message: message });
};

const checkTokenResponse = (response) => {
  let message = "";
  switch (response.status) {
    case 400:
      message = "не передано одно из полей";
      break;
    case 401:
      message = "пользователь с email не найден";
      break;
    case 409:
      message = "пользователь с таким email уже существует";
      break;
    default:
      message = "ошибка на сервере";
      break;
  }
  return response.ok ? response.json() : Promise.reject({ message: message });
};

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkAuthResponse);
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkAuthResponse);
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkTokenResponse);
};
