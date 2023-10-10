import MovieCardList from "../MovieCardList/MovieCardList";
import MovieCard from "../MovieCard/MovieCard";
import SearchField from "../SearchField/SearchField";
import movieOne from "../../images/cards/33-slova-o-dizigne.svg";
import movieTwo from "../../images/cards/100-let-dizigna.svg";
import movieThree from "../../images/cards/v-pogone-za-benksi.svg";
import "./SavedMovies.css";

function SavedMovies() {
  const moviess = [
    { img: movieOne, name: "33 слова о дизайне", duration: "1ч 17м" },
    { img: movieTwo, name: "Киноальманах «100 лет дизайна»", duration: "1ч 17м" },
    { img: movieThree, name: "В погоне за Бенкси", duration: "1ч 17м" },
  ];

  return (
    <main className="saved-movies">
      <SearchField></SearchField>
      <MovieCardList>
        {moviess.map((item, index) => (
          <MovieCard
            key={index}
            src={item.img}
            name={item.name}
            duration={item.duration}
          ></MovieCard>
        ))}
      </MovieCardList>
    </main>
  );
}

export default SavedMovies;
