import "./moviescardlist.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { movies, errorMessage } = props;

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
          <MovieCard movie={item} component={props.component} />
        </li>
      ))}
    </ul>
  );
}

export default MoviesCardList;
