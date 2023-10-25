import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MoviesCardList from "../MovieCardList/MovieCardList";
import SearchForm from "../SearchField/SearchField";
import "./SavedMovies.css";

function SavedMovies({
  setChecked,
  checked,
  setSortSavedMovies,
  setIsDisabledChekbox,
  isDisabledChekbox,
  filterMovies,
  savedMovies,
  setSavedMovies,
  sortSavedMovies,
}) {
  const [showSavedMovies, setShowSavedMovies] = useState(false);
  const [searchText, setSearchText] = useState('');

  function handleSubmitSearch(value, checked) {
    setSearchText(value.searchMovies);
    filterMovies(value, checked, savedMovies);
    setShowSavedMovies(false);
  }

  function filterIt(movies) {
    return movies.filter((item) => {
      let sort =
        item.nameRU.toLowerCase().includes(searchText) ||
        item.nameEN.toLowerCase().includes(searchText);
      return checked ? sort && item.duration <= 40 : sort;
    });
  }

  const renderMovies = (movies) => (
    filterIt(movies).map((item) => (
      <MovieCard
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        key={item._id}
        id={item.movieId}
        item={item}
        link={item.trailerLink}
        src={item.image}
        name={item.nameRU}
        duration={item.duration}
        sortSavedMovies={sortSavedMovies}
        setSortSavedMovies={setSortSavedMovies}
      />
    ))
  );

  return (
    <main className="saved-movies">
      <SearchForm
        setIsDisabledChekbox={setIsDisabledChekbox}
        setChecked={setChecked}
        checked={checked}
        handleSubmitSearch={handleSubmitSearch}
        isDisabledChekbox={isDisabledChekbox}
      />

      <MoviesCardList>{renderMovies(savedMovies)}</MoviesCardList>
      {!filterIt(savedMovies).length && (
        <div className="info-container">
          <p className="info-container__text">
            Ничего не найдено. Попробуйте еще раз.
          </p>
        </div>
      )}
    </main>
  );
}

export default SavedMovies;
