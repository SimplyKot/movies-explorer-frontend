import { Route, Switch, useHistory } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Switch>
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
