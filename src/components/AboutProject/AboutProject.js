import "./aboutProject.css";

function AboutProject() {
  return (
    <section className="about">
      <h1 className="about__title">О проекте</h1>
      <div className="about__text-container">
        <div className="about__text-item">
          <h2 className="text__title">Дипломный проект включал 5 этапов</h2>
          <p className="text__article">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__text-item">
          <h2 className="text__title">На выполнение диплома ушло 5 недель</h2>
          <p className="text__article">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="time-bar">
        <div className="time-bar__item time-bar__item_less">
          <div className="bar bar_marked_green">1 неделя</div>
          <p className="time-bar__text">Back-end</p>
        </div>
        <div className="time-bar__item time-bar__item_more">
          <div className="bar bar_marked_grey">4 недели</div>
          <p className="time-bar__text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
