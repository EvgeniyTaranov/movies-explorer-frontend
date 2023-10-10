import { useState } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ src, name, duration }) {
  const [saveButton, setSaveButton] = useState(false);

  function stateButton() {
    saveButton ? setSaveButton(false) : setSaveButton(true);
  }

  return (
    <li>
      <article className="movie">
        <Link className="movie__link-container" to="#">
          <img className={name} alt="Кадр-превью фильма" src={src}></img>
          <button
            type="button"
            onClick={stateButton}
            className={
              saveButton
                ? "movie__button-save movie__button-save_active"
                : "movie__button-save movie__button-save_inactive"
            }
          ></button>
          <div className="movie__info">
            <h2 className="movie__name">{name}</h2>
            <p className="movie__duration">{duration}</p>
          </div>
        </Link>
      </article>
    </li>
  );
}

export default MovieCard;
