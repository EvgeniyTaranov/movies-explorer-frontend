import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { postMovie, deleteMovie } from "../../utils/MainApi";
import { Converter } from "../../utils/Converter";
import classnames from 'classnames';
import "./MovieCard.css";

function MovieCard({
  src,
  name,
  duration,
  link,
  id,
  item,
  savedMovies,
  setSavedMovies,
  setSortSavedMovies,
}) {
  const [idSavedMovie, setIdSavedMovie] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const isSavedMoviesPath = location.pathname === "/saved-movies";

  useEffect(() => {
    const movieInSaved = savedMovies.find(savedMovie => savedMovie.movieId === id);
    if (movieInSaved) {
      setIdSavedMovie(movieInSaved._id);
    } else {
      setIdSavedMovie("");
    }
  }, [savedMovies, id]);

  const handleSaveDeleteMovies = useCallback((event) => {
    event.preventDefault();

    if (Boolean(idSavedMovie)) {
      deleteMovie(idSavedMovie)
        .then(() => {
          setIdSavedMovie("");
          setSavedMovies(prev => prev.filter(savedMovie => savedMovie.movieId !== id));
          if (isSavedMoviesPath) {
            setSortSavedMovies(prev => prev.filter(sortedMovie => sortedMovie.movieId !== id));
          }
        })
        .catch(err => {
          setErrorMessage("Не удалось удалить фильм. Пожалуйста, попробуйте снова.");
        });
    } else {
      postMovie(item)
        .then(res => {
          setIdSavedMovie(res.data._id);
          setSavedMovies(prev => [...prev, res.data]);
        })
        .catch(() => {
          setErrorMessage("Не удалось сохранить фильм. Пожалуйста, попробуйте снова.");
        });
    }
  }, [idSavedMovie, id, item, isSavedMoviesPath, setSavedMovies, setSortSavedMovies]);

  const buttonClasses = classnames({
    'movie__button-save_delete': isSavedMoviesPath,
    'movie__button-save': !isSavedMoviesPath,
    'movie__button-save_inactive': !idSavedMovie,
    'movie__button-save_active': idSavedMovie
  });

  return (
    <li>
      <article className="movie">
        <a
          target="_blank"
          rel="noreferrer"
          className="movie__link-container"
          href={link}
        >
          <img className="movie__image" alt={name} src={src}></img>
          <div className="movie__info">
            <h2 className="movie__name">{name}</h2>
            <p className="movie__duration">{Converter(duration)}</p>
          </div>
          <button
            type="button"
            onClick={handleSaveDeleteMovies}
            className={buttonClasses}
          ></button>
        </a>
        {errorMessage && <p className="movie__error">{errorMessage}</p>}
      </article>
    </li>
  );
}

export default MovieCard;
