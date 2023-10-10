import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "../Main/Main.js";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const location = useLocation();
  const [isActiveHeader, setIsActiveHeader] = useState(false);
  const [isActiveFooter, setIsActiveFooter] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/movies" ||
      location.pathname === "/saved-movies"
    ) {
      setIsActiveHeader(true);
      setIsActiveFooter(true);
    } else if (location.pathname === "/profile") {
      setIsActiveHeader(true);
      setIsActiveFooter(false);
    } else {
      setIsActiveHeader(false);
      setIsActiveFooter(false);
    }
  }, [location, isActiveHeader]);

  return (
    <div className="page">
      {isActiveHeader && <Header></Header>}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {isActiveFooter && <Footer></Footer>}
    </div>
  );
}
export default App;
