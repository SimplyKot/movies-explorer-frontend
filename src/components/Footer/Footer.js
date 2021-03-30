import { withRouter } from "react-router";
import "./footer.css";

function Footer(props) {
  const path = props.location.pathname;
  if (path === "/login" || path === "/register" || path === "/404") {
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
