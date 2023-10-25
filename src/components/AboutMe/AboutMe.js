import SectionHeader from "../HeaderSection/HeaderSection";
import Portfolio from "../Portfolio/Portfolio";
import profileImage from "../../images/profile-image.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="student" id="student">
      <SectionHeader text="Студент"></SectionHeader>
      <div className="introduction">
        <div className="introduction__section">
          <h3 className="introduction__title">Виталий</h3>
          <h4 className="introduction__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="introduction__description">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю
            слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.&nbsp;С
            2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className="introduction__link"
            href="https://github.com/EvgeniyTaranov"
          >
            Github
          </a>
        </div>
        <img
          className="introduction__image"
          alt="Фото студента, чье интро описано в данном разделе"
          src={profileImage}
        />
      </div>
      <Portfolio></Portfolio>
    </section>
  );
}

export default AboutMe;
