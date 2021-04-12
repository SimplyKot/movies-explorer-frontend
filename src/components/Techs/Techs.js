import "./techs.css";

function Techs() {
  return (
    <section className="techs">
      <h1 className="techs__title">Технологии</h1>
      <h2 className="techs__subtitle">7 технологий</h2>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="tech__list">
        <li key="1" className="tech__list-item">
          HTML
        </li>
        <li key="2" className="tech__list-item">
          CSS
        </li>
        <li key="3" className="tech__list-item">
          JS
        </li>
        <li key="4" className="tech__list-item">
          React
        </li>
        <li key="5" className="tech__list-item">
          Git
        </li>
        <li key="6" className="tech__list-item">
          Express.js
        </li>
        <li key="7" className="tech__list-item">
          mongoDB
        </li>
      </ul>
    </section>
  );
}

export default Techs;
