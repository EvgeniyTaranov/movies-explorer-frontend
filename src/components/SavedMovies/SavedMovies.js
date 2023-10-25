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

  useEffect(() => {
    setSortSavedMovies([]);
    setChecked(false);
    setShowSavedMovies(true);
  }, [savedMovies]);

  function handleSubmitSearch(value, checked) {
    filterMovies(value, checked, savedMovies);
    setShowSavedMovies(false);
  }

  const renderMovies = (movies) => (
    movies.map((item) => (
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
      
      {showSavedMovies && <MoviesCardList>{renderMovies(savedMovies)}</MoviesCardList>}
      {!showSavedMovies && sortSavedMovies.length && <MoviesCardList>{renderMovies(sortSavedMovies)}</MoviesCardList>}
      {!showSavedMovies && !sortSavedMovies.length && (
        <div className="info-container">
          <p className="info-container__text">
            "Ничего не найдено. Попробуйте еще раз."
          </p>
        </div>
      )}
    </main>
  );
}

export default SavedMovies;


// import { useEffect, useState } from "react";
// import MovieCard from "../MovieCard/MovieCard";
// import MoviesCardList from "../MovieCardList/MovieCardList";
// import SearchForm from "../SearchField/SearchField";
// import "./SavedMovies.css";

// function SavedMovies({
//   setChecked,
//   checked,
//   setSortSavedMovies,
//   setIsDisabledChekbox,
//   isDisabledChekbox,
//   filterMovies,
//   savedMovies,
//   setSavedMovies,
//   sortSavedMovies,
// }) {
//   const [showSavedMovies, setShowSavedMovies] = useState(false);

//   useEffect(() => {
//     setSortSavedMovies([]);
//     setChecked(false);
//     setShowSavedMovies(true);
//   }, [savedMovies]);

//   function handleSubmitSearch(value, checked) {
//     filterMovies(value, checked, savedMovies);
//     setShowSavedMovies(false);
//   }
//   return (
//     <main className="saved-movies">
//       <SearchForm
//         setIsDisabledChekbox={setIsDisabledChekbox}
//         setChecked={setChecked}
//         checked={checked}
//         handleSubmitSearch={handleSubmitSearch}
//         isDisabledChekbox={isDisabledChekbox}
//       ></SearchForm>
//       {showSavedMovies ? (
//         <MoviesCardList>
//           {savedMovies.map((item) => (
//             <MovieCard
//               savedMovies={savedMovies}
//               setSavedMovies={setSavedMovies}
//               key={item._id}
//               id={item.movieId}
//               item={item}
//               link={item.trailerLink}
//               src={item.image}
//               name={item.nameRU}
//               duration={item.duration}
//             ></MovieCard>
//           ))}
//         </MoviesCardList>
//       ) : sortSavedMovies.length !== 0 ? (
//         <MoviesCardList>
//           {sortSavedMovies.map((item, index) => (
//             <MovieCard
//               savedMovies={savedMovies}
//               setSavedMovies={setSavedMovies}
//               key={item._id}
//               id={item.movieId}
//               item={item}
//               link={item.trailerLink}
//               src={item.image}
//               name={item.nameRU}
//               duration={item.duration}
//               sortSavedMovies={sortSavedMovies}
//               setSortSavedMovies={setSortSavedMovies}
//             ></MovieCard>
//           ))}
//         </MoviesCardList>
//       ) : (
//         <div className="info-container">
//           <p className="info-container__text">
//             "Ничего не найдено. Попробуйте еще раз."
//           </p>
//         </div>
//       )}
//     </main>
//   );
// }

// export default SavedMovies;