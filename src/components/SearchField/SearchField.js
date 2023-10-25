import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CheckboxToggle from "../CheckboxToggle/CheckboxToggle";
import useForm from "../../hooks/useForm.js";
import "./SearchField.css";

function SearchForm({
  handleSubmitSearch,
  checked,
  setChecked,
  isDisabledChekbox,
  setIsDisabledChekbox,
}) {
  const { values, setValues, handleChange } = useForm({});
  const location = useLocation();
  const [errorNoValue, setErrorNoValue] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/movies" &&
      localStorage.getItem("valueSearch")
    ) {
      const valueLocalStorage = JSON.parse(localStorage.getItem("valueSearch"));
      setValues(valueLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (!values.searchMovies && location.pathname === "/movies") {
      setIsDisabledChekbox(true);
    } else {
      setIsDisabledChekbox(false);
      setErrorNoValue(false);
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (values.searchMovies) {
      handleSubmitSearch(values, checked);
      setErrorNoValue(false);
    } else {
      setErrorNoValue(true);
    }
  }

  function handleClick(checked) {
    if (values.searchMovies) {
      handleSubmitSearch(values, checked);
    } else {
      setIsDisabledChekbox(true);
    }
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search__field">
        <div className="search__field-container">
          <input
            value={values.searchMovies || ""}
            name="searchMovies"
            onChange={handleChange}
            placeholder="Фильм"
            className="search__input"
          ></input>
          <button type="submit" className="search__button"></button>
          {errorNoValue && (
            <span className="search__error">Введите запрос для поиска.</span>
          )}
        </div>

        <CheckboxToggle
          isDisabledChekbox={isDisabledChekbox}
          handleClick={handleClick}
          checked={checked}
          setChecked={setChecked}
        ></CheckboxToggle>
      </form>
    </section>
  );
}

export default SearchForm;