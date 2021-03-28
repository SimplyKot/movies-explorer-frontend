import { useState } from "react";
import "./searchform.css";
import searchIcon from "../../images/search-icon.svg";
import React from "react";

function SearchForm() {
  const [ioSwitch, setIoSwitch] = useState("switch");

  function toggleSwitch() {
    if (ioSwitch === "switch") {
      setIoSwitch("switch switchOn");
    } else {
      setIoSwitch("switch");
    }
  }

  return (
    <section className="serach-form">
      <div className="search-string">
        <input className="search-string__input" placeholder="Фильм" />
        <button className="serach-form__button">
          <img src={searchIcon} alt="Найти" />
        </button>
      </div>
      <div className="search-string__selector">
        <label className="checkbox__label">Короткометражки</label>
        <input type="checkbox" name="checkboxName" className="checkbox" />
        <div className={ioSwitch} onClick={toggleSwitch}></div>
      </div>
    </section>
  );
}

export default SearchForm;
