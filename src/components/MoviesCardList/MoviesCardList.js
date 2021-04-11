import "./moviescardlist.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { movies, savedMovies, errorMessage, onLikeClick, path } = props;

  function detectLike(movie) {
    return path === "/saved-movies"
      ? true
      : savedMovies.some((item) => item.movieId === movie.movieId);
  }

  if (errorMessage) {
    return <p className="cardlist__message">{`${errorMessage}`}</p>;
  }

  if (!movies.length) {
    return <p className="cardlist__message">Ничего не найдено</p>;
  }

  return (
    <ul className="cardlist">
      {movies.map((item) => (
        <li key={item.movieId}>
          <MovieCard
            movie={item}
            liked={detectLike(item)}
            component={props.component}
            onLikeClick={onLikeClick}
            path={path}
          />
        </li>
      ))}
    </ul>
  );
}

export default MoviesCardList;
