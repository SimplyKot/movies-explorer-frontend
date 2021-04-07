import "./moviescardlist.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul className="cardlist">
      {props.movies.map((item) => (
        <li key={item.id}>
          <MovieCard movie={item} component={props.component} />
        </li>
      ))}
    </ul>
  );
}

export default MoviesCardList;
