import { useContext } from "react";
import popupSuccessImage from "../../images/popup-success.svg";
import popupErrorImage from "../../images/popup-error.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ProfilePopup.css";

function ProfilePopup({ closePopup }) {

  const { value2 } = useContext(CurrentUserContext);
  const [profilePopup] = value2;

  return (
    <div
      onMouseDown={closePopup}
      className={
        profilePopup.error || profilePopup.ok ? "profile-popup profile-popup_opened" : "profile-popup"
      }
    >
      <div className="profile-popup__container">
        <button
          onClick={closePopup}
          type="button"
          aria-label="Закрыть окно сообщения"
          className="profile-popup__close-icon"
        />
        {profilePopup.ok && (
          <>
            <img
              alt="Иконка успешной операции"
              className="profile-popup__image"
              src={popupSuccessImage}
            />
            <h2 className="profile-popup__title">{profilePopup.title}</h2>{" "}
          </>
        )}
        {profilePopup.error && (
          <>
            <img
              alt="Иконка ошибки"
              className="profile-popup__image"
              src={popupErrorImage}
            />
            <h2 className="profile-popup__title">{profilePopup.title}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePopup;
