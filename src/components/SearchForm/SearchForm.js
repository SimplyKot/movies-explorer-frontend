import { useState } from "react";
import "./searchform.css";
import searchIcon from "../../images/search-icon.svg";
import React from "react";

function SearchForm(props) {
  const [ioSwitch, setIoSwitch] = useState("switch switchOn");
  const [searchQuery, setSearchQuery] = useState("");

  function toggleSwitch() {
    if (ioSwitch === "switch") {
      setIoSwitch("switch switchOn");
    } else {
      setIoSwitch("switch");
    }
  }

  function onChange(e) {
    const { value } = e.target;
    e.preventDefault();
    setSearchQuery(value);
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onSearch(searchQuery);
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
        <div className={ioSwitch} onClick={toggleSwitch}></div>
      </div>
    </form>
  );
}

export default SearchForm;
