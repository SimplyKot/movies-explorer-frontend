import { withRouter } from "react-router";
import "./header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const path = props.location.pathname;
  if (path === "/login" || path === "/register" || path === "/404") {
    return null;
  }

  return (
    <header
      className={`header${path === "/" ? " header_background_promo" : ""}`}
    >
      {/* eslint-disable-next-line */}
      <nav href="#" className="header_logo">
        <img
          className="logo logo_place_header"
          src={logo}
          alt="Зеленый логотип с улыбкой"
        />
      </nav>
      <Navigation isBurger={false} />
    </header>
  );
}

export default withRouter(Header);
