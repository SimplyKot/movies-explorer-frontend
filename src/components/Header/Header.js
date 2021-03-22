import "./header.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      {/* eslint-disable-next-line */}
      <a href="#" className="header_logo">
        <img className="logo logo_place_header" src={logo} alt="Mesto.Russia" />
      </a>
    </header>
  );
}

export default Header;
