import "./savedmovies.css";

import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

// const savedMovies = hardCodeMovies.filter((movie) => {
//   return movie.liked === "true";
// });

function SavedMovies(props) {
  const { savedMovies, onLikeClick } = props;
  const [displayMovies, setDisplayMovies] = useState([]);

  useEffect(() => {
    console.log("Сохраннных фильмов =>", savedMovies.length);
    setDisplayMovies(savedMovies.slice(0, 5));
  }, [savedMovies]);

  function likeClickHandler(data) {
    console.log(displayMovies);
    setDisplayMovies(
      displayMovies.filter((item) => {
        return item.movieId !== data.movieId;
      })
    );
    onLikeClick(data).then((res) => console.log(res));
  }

  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList
        movies={displayMovies}
        component={"saved-movies"}
        onLikeClick={likeClickHandler}
      />
    </section>
  );
}

export default SavedMovies;
