import "./promo.css";
import globe from "../../images/globe.svg";
import { Link } from "react-router-dom";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img className="promo__image" src={globe} alt="Глобус WEB" />
        <div className="promo__text">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <div className="promo__link-container">
            <Link
              className="promo__link"
              to="https://praktikum.yandex.ru/web/"
              target={"_blank"}
              rel="noreferrer"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
