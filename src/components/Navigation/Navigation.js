import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({closeBurgerMenu}) {
  return (
    <section className="burger-menu">
      <div className="burger-menu__container">
        <button type="button" onClick={closeBurgerMenu} className="burger-menu__close"></button>
        <nav className="burger-menu__menu">
          <NavLink to="/" className={({isActive}) => `${isActive ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}`} >Главная</NavLink>
          <NavLink to="/movies" className={({isActive}) => `${isActive ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}`}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({isActive}) => `${isActive ? "burger-menu__link burger-menu__link_active" : "burger-menu__link"}`}>Сохраненные фильмы</NavLink>
        </nav>
        <NavLink to="/profile" className="burger-menu__link-profile">Аккаунт</NavLink>
      </div>
    </section>
  );
}
export default Navigation;