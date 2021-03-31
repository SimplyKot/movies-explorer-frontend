import "./navigation.css";
import { NavLink } from "react-router-dom";
import profile_icon from "../../images/profile.svg";

function Navigation(props) {
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
export default Navigation;