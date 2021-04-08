import { useState, useEffect } from "react";
import "./searchform.css";
import searchIcon from "../../images/search-icon.svg";
import React from "react";

function SearchForm(props) {
  const { onSearch } = props;
  const [ioSwitch, setIoSwitch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery) {
      onSearch({ string: searchQuery, shortFilm: ioSwitch });
    }
  }, [ioSwitch]);

  function toggleSwitch() {
    setIoSwitch(!ioSwitch);
  }

  function onChange(e) {
    const { value } = e.target;
    e.preventDefault();
    setSearchQuery(value);
  }

  function submitHandler(e) {
    e.preventDefault();
    onSearch({ string: searchQuery, shortFilm: ioSwitch });
  }

  return (
    <form className="serach-form" onSubmit={submitHandler}>
      <div className="search-string">
        <input
          className="search-string__input"
          placeholder="Фильм"
          required
          onChange={onChange}
        />
        <button type="submit" className="serach-form__button">
          <img src={searchIcon} alt="Найти" />
        </button>
      </div>
      <div className="search-string__selector">
        <label className="checkbox__label">Короткометражки</label>
        <input type="checkbox" name="checkboxName" className="checkbox" />
        <div
          className={`switch ${ioSwitch ? "switchOn" : ""}`}
          onClick={toggleSwitch}
        ></div>
      </div>
    </form>
  );
}

export default SearchForm;
