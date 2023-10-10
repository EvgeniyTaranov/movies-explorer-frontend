import "./Movies.css";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchForm from "../SearchField/SearchField";
import movieOne from "../../images/cards/33-slova-o-dizigne.svg";
import movieTwo from "../../images/cards/100-let-dizigna.svg";
import movieThree from "../../images/cards/v-pogone-za-benksi.svg";

function Movies() {
  const movies = [
    { img: movieOne, name: "33 слова о дизайне", duration: "1ч 17м" },
    {
      img: movieTwo,
      name: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
    },
    { img: movieThree, name: "В погоне за Бенкси", duration: "1ч 17м" },
    { img: movieOne, name: "33 слова о дизайне", duration: "1ч 17м" },
    {
      img: movieTwo,
      name: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
    },
    { img: movieThree, name: "В погоне за Бенкси", duration: "1ч 17м" },
    { img: movieOne, name: "33 слова о дизайне", duration: "1ч 17м" },
    {
      img: movieTwo,
      name: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
    },
    { img: movieThree, name: "В погоне за Бенкси", duration: "1ч 17м" },
    { img: movieOne, name: "33 слова о дизайне", duration: "1ч 17м" },
    {
      img: movieTwo,
      name: "Киноальманах «100 лет дизайна»",
      duration: "1ч 17м",
    },
    { img: movieThree, name: "В погоне за Бенкси", duration: "1ч 17м" },
  ];

  return (
    <main className="movies">
      <SearchForm></SearchForm>
      <MovieCardList>
        {movies.map((item, index) => (
          <MovieCard
            key={index}
            src={item.img}
            name={item.name}
            duration={item.duration}
          ></MovieCard>
        ))}
      </MovieCardList>
      <div className="movies__button-container">
        <button type="button" className="movies__button">Ещё</button>
      </div>
    </main>
  );
}

export default Movies;
