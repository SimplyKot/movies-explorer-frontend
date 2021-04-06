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

function App() {
  const history = useHistory();
  const [isLogged, setIsLogged] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  function handleLogin() {
    setIsLogged(true);
    history.push("/");
  }

  function handleLogout() {
    setIsLogged(false);
    history.push("/");
  }

  function handleErrorClose() {
    setIsErrorOpen(false);
  }

  function getMovies() {
    connectMoviesApi
      .getMovies()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
            <Register />
          </Route>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/movies">
            <Movies />
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
