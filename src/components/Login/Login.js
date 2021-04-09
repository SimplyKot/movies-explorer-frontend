import "./login.css";
import logo from "../../images/logo.svg";
import React from "react";
import Form from "../Form/Form";
import { withRouter, useHistory } from "react-router";
import { Link } from "react-router-dom";

function Login(props) {
  const { onLogin } = props;
  const history = useHistory();
  const [data, setData] = React.useState({});

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(data);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function logoClickHandler() {
    history.push("/");
  }

  return (
    <div className="login">
      <div className="login__top-container">
        <img
          className="login__logo"
          src={logo}
          alt="Зеленый логотип с улыбкой"
          onClick={logoClickHandler}
        />
      </div>
      <Form name="login" title="Рады видеть!" onSubmit={handleSubmit}>
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
          className="form__field"
          required
          value={data.password || ""}
          onChange={handleChange}
        />
        <span className="form__field-error" id="password-input-error"></span>

        <button type="submit" className="form__button">
          Войти
        </button>
      </Form>
      <div className="login__bottom-container">
        Ещё не зарегистрированы?
        <Link className="bottom__link" to="/register">
          Регистрация
        </Link>
      </div>
    </div>
  );
}
export default withRouter(Login);
