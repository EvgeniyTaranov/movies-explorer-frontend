import { Link, NavLink } from "react-router-dom";
import { REG_EMAIL } from "../../utils/Constants";
import useForm from "../../hooks/useForm";
import logo from "../../images/logo.svg";
import "./Login.css";

function Login({ handleAuthorize }) {
  const { values, errors, isValid, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuthorize(values.password, values.email);
  };

  return (
    <main>
      <section className="login">
        <div className="login__container">
          <NavLink to="/" className="login__logo-link">
            <img src={logo} alt="зеленый круг логотип сайта" />
          </NavLink>
          <h1 className="login__title">Рады видеть!</h1>
          <form onSubmit={handleSubmit} className="login__form-container" noValidate>
            <label className="login__form-item">
              E-mail
              <input
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                placeholder="E-mail"
                required
                type="email"
                pattern={REG_EMAIL}
                className="login__form-input"
              ></input>
              <span className="login__form-span">{errors.email}</span>
            </label>
            <label className="login__form-item">
              Пароль
              <input
                name="password"
                value={values.password || ""}
                minLength={6}
                placeholder="Пароль"
                onChange={handleChange}
                required
                type="password"
                className="login__form-input"
              ></input>
              <span className="login__form-span">{errors.password}</span>
            </label>
            <button
              type="submit"
              disabled={!isValid}
              className={`login__form-button ${!isValid && "login__form-button_disabled"}`}
            >
              Войти
            </button>
          </form>
          <p className="login__text">
            Ещё не зарегистрированы?
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
