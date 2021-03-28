import "./moviescardlist.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="cardlist">
      {props.movies.map((item) => (
        <MovieCard component={"saved-movies"} movie={item} />
      ))}
    </section>
  );
}

export default MoviesCardList;
