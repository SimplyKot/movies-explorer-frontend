import "./movies.css";
import SearchMovies from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  const { movies, onPending, onSearch } = props;

  return (
    <section className="movies">
      <SearchMovies onSearch={onSearch} />
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
