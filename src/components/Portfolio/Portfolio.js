import "./portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Портфолио</h1>
      <nav className="portfolio__link-container">
        <ul className="portfolio__links">
          <li className="portfolio__link-item">
            <a className="portfolio__link" href="#">
              Статичный сайт
            </a>
            ↗
          </li>
          <li className="portfolio__link-item">
            <a className="portfolio__link" href="#">
              Адаптивный сайт
            </a>
            ↗
          </li>
          <li className="portfolio__link-item">
            <a className="portfolio__link" href="#">
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
