import { Link, NavLink } from "react-router-dom";
import { REG_EMAIL, REG_NAME } from "../../utils/Constants";
import useForm from '../../hooks/useForm';
import logo from "../../images/logo.svg";
import "./Register.css";

function Register({ handleRegistr }) {
  const { values, errors, isValid, handleChange } = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    handleRegistr(values.name, values.email, values.password);
  }

  return (
    <main>
      <section className="register">
        <div className="register__container">
          <NavLink to="/" className="register__logo">
            <img src={logo} alt="зеленый круг логотип сайта" />
          </NavLink>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form onSubmit={handleSubmit} className="register__form" noValidate>
            <label className="register__form-field">
              Имя
              <input
                name="name"
                value={values.name || ""}
                onChange={handleChange}
                placeholder="Имя"
                required
                minLength={2}
                maxLength={30}
                pattern={REG_NAME}
                type="text"
                className="register__form-input"
              ></input>
              <span className="register__form-span">{errors.name}</span>
            </label>
            <label className="register__form-field">
              E-mail
              <input
                name="email"
                value={values.email || ""}
                onChange={handleChange}
                placeholder="E-mail"
                required
                type="email"
                pattern={REG_EMAIL}
                className="register__form-input"
              ></input>
              <span className="register__form-span">{errors.email}</span>
            </label>
            <label className="register__form-field">
              Пароль
              <input
                name="password"
                value={values.password || ""}
                minLength={6}
                maxLength={30}
                placeholder="Пароль"
                onChange={handleChange}
                required
                type="password"
                className="register__form-input"
              ></input>
              <span className="register__form-span">{errors.password}</span>
            </label>
            <button
              type="submit"
              disabled={!isValid}
              className={`register__form-button ${!isValid && "register__form-button_disabled"}`}
            >
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
