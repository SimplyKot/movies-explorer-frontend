import "./navigation.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import profile_icon from "../../images/profile.svg";
import BurgerCloseIcon from "../../images/burger-close.svg";
import BurgerOpenIcon from "../../images/burger-open.svg";

function Navigation(props) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);

  function toggleBurger(e) {
    setIsBurgerOpen(!isBurgerOpen);
  }

  if (props.isBurger) {
    return (
      <>
        <img src={BurgerOpenIcon} alt="Отрыть меню" onClick={toggleBurger} />
        <div className={isBurgerOpen ? "burger-menu" : "burger-menu_hidden"}>
          <img
            className="burger-menu__close-button"
            src={BurgerCloseIcon}
            onClick={toggleBurger}
            alt="Закрыть"
          />
          {/* TODO: Сверстать бургер */}
          <div className="burger-menu__containter">Туточки</div>
        </div>
      </>
    );
  } else {
    return (
      <ul className="navigation">
        <li className="navigation-link__item">
          <NavLink
            className="navigation-link"
            activeClassName="navigation-link_active"
            to="/movies"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation-link__item">
          <NavLink
            className="navigation-link"
            activeClassName="navigation-link_active"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li className="navigation-link__item">
          <NavLink
            className="navigation-link"
            activeClassName="navigation-link_active"
            to="/profile"
          >
            <p className="profile__name">Аккаунт</p>
            <img className="profile__logo" src={profile_icon} alt="Профиль" />
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default Navigation;
