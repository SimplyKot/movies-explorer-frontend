import "./moviecard.css";

import heart from "../../images/heart-transparent.svg";
import heartLike from "../../images/heart-colored.svg";
import cross from "../../images/cross.svg";
import movieImgPlaceholder from "../../images/movie_placeholder.svg";

function MovieCard(props) {
  const { movie, component } = props;
  const like = component === "saved-movies" ? cross : heartLike;

  function timeToString(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  }

  function composeImageUrl(movie) {
    if (!movie.image) {
      return movieImgPlaceholder;
    }
    return `https://api.nomoreparties.co${movie.image.url}`;
  }

  function clickHandle(e) {
    // TODO: Разобраться со всплытием события
    e.stopImmediatePropagation();
    console.log(e);
    console.log("Like/dislike click");
  }

  return (
    <a
      className="movie"
      href={movie.trailerLink}
      target={"_blank"}
      rel="noreferrer"
    >
      <div className="movie__text-container">
        <div className="movie__text-block">
          <h1 className="movie__title">{movie.nameRU}</h1>
          <h2 className="movie__duration">{timeToString(movie.duration)}</h2>
        </div>
        <div className="movie__like-icon" onClick={clickHandle}>
          <img src={movie.liked === "true" ? like : heart} alt="В избранном" />
        </div>
      </div>
      <div className="movie__image-container">
        <img
          className="movie__image"
          src={composeImageUrl(movie)}
          alt="Обложка фильма"
        />
      </div>
    </a>
  );
}

export default MovieCard;
