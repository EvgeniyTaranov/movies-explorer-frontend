import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

import Main from "../Main/Main.js";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import PopupInfo from "../ProfilePopup/ProfilePopup.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { login, checkToken, updateUser, getMovies, getUserInfo, register } from "../../utils/MainApi";
import { loadAllMovies } from "../../utils/MoviesApi";

import "./App.css";

const ROUTES = {
  MAIN: "/",
  SIGNUP: "/signup",
  SIGNIN: "/signin",
  MOVIES: "/movies",
  SAVED_MOVIES: "/saved-movies",
  PROFILE: "/profile",
};

function App() {
  const location = useLocation();
  const path = location.pathname;

  const [allMovies, setAllMovies] = useState([]);
  const [savMovies, setSavMovies] = useState([]);
  const [sortMovies, setSortMovies] = useState([]);
  const [sortSavedMovies, setSortSavedMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isDisabledChekbox, setIsDisabledChekbox] = useState(false);
  const [isActiveHeader, setIsActiveHeader] = useState(false);
  const [isActiveFooter, setIsActiveFooter] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [buttonSave, setButtonSave] = useState(false);
  const [popupInfo, setPopupInfo] = useState({});
  const [isPreloader, setIsPreloader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const activePaths = [ROUTES.MAIN, ROUTES.MOVIES, ROUTES.SAVED_MOVIES];
    setIsActiveHeader(activePaths.includes(path) || path === ROUTES.PROFILE);
    setIsActiveFooter(activePaths.includes(path));
  }, [path]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      async function fetchMovies() {
        try {
          const savedMovies = await getMovies();
          setSavMovies(savedMovies);
        } catch (err) {
          setSavMovies([]);
        }
      }
      fetchMovies();
    }
  }, [loggedIn]);

  const handlePopupError = (message) => {
    setPopupInfo({ ...popupInfo, error: true, title: message });
  };

  const handleLogin = () => setLoggedIn(true);
  const closePopup = () => setPopupInfo({ ...popupInfo, ok: false, error: false });

  const handleRegistr = async (name, email, password) => {
    try {
      await register(name, email, password);
      setPopupInfo({ ...popupInfo, ok: true, title: "Вы успешно зарегистрировались." });
      await handleAuthorize(password, email);
      navigate(ROUTES.MOVIES);
    } catch (error) {
      handlePopupError(error.message);
    }
  };

  const handleAuthorize = async (password, email) => {
    try {
      const data = await login(password, email);
      if (data.jwt) {
        handleLogin();
        navigate(ROUTES.MOVIES, { replace: true });
        const userInfo = await getUserInfo();
        setCurrentUser(userInfo);
      }
    } catch (error) {
      handlePopupError(error.message);
    }
  };

  const handleEditProfile = async (values) => {
    try {
      const response = await updateUser(values);
      setCurrentUser(response.data || response);
      setButtonSave(false);
      setPopupInfo({ ...popupInfo, ok: true, title: "Успешно" });
    } catch (error) {
      handlePopupError(error.message);
    }
  };

  const handleTokenCheck = async () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const res = await checkToken(jwt);
        setCurrentUser(res);
        setLoggedIn(true);
        navigate(path, { replace: true });
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  async function filterMovies(value, checked, movies) {
    let filtered = movies.filter((item) => {
      let sort =
        item.nameRU.toLowerCase().includes(value.searchMovies.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(value.searchMovies.toLowerCase());
      return checked ? sort && item.duration <= 40 : sort;
    });
  
    if (location.pathname === ROUTES.MOVIES) {
      localStorage.setItem("sortMovies", JSON.stringify(filtered));
      setSortMovies(filtered);
    } else if (location.pathname === ROUTES.SAVED_MOVIES) {
      setSortSavedMovies(filtered);
    }
  }
  
  async function getAllMovies(value, checked) {
    setIsPreloader(true);
    
    try {
      const movies = await loadAllMovies();
      setAllMovies(movies);
      setIsDisabledChekbox(false);
      filterMovies(value, checked, movies);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsPreloader(false);
    }
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{
          value: [currentUser, setCurrentUser],
          value2: [popupInfo, setPopupInfo],
        }}
      >
        {isActiveHeader && <Header loggedIn={loggedIn} />}
        <Routes>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.SIGNUP} element={loggedIn ? <Navigate to={ROUTES.MOVIES} replace /> : <Register handleRegistr={handleRegistr} />} />
          <Route path={ROUTES.SIGNIN} element={loggedIn ? <Navigate to={ROUTES.MOVIES} replace /> : <Login handleAuthorize={handleAuthorize} />} />
          <Route path={ROUTES.MOVIES} element={<ProtectedRoute element={Movies} isError={isError} getAllMovies={getAllMovies} isPreloader={isPreloader} setAllMovies={setAllMovies} isDisabledChekbox={isDisabledChekbox} setIsDisabledChekbox={setIsDisabledChekbox} checked={checked} setChecked={setChecked} savedMovies={savMovies} setSavedMovies={setSavMovies} loggedIn={loggedIn} sortMovies={sortMovies} setSortMovies={setSortMovies} allMovies={allMovies} filterMovies={filterMovies} />} />
          <Route path={ROUTES.SAVED_MOVIES} element={<ProtectedRoute element={SavedMovies} setChecked={setChecked} checked={checked} setSortSavedMovies={setSortSavedMovies} sortSavedMovies={sortSavedMovies} savedMovies={savMovies} setSavedMovies={setSavMovies} loggedIn={loggedIn} sortMovies={sortMovies} filterMovies={filterMovies} setIsDisabledChekbox={setIsDisabledChekbox} isDisabledChekbox={isDisabledChekbox} />} />
          <Route path={ROUTES.PROFILE} element={<ProtectedRoute element={Profile} loggedIn={loggedIn} handleEditProfile={handleEditProfile} buttonSave={buttonSave} setButtonSave={setButtonSave} setChecked={setChecked} setSortMovies={setSortMovies} setLoggedIn={setLoggedIn} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {isActiveFooter && <Footer />}
        <PopupInfo closePopup={closePopup} popupInfo={popupInfo} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
