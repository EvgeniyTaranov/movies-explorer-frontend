import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from 'classnames';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useForm from "../../hooks/useForm";
import { REG_EMAIL, REG_NAME } from "../../utils/Constants";
import "./Profile.css";

function Profile({
  setLoggedIn,
  setSortMovies,
  setChecked,
  handleEditProfile,
  setButtonSave,
  buttonSave
}) {

  const { value } = useContext(CurrentUserContext);
  const [currentUser] = value;

  const {
    values,
    handleChange,
    errors,
    isValid,
    setValues,
    resetInput,
    setInitialValues,
    isSubmitting,
    setIsSubmitting,
    hasChanges, 
    setHasChanges 
  } = useForm(['name', 'email']);

  const navigate = useNavigate();

  useEffect(() => {
    setValues(currentUser);
    setInitialValues(currentUser);
  }, [currentUser, setValues, setInitialValues]);

  function handleLogout() {
    resetInput();
    localStorage.clear();
    setChecked(false);
    setSortMovies(false);
    setLoggedIn(false);
    navigate("/");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    handleEditProfile(values)
      .then(() => {
        setInitialValues(values);
        setIsSubmitting(false);
        setHasChanges(false); 
      });
  }

  return (
    <main>
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form onSubmit={handleSubmit} className="profile__form" noValidate>
          <label className="profile__element">
            Имя
            <input
              placeholder="Имя"
              name="name"
              onChange={handleChange}
              disabled={!buttonSave || isSubmitting}
              required
              pattern={REG_NAME}
              minLength={2}
              maxLength={30}
              className="profile__input"
              type="text"
              value={values.name || ""}
            />
            <span className="profile__span-error">{errors.name}</span>
          </label>

          <label className="profile__element">
            E-mail
            <input
              placeholder="E-mail"
              name="email"
              onChange={handleChange}
              disabled={!buttonSave || isSubmitting}
              required
              className="profile__input"
              pattern={REG_EMAIL}
              type="email"
              value={values.email || ""}
            />
            <span className="profile__span-error">{errors.email}</span>
          </label>

          {buttonSave && (
            <button
              type="submit"
              disabled={!isValid || isSubmitting || !hasChanges}
              className={classNames('profile__save-button', { 'profile__save-button:disabled': !isValid })}
            >
              {isSubmitting ? "Сохранение..." : "Сохранить"}
            </button>
          )}
          {!buttonSave &&
            <div className="profile__button-container">
              <button
                type="button"
                onClick={() => setButtonSave(true)}
                className="profile__edit-button"
              >
                Редактировать
              </button>
              <button
                onClick={handleLogout}
                type="button"
                className="profile__exit-button"
              >
                Выйти из аккаунта
              </button>
            </div>
          }
        </form>
      </section>
    </main>
  );
}

export default Profile;
