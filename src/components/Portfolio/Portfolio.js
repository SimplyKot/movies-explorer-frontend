import "./portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Портфолио</h1>
      <nav className="portfolio__link-container">
        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <a
              className="portfolio__link"
              href="https://github.com/SimplyKot/how-to-learn"
              target={"_blank"}
              rel="noreferrer"
            >
              Статичный сайт
            </a>
            ↗
          </li>
          <li className="portfolio__link-item">
            <a
              className="portfolio__link"
              href="https://simplykot.github.io/russian-travel/"
              target={"_blank"}
              rel="noreferrer"
            >
              Адаптивный сайт
            </a>
            ↗
          </li>
          <li className="portfolio__link-item">
            <a
              className="portfolio__link"
              href="https://www.kot.students.nomoredomains.icu"
              target={"_blank"}
              rel="noreferrer"
            >
              Одностраничное приложение
            </a>
            ↗
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
