import "./aboutMe.css";
import photo from "../../images/photo.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me">
      <h1 className="about-me__title">Студент</h1>
      <div className="about-me__container">
        <img className="about-me__photo" src={photo} alt="Фото автора" />
        <div className="about-me__text">
          <h2 className="about-me__name">Виталий</h2>
          <h3 className="about-me__info">Фронтенд-разработчик, 30 лет</h3>
          <p className="about-me__story">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <nav className="about-me__link-container">
            <ul className="about-me__links">
              <li className="about-me__link-item">
                <a
                  className="about-me__link"
                  href="https://www.facebook.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="about-me__link-item">
                <a
                  className="about-me__link"
                  href="https://github.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
