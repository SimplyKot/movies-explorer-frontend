import { withRouter } from "react-router";
import "./header.css";
import logo from "../../images/logo.svg";
import profile_icon from "../../images/profile.svg";

function Header(props) {
  if (
    props.location.pathname === "/login" ||
    props.location.pathname === "/register"
  ) {
    return null;
  }

  return (
    <header
      className={`header${
        props.location.pathname === "/" ? " header_background_promo" : ""
      }`}
    >
      {/* eslint-disable-next-line */}
      <a href="#" className="header_logo">
        <img
          className="logo logo_place_header"
          src={logo}
          alt="Зеленый логотип с улыбкой"
        />
      </a>
      <div className="header_activity-container">
        <nav>
          <ul className="navigation">
            <li className="navigation_link">Фильмы</li>
            <li className="navigation_link">Сохранённые фильмы</li>
          </ul>
        </nav>
        <div className="profile">
          <p className="profile_name">Аккаунт</p>
          <img className="profile_logo" src={profile_icon} alt="Профиль" />
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header);
