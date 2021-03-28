import "./savedmovies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import hardCodeMovies from "../../utils/constants";
const savedMovies = hardCodeMovies.filter((movie) => {
  return movie.liked === "true";
});

function SavedMovies() {
  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList movies={savedMovies} component={"saved-movies"} />
    </section>
  );
}

export default SavedMovies;
