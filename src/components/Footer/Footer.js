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
            <li className="footer__link_item">
              <a
                className="footer__link"
                href="https://praktikum.yandex.ru/"
                target={"_blank"}
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link_item">
              <a
                className="footer__link"
                href="https://github.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="footer__link_item">
              <a
                className="footer__link"
                href="https://www.facebook.com"
                target={"_blank"}
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default withRouter(Footer);
