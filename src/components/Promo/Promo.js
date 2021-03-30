import "./promo.css";
import globe from "../../images/globe.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img src={globe} alt="Глобус WEB" />
        <div className="promo__text">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <div className="promo__link-container">
            <a
              className="promo__link"
              href="https://praktikum.yandex.ru/web/"
              target={"_blank"}
              rel="noreferrer"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
