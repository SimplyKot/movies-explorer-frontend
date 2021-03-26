import "./searchform.css";
import searchIcon from "../../images/search-icon.svg";

function SearchForm() {
  return (
    <section className="serach-form">
      <div className="search-string">
        <input className="search-string__input" placeholder="Фильм" />
        <button className="serach-form__button">
          <img src={searchIcon} alt="Найти" />
        </button>
      </div>
    </section>
  );
}

export default SearchForm;
