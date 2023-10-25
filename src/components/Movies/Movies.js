import { useEffect, useState, useCallback, useRef } from "react";
import MoviesCardList from "../MovieCardList/MovieCardList";
import MovieCard from "../MovieCard/MovieCard";
import SearchForm from "../SearchField/SearchField";
import Preloader from "../Preloader/Preloader";
import {
  MOVIE_CARDS_DESKTOP,
  MOVIE_CARDS_MOBILE,
} from "../../utils/Constants";
import "./Movies.css";

const LARGE_SCREEN_WIDTH = 1100;
const MEDIUM_SCREEN_WIDTH = 680;

function Movies({
  setSortMovies,
  isDisabledChekbox,
  setIsDisabledChekbox,
  isPreloader,
  getAllMovies,
  allMovies,
  filterMovies,
  savedMovies,
  setSavedMovies,
  isError,
  setChecked,
  checked,
  sortMovies
}) {
  const [numberDisplayedMovies, setNumberDisplayedMovies] = useState(0);
  const resizeTimeout = useRef();

  const handleResize = useCallback(() => {
    clearTimeout(resizeTimeout.current);
    resizeTimeout.current = setTimeout(() => {
      if (window.innerWidth > LARGE_SCREEN_WIDTH) {
        setNumberDisplayedMovies(12);
      } else if (window.innerWidth > MEDIUM_SCREEN_WIDTH) {
        setNumberDisplayedMovies(8);
      } else {
        setNumberDisplayedMovies(5);
      }
    }, 100);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleClickButtonMore = useCallback(() => {
    const addition = window.innerWidth > LARGE_SCREEN_WIDTH
      ? MOVIE_CARDS_DESKTOP
      : MOVIE_CARDS_MOBILE;
    setNumberDisplayedMovies(prev => prev + addition);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("sortMovies")) {
      let checked = JSON.parse(localStorage.getItem("checked"));
      let sortMovies = JSON.parse(localStorage.getItem("sortMovies"));

      setSortMovies(sortMovies);
      setChecked(checked);
    } else {
      setIsDisabledChekbox(true);
    }
  }, [setIsDisabledChekbox, setSortMovies, setChecked]);

  const handleSubmitSearch = useCallback((value, checked) => {
    if (!localStorage.getItem("sortMovies") || allMovies.length === 0) {
      getAllMovies(value, checked);
    } else {
      filterMovies(value, checked, allMovies);
    }
    localStorage.setItem("valueSearch", JSON.stringify(value));
    localStorage.setItem("checked", checked);
  }, [allMovies, getAllMovies, filterMovies]);

  return (
    <main className="movies">
      <SearchForm
        sortMovies={sortMovies}
        setChecked={setChecked}
        checked={checked}
        setIsDisabledChekbox={setIsDisabledChekbox}
        isDisabledChekbox={isDisabledChekbox}
        handleSubmitSearch={handleSubmitSearch}
      />
      {isPreloader ? (
        <Preloader />
      ) : (
        sortMovies && (
          <MoviesCardList>
            {sortMovies.slice(0, numberDisplayedMovies).map((item) => (
              <MovieCard
                key={item.id}
                id={item.id}
                item={item}
                link={item.trailerLink}
                name={item.nameRU}
                duration={item.duration}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                src={`https://api.nomoreparties.co${item.image.url}`}
              />
            ))}
          </MoviesCardList>
        )
      )}
      <div className="response-container">
        {isError ? (
          <p className="response-container__text">
            Произошла ошибка при запросе. Проверьте соединение или попробуйте позже.
          </p>
        ) : (
          sortMovies.length === 0 && (
            <p className="response-container__text">Ничего не найдено.</p>
          )
        )}
      </div>
      {sortMovies.length > numberDisplayedMovies && (
        <div className="movies__button-container">
          <button
            onClick={handleClickButtonMore}
            type="button"
            className="movies__button"
          >
            Ещё
          </button>
        </div>
      )}
    </main>
  );
}

export default Movies;
