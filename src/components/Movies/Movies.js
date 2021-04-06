import "./movies.css";
import { useState } from "react";
import SearchMovies from "../SearchForm/SearchForm";
// eslint-disable-next-line no-unused-vars
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import { hardCodeMovies } from "../../utils/constants";

function Movies(props) {
  const { onRequest, movies, onPending } = props;
  console.log(movies);

  return (
    <section className="movies">
      <SearchMovies onSearch={onRequest} />
      {onPending ? <Preloader /> : ""}
      <MoviesCardList movies={movies} />
      <div className="movies__button-container">
        <button className="movies__button">Ещё</button>
      </div>

      {/* <Preloader /> */}
    </section>
  );
}

export default Movies;
