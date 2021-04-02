import { withRouter, useHistory } from "react-router";
import "./header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const history = useHistory();
  const { isLogged, isBurger } = props;

  const path = props.location.pathname;
  if (path === "/login" || path === "/register" || path === "/404") {
    return null;
  }

  function logoClickHandler() {
    if (path !== "/") {
      history.push("/");
    }
  }

  return (
    <header
      className={`header${path === "/" ? " header_background_promo" : ""}`}
    >
      <nav className="header__logo" onClick={logoClickHandler}>
        <img src={logo} alt="Зеленый логотип с улыбкой" />
      </nav>

      <Navigation isLogged={isLogged} isBurger={isBurger} />
    </header>
  );
}

export default withRouter(Header);
