import "./moviescardlist.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { movies } = props;

  if (!movies.length) {
    return <p className="cardlist__message">Ничего не найдено</p>;
  } else {
    return (
      <ul className="cardlist">
        {movies.map((item) => (
          <li key={item.id}>
            <MovieCard movie={item} component={props.component} />
          </li>
        ))}
      </ul>
    );
  }
}

export default MoviesCardList;
