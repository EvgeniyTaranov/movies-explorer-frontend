import { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ loggedIn }) {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const openBurgerMenu = useCallback(() => {
    setBurgerMenu(true);
  }, []);

  const closeBurgerMenu = useCallback(() => {
    setBurgerMenu(false);
  }, []);

  const buttonClasses = isActive =>
    classNames("header__menu-buttons", {
      "header__menu-buttons_active": isActive
    });

  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__logo-link">
          <img src={logo} alt="зеленый круг логотип сайта" />
        </NavLink>
        {loggedIn ? (
          <>
            <nav className="header__menu-movies">
              <NavLink to="/movies" className={buttonClasses}>
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies" className={buttonClasses}>
                Сохраненные фильмы
              </NavLink>
            </nav>
            <NavLink to="/profile" className="header__button-profile">
              Аккаунт
            </NavLink>
            <button
              type="button"
              onClick={openBurgerMenu}
              className="header__button-burger"
            ></button>
          </>
        ) : (
          <nav className="header__menu-main">
            <NavLink to="/signup" className="header__button-registration">
              Регистрация
            </NavLink>
            <NavLink to="/signin" className="header__button-login">
              Войти
            </NavLink>
          </nav>
        )}
      </header>
      {burgerMenu && <Navigation closeBurgerMenu={closeBurgerMenu} />}
    </>
  );
}

export default Header;
