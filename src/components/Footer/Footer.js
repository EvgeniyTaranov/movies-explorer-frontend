import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__subtitle">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__copyright">
        <p className="footer__info">© 2023</p>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://practicum.yandex.ru/"
              className="footer__link"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/"
              className="footer__link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
