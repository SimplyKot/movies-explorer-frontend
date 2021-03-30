import { Route, Switch, useHistory } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header isInvisible={false} />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer isInvisible={true} />
      </div>
    </div>
  );
}

export default App;
