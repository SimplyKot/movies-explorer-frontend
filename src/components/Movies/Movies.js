import "./movies.css";
import SearchMovies from "../SearchForm/SearchForm";
// eslint-disable-next-line no-unused-vars
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { hardCodeMovies } from "../../utils/constants";

function Movies() {
  return (
    <section className="movies">
      <SearchMovies />
      <MoviesCardList movies={hardCodeMovies} />
      <div className="movies__button-container">
        <button className="movies__button">Ещё</button>
      </div>

      {/* <Preloader /> */}
    </section>
  );
}

export default Movies;
