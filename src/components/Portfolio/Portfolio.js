import "./Portfolio.css";

function Portfolio() {
  const listLink = [
    {
      link: "https://github.com/EvgeniyTaranov/how-to-learn",
      text: "Статичный сайт",
    },
    {
      link: "https://github.com/EvgeniyTaranov/russian-travel",
      text: "Адаптивный сайт",
    },
    {
      link: "https://github.com/EvgeniyTaranov/react-mesto-api-full-gha",
      text: "Одностраничное приложение",
    },
  ];
  return (
    <div className="portfolio">
      <h4 className="portfolio__subtitle">Портфолио</h4>
      <ul className="portfolio__section">
        {listLink.map((item, index) => (
          <li key={index} className="portfolio__item">
            <a
              target="_blank"
              rel="noreferrer"
              className="portfolio__link"
              href={item.link}
            >
              <p className="portfolio__text-item">{item.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
