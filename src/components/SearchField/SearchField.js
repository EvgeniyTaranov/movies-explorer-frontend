import CheckboxToggle from "../CheckboxToggle/CheckboxToggle";
import "./SearchField.css";

function SearchField() {
  return (
    <section className="search">
      <form className="search__field">
        <div className="search__field-container">
          <input placeholder="Фильм" className="search__input"></input>
          <button type="button" className="search__button"></button>
        </div>
        <CheckboxToggle></CheckboxToggle>
      </form>
    </section>
  );
}

export default SearchField;
