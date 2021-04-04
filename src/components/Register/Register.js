import "./register.css";
import logo from "../../images/logo.svg";
import React from "react";
import Form from "../Form/Form";
import { withRouter, useHistory } from "react-router";
import { Link } from "react-router-dom";

function Register(props) {
  const history = useHistory();

  const [data, setData] = React.useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
    password: "qwertyuioplkjh",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function logoClickHandler() {
    history.push("/");
  }

  return (
    <div className="register">
      <div className="register__top-container">
        <img
          className="register__logo"
          src={logo}
          alt="Зеленый логотип с улыбкой"
          onClick={logoClickHandler}
        />
      </div>
      <Form name="register" title="Добро пожаловать!" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="email">
          Имя
        </label>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя"
          className="form__field"
          required
          value={data.name || ""}
          onChange={handleChange}
        />
        <span className="form__field-error" id="email-input-error"></span>

        <label className="form__label" htmlFor="email">
          E-mail
        </label>
        <input
          type="text"
          name="email"
          id="email-input"
          placeholder="Email"
          className="form__field"
          required
          value={data.email || ""}
          onChange={handleChange}
        />
        <span className="form__field-error" id="email-input-error"></span>

        <label className="form__label" htmlFor="password">
          Пароль
        </label>
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="Пароль"
          className="form__field form__field_type_error"
          required
          value={data.password || ""}
          onChange={handleChange}
        />
        <span className="form__field-error" id="password-input-error">
          Что-то пошло не так...
        </span>

        <button type="submit" className="form__button">
          Зарегистрироваться
        </button>
      </Form>
      <div className="register__bottom-container">
        Уже зарегистрированы?
        <Link className="bottom__link" to="/login">
          Войти
        </Link>
      </div>
    </div>
  );
}
export default withRouter(Register);
