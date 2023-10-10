import { Link, NavLink } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <main>
      <section className="register">
        <div className="register__container">
          <NavLink to="/" className="register__logo">
            <img src={logo} alt="Логотип в виде ярко-зеленого круга" />
          </NavLink>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form">
            <label className="register__form-field">
              Имя
              <input
                placeholder="Имя"
                required
                minLength={2}
                maxLength={30}
                type="text"
                className="register__form-input"
              ></input>
              <span className="register__form-span"></span>
            </label>
            <label className="register__form-field">
              E-mail
              <input
                placeholder="E-mail"
                required
                minLength={2}
                maxLength={30}
                type="email"
                className="register__form-input"
              ></input>
              <span className="register__form-span">
                Пользователь с таким email уже существует.
              </span>
            </label>
            <label className="register__form-field">
              Пароль
              <input
                placeholder="Пароль"
                required
                type="password"
                className="register__form-input"
              ></input>
              <span className="register__form-span"></span>
            </label>
            <button type="submit" className="register__form-button">
              Зарегистрироваться
            </button>
          </form>
          <p className="register__question">
            Уже зарегистрированы?
            <Link to={"/signin"} className="register__link">
              Войти
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Register;
