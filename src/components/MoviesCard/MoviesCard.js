import "./moviecard.css";

import heart from "../../images/heart-transparent.svg";
import heartLike from "../../images/heart-colored.svg";

function MovieCard(props) {
  const movie = props.movie;
  console.log(movie);
  return (
    <div className="movie">
      <div className="movie__text-container">
        <h1 className="movie__title">{movie.nameRU}</h1>
        <h2 className="movie__duration">{movie.duration}</h2>
        <div className="movie__like-icon">
          <img
            src={movie.liked === "true" ? heartLike : heart}
            alt="В избранном"
          />
        </div>
      </div>
      <div className="movie__image-container">
        <img
          className="movie__image"
          src={movie.imageUrl}
          alt="Обложка фильма"
        />
      </div>
    </div>
  );
}

export default MovieCard;
