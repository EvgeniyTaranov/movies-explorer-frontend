import { Link, NavLink } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <main>
      <section className="login">
        <div className="login__container">
          <NavLink to="/" className="login__logo-link">
            <img src={logo} alt="Логотип в виде ярко-зеленого круга" />
          </NavLink>
          <h1 className="login__title">С возвращением!</h1>
          <form className="login__form-container">
            <label className="login__form-item">
              E-mail
              <input
                required
                placeholder="E-mail"
                className="login__form-input"
              ></input>
              <span className="login__form-span"></span>
            </label>
            <label className="login__form-item">
              Пароль
              <input
                required
                minLength={2}
                maxLength={30}
                placeholder="Пароль"
                className="login__form-input"
              ></input>
              <span className="login__form-span"></span>
            </label>
            <button type="submit" className="login__form-button">
              Войти
            </button>
          </form>
          <p className="login__text">
            Вы ещё не зарегистрированы?
            <Link to={"/signup"} className="login__link">
              Регистрация
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
