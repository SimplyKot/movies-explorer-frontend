import { useEffect, useState } from "react";
import "./movies.css";
import SearchMovies from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  const {
    movies,
    savedMovies,
    onSearch,
    onLikeClick,
    moreButton,
    onError,
  } = props;
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   onRequest();
  //   console.log("Изиенился список фильмов. Анализируем...");
  // }, []);

  useEffect(() => {
    // console.log("найдено фильмов =>", movies.length);
    if (moreButton) {
      // Выводим 5 фильмов
      setDisplayMovies(movies.slice(0, 12));
    } else {
      setDisplayMovies(movies);
    }
  }, [movies, moreButton]);

  useEffect(() => {
    setIsButtonVisible(movies.length > displayMovies.length && moreButton);
  }, [movies, displayMovies, moreButton]);

  function searchHandler(data) {
    console.log(data);
    if (!data.string) {
      onError("Нужно ввести ключевое слово");
    } else {
      setErrorMessage("");
      setIsPending(true);
      onSearch(data)
        .catch((err) =>
          setErrorMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          )
        )
        .finally(() => setIsPending(false));
    }
  }

  function moreHandler() {
    // Вывыодим на два фильма больше, чем же выведено
    setDisplayMovies(movies.slice(0, displayMovies.length + 3));
  }

  return (
    <section className="movies">
      <SearchMovies handleSearch={searchHandler} />
      {isPending ? <Preloader /> : ""}
      <MoviesCardList
        movies={displayMovies}
        savedMovies={savedMovies}
        errorMessage={errorMessage}
        onLikeClick={onLikeClick}
        path={props.path}
      />
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
