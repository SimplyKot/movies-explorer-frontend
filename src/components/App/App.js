import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFoundError from "../NotFoundError/NotFoundError";
import Footer from "../Footer/Footer";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

import connectMoviesApi from "../../utils/MoviesApi";
import connectMainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";

function App() {
  const history = useHistory();
  const [isLogged, setIsLogged] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [externalMovies, setExternalMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    console.log(externalMovies);
  }, [externalMovies]);

  const tokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      auth
        .getContent(jwt)
        .then((res) => {
          if (res.email) {
            setCurrentUser(res);
            setIsLogged(true);
          } else {
            throw new Error({ message: "Проблема с токеном" });
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLogged(false);
        });
    }
  };

  function handleRegister(data) {
    console.log(data);
    return auth
      .register(data)
      .then((res) => console.log(res))
      .then(() => history.push("/login"))
      .catch((err) => console.log(err));
  }

  function handleLogin(data) {
    // TODO: Разобраться с CORS
    return auth
      .authorize(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
      })
      .then(tokenCheck)
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    setIsLogged(false);
    history.push("/");
  }

  function handleErrorClose() {
    setIsErrorOpen(false);
  }

  function getMovies() {
    setIsPending(true);
    // Запрос к внешнему API
    connectMoviesApi
      .getMovies()
      .then((data) => {
        setExternalMovies(data);
        // Скрываем прелоадер
        console.log("Выполнили запрос к серверу и возвращаем результат");
      })
      .catch((err) => {
        console.log(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      })
      .finally(() => setIsPending(false));
  }

  function searchExternalMovies(searchObject) {
    // console.log(searchObject);
    setFoundMovies(
      externalMovies.filter((movie) => {
        return (
          movie.nameRU.includes(searchObject.string) &&
          (searchObject.shortFilm ? movie.duration < 40 : true)
        );
      })
    );
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header isLogged={isLogged} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/register">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/movies">
            <Movies
              movies={foundMovies}
              onRequest={getMovies}
              onSearch={searchExternalMovies}
              onPending={isPending}
            />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile onLogout={handleLogout} />
          </Route>
          <Route path="/404">
            <NotFoundError />
          </Route>
          <Redirect from="*" to="/404" />
        </Switch>
        <Footer isInvisible={true} />
        <ErrorPopup
          message={"Что-то пошло не так"}
          isOpen={isErrorOpen}
          closeHandler={handleErrorClose}
        />
      </div>
    </div>
  );
}

export default App;
