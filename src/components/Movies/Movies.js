import { useEffect, useState } from "react";
import "./movies.css";
import SearchMovies from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  const { movies, onSearch, onRequest, onPending } = props;
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [isPending, setIsPending] = useState(false);

  // useEffect(() => {
  //   onRequest();
  //   console.log("Изиенился список фильмов. Анализируем...");
  // }, []);

  useEffect(() => {
    console.log(movies.length);
    // Выводим 5 фильмов
    setDisplayMovies(movies.slice(0, 5));
  }, [movies]);

  useEffect(() => {
    setIsButtonVisible(movies.length > displayMovies.length);
  }, [movies, displayMovies]);

  function moreHandler() {
    // Вывыодим на два фильма больше, чем же выведено
    setDisplayMovies(movies.slice(0, displayMovies.length + 2));
  }

  return (
    <section className="movies">
      <SearchMovies onSearch={onSearch} />
      {onPending ? <Preloader /> : ""}
      <MoviesCardList movies={displayMovies} />
      <div
        className={`movies__button-container
        ${isButtonVisible ? "movies__button-container_visible" : ""}`}
      >
        <button className="movies__button" onClick={moreHandler}>
          Ещё
        </button>
      </div>
    </section>
  );
}

export default Movies;
