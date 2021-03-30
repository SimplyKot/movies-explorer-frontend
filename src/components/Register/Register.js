import "./register.css";
import logo from "../../images/logo.svg";
import React from "react";
import Form from "../Form/Form";

function Register(props) {
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

  return (
    <div className="register">
      <div className="register__top-container">
        <img
          className="register__logo"
          src={logo}
          alt="Зеленый логотип с улыбкой"
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
        <a className="bottom__link" href="/login">
          Войти
        </a>
      </div>
    </div>
  );
}
export default Register;
