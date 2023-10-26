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
  const [setShowSavedMovies] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    let savedChecked = localStorage.getItem("checkedMoviesSaved");
    if (savedChecked) {
      setChecked(JSON.parse(savedChecked));
    }
  }, [setChecked]);

  const handleSubmitSearch = (value, checked) => {
    setSearchText(value.searchMovies.toLowerCase());
    filterMovies(value, checked, savedMovies);
    setShowSavedMovies(false);
    localStorage.setItem("checkedMoviesSaved", JSON.stringify(checked));
  };

  const filterIt = (movies) => {
    return movies.filter((item) => {
      const matchRU = item.nameRU.toLowerCase().includes(searchText);
      const matchEN = item.nameEN && item.nameEN.toLowerCase().includes(searchText);
      const isShort = item.duration <= 40;

      return checked ? (matchRU || matchEN) && isShort : matchRU || matchEN;
    });
  };

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
