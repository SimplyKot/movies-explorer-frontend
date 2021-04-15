import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFoundError from "../NotFoundError/NotFoundError";
import Footer from "../Footer/Footer";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import * as auth from "../../utils/auth";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState("");
  // const [externalMovies, setExternalMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    tokenCheck();
  }, []);

  // useEffect(() => {
  //   console.log(`Все фильмы ${externalMovies.length} => `, externalMovies);
  //   console.log(`Сохраннных фильмов ${savedMovies.length} =>`, savedMovies);
  // }, [externalMovies, savedMovies]);

  useEffect(() => {
    if (currentUser.name) {
      if (!localStorage.getItem("savedMovies")) {
        // console.log(
        //   "Нет локальных данных о сохраненных фильмах. Запрашиваем с сервера"
        // );
        mainApi.getSavedMovies().then((data) => {
          doubleSavedMovies(data);
        });
      } else {
        // console.log(
        //   "Есть локальные данные о сохраннных фильмах. Используем их."
        // );
        const data = JSON.parse(localStorage.getItem("savedMovies"));
        setSavedMovies(data);
        setFoundSavedMovies(data);
      }
    }
  }, [currentUser]);

  const tokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      auth
        .getContent(jwt)
        .then((res) => {
          if (res.email) {
            setCurrentUser(res);
            setLoggedIn(true);
          } else {
            throw new Error({ message: "Проблема с токеном" });
          }
        })
        .catch((err) => {
          setLoggedIn(false);
        });
    }
  };

  function doubleSavedMovies(data) {
    setSavedMovies(data);
    setFoundSavedMovies(data);
    localStorage.setItem("savedMovies", JSON.stringify(data));
  }

  function handleRegister(data) {
    return auth.register(data);
  }

  function handleLogin(data) {
    return auth
      .authorize(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
      })
      .then(tokenCheck)
      .then(() => {
        history.push("/movies");
      });
  }

  function handleLogout() {
    // localStorage.removeItem("jwt");
    // localStorage.removeItem("externalMovies");
    // localStorage.removeItem("savedMovies");
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    history.push("/");
  }

  function handleErrorClose() {
    setIsErrorOpen("");
  }

  function getMovies() {
    if (localStorage.getItem("externalMovies")) {
      // console.log("Фильмы исползуем из локального хранилища");
      return new Promise((resolve, reject) => {
        resolve(JSON.parse(localStorage.getItem("externalMovies")));
      });
    }

    if (!localStorage.getItem("externalMovies")) {
      // console.log("Запрос к внешнему API");
      // setIsPending(true);
      // Запрос к внешнему API
      return moviesApi
        .getMovies()
        .then((res) =>
          res.map((item) => {
            // console.log(item);
            return {
              country: item.country,
              director: item.director,
              duration: item.duration,
              year: item.year,
              description: item.description,
              image: !item.image
                ? null
                : `https://api.nomoreparties.co${item.image.url}`,
              trailer: item.trailerLink,
              thumbnail: !item.image
                ? null
                : `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
              // owner: item.owner,
              movieId: item.id,
              nameRU: item.nameRU,
              nameEN: item.nameEN,
            };
          })
        )
        .then((res) => {
          // setIsPending(false);
          localStorage.setItem("externalMovies", JSON.stringify(res));
          return res;
        });
    }
  }

  function searchMovies(searchObject) {
    // console.log(searchObject);
    return getMovies()
      .then((data) => {
        // setExternalMovies(data);
        return data;
      })
      .then((movies) => {
        setFoundMovies(
          movies.filter((movie) => {
            return (
              movie.nameRU.includes(searchObject.string) &&
              (searchObject.shortFilm ? movie.duration < 40 : true)
            );
          })
        );
      });
  }

  function searchSavedMovies(searchObject) {
    // console.log(savedMovies);
    // console.log(searchObject);
    return new Promise((resolve, reject) => {
      resolve(
        savedMovies.filter((movie) => {
          return (
            movie.nameRU.includes(searchObject.string) &&
            (searchObject.shortFilm ? movie.duration < 40 : true)
          );
        })
      );
    }).then((movies) => {
      setFoundSavedMovies(movies);
    });
  }

  function handleUpdateUser(data) {
    return mainApi.editProfile(data).then((res) => {
      setCurrentUser(res);
    });
  }

  function handleLikeClick(data) {
    // console.log("Поступившие данные", data);
    // mainApi.postMovie(data).then((res) => console.log(res));
    // Если фильм с таким movieId не содержится в savedMovies, то выполняем добавление фильма
    // console.log("Сохраненные фильмы", savedMovies);
    if (
      savedMovies &&
      savedMovies.find((item) => {
        return item.movieId === data.movieId;
      })
    ) {
      // console.log("Фильм уже добавлен => будем удалять");

      if (!data._id) {
        // console.log(data);
        data = savedMovies.find((item) => {
          return item.movieId === data.movieId;
        });
        console.log(data);
      }

      return mainApi.deleteMovie(data).then((res) => {
        // console.log(res);
        const filteredMovies = savedMovies.filter((item) => {
          return item.movieId !== data.movieId;
        });
        doubleSavedMovies(filteredMovies);
      });
    } else {
      // console.log("Фильма нет такого => будем добавлять");
      return mainApi.postMovie(data).then((res) => {
        // console.log("Добавлнный фильм =>", res);
        doubleSavedMovies([...savedMovies, res]);
      });
    }
  }

  function openErrorPopup(messasge) {
    setIsErrorOpen(messasge);
  }

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header isLogged={loggedIn} />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/register">
              <Register onRegister={handleRegister} onLogin={handleLogin} />
            </Route>
            <Route path="/login">
              <Login onLogin={handleLogin} />
            </Route>
            <ProtectedRoute
              path="/movies"
              onLikeClick={handleLikeClick}
              loggedIn={loggedIn}
              component={Movies}
              movies={foundMovies}
              savedMovies={savedMovies}
              onSearch={searchMovies}
              moreButton={true}
              onError={openErrorPopup}
            />
            <ProtectedRoute
              path="/saved-movies"
              onLikeClick={handleLikeClick}
              loggedIn={loggedIn}
              component={Movies}
              movies={foundSavedMovies}
              onSearch={searchSavedMovies}
              moreButton={false}
              onError={openErrorPopup}
            />
            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              onUpdate={handleUpdateUser}
              onLogout={handleLogout}
            />
            <Route path="/404">
              <NotFoundError />
            </Route>
            <Redirect from="*" to="/404" />
          </Switch>
          <Footer isInvisible={true} />
        </CurrentUserContext.Provider>
        <ErrorPopup
          message={`${isErrorOpen}`}
          isOpen={isErrorOpen}
          closeHandler={handleErrorClose}
        />
      </div>
    </div>
  );
}

export default App;
