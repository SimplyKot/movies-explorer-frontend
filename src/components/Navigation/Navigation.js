import "./navigation.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import profile_icon from "../../images/profile.svg";
import BurgerCloseIcon from "../../images/burger-close.svg";
import BurgerOpenIcon from "../../images/burger-open.svg";

const menuItems = [
  { key: "1", name: "Главная", link: "/" },
  { key: "2", name: "Фильмы", link: "/movies" },
  { key: "3", name: "Сохранённые фильмы", link: "/saved-movies" },
];
const menuProfile = { name: "Аккаунт", link: "/profile" };

function Navigation(props) {
  const { loggedIn } = props;
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function toggleBurger(e) {
    setIsBurgerOpen(!isBurgerOpen);
  }

  if (loggedIn) {
    return (
      <>
        <ul className="navigation">
          <li className="navigation-link__item" key="1">
            <NavLink
              className="navigation-link"
              activeClassName="navigation-link_active"
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation-link__item" key="2">
            <NavLink
              className="navigation-link"
              activeClassName="navigation-link_active"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="navigation-link__item" key="3">
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
        <div className="burger">
          <img src={BurgerOpenIcon} alt="Отрыть меню" onClick={toggleBurger} />
          <div
            className={
              isBurgerOpen ? "burger-menu" : "burger-menu burger-menu_hidden"
            }
          >
            <img
              className="burger-menu__close-button"
              src={BurgerCloseIcon}
              onClick={toggleBurger}
              alt="Закрыть"
            />
            <div className="burger-menu__container">
              {menuItems.map((item) => {
                return (
                  <NavLink
                    key={item.key}
                    className="burger-menu__item"
                    activeClassName="burger-menu__item_active"
                    to={item.link}
                    exact
                    onClick={toggleBurger}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
              <NavLink
                className="burger-menu__item burger-menu__item_type_profile"
                activeClassName="burger-menu__item_active"
                to={menuProfile.link}
                exact
                onClick={toggleBurger}
              >
                {menuProfile.name}
                <img
                  className="profile__logo"
                  src={profile_icon}
                  alt="Профиль"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <ul className="not-logon">
        <li key="1">
          <Link className="not-logon__link" to="/register">
            Регистрация
          </Link>
        </li>
        <li key="2">
          <Link
            className="not-logon__link not-logon__link_type_button"
            to="/login"
          >
            Войти
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
