import { withRouter } from "react-router";
import "./footer.css";

function Footer(props) {
  if (
    props.location.pathname === "/login" ||
    props.location.pathname === "/register"
  ) {
    return null;
  }
  return (
    <section className="footer">
      <h1 className="footer_title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h1>
      <div className="footer_bar">
        <p className="copyright">&copy;2020</p>
        <nav>
          <ul className="footer__links">
            <li className="footer__link">Яндекс.Практикум</li>
            <li className="footer__link">Github</li>
            <li className="footer__link">Facebook</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default withRouter(Footer);
