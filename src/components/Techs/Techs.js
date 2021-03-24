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
        <li className="tech__list-item">HTML</li>
        <li className="tech__list-item">CSS</li>
        <li className="tech__list-item">JS</li>
        <li className="tech__list-item">React</li>
        <li className="tech__list-item">Git</li>
        <li className="tech__list-item">Express.js</li>
        <li className="tech__list-item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
