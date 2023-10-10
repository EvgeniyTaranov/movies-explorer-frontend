import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [editButton, setEditButton] = useState(true);
  const [saveButton, setSaveButton] = useState(false);

  function button() {
    setEditButton(false);
    setSaveButton(true);
  }
  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <label className="profile__element">
            Имя
            <input
              placeholder="Имя"
              name="name"
              disabled
              required
              minLength={2}
              maxLength={30}
              className="profile__input"
              defaultValue="Виталий"
              type="text"
            ></input>
            <span className="profile__span-error"></span>
          </label>
          <label className="profile__element">
            E-mail
            <input
              placeholder="E-mail"
              name="email"
              disabled
              required
              className="profile__input"
              defaultValue="mail@yandex.ru"
              type="email"
            ></input>
            <span className="profile__span-error"></span>
          </label>
        </form>
        {editButton && (
          <div className="profile__button-container">
            <button
              type="button"
              onClick={button}
              className="profile__edit-button"
            >
              Редактировать
            </button>
            <NavLink to="/" className="profile__exit-button">
              Выйти из аккаунта
            </NavLink>
          </div>
        )}
        {saveButton && (
          <button type="button" className="profile__save-button">
            Сохранить
          </button>
        )}
      </section>
    </main>
  );
}

export default Profile;
