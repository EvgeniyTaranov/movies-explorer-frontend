import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";

function Header() {
  const [burgerMenu, setBurgerMenu] = React.useState(false);
  const [headerActiv] = useState(false);

  function openBurgerMenu() {
    setBurgerMenu(true);
  }

  function closeBurgerMenu() {
    setBurgerMenu(false);
  }

  return headerActiv ? (
    <>
      <header className="header">
        <NavLink to="/" className="header__logo-link">
          <img src={logo} alt="Логотип в виде ярко-зеленого круга" />
        </NavLink>
        <nav className="header__menu-movies">
          <NavLink to="/movies" className="header__menu-buttons">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="header__menu-buttons">
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
      </header>
      {burgerMenu && (
        <Navigation closeBurgerMenu={closeBurgerMenu}></Navigation>
      )}
    </>
  ) : (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img src={logo} alt="Логотип в виде ярко-зеленого круга" />
      </NavLink>
      <nav className="header__menu-main">
        <NavLink to="/signup" className="header__button-registration">
          Регистрация
        </NavLink>
        <NavLink to="/signin" className="header__button-login">
          Войти
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
