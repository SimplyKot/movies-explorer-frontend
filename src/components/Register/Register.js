import { useEffect, useState } from "react";
import "./register.css";
import logo from "../../images/logo.svg";
import React from "react";
import Form from "../Form/Form";
import { withRouter, useHistory } from "react-router";
import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/UseForm";

function Register(props) {
  const { onRegister, onLogin } = props;
  const history = useHistory();
  const [error, setError] = useState("");

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormValidation();

  useEffect(() => {
    console.log(values, errors);
  }, [values]);

  function handleSubmit(e) {
    setError("");
    e.preventDefault();
    onRegister(values)
      .then((data) =>
        onLogin({ email: values.email, password: values.password })
      )
      .catch((err) => setError("Ошибка на сервере"));
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
      <Form
        name="register"
        title="Добро пожаловать!"
        onSubmit={handleSubmit}
        noValidate
      >
        <label className="form__label" htmlFor="email">
          Имя
        </label>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя"
          className={`form__field
          ${errors.name ? "form__field_type_error" : ""}`}
          required
          value={values.name || ""}
          onChange={handleChange}
          pattern="^[0-9a-zA-Zа-яёА-ЯЁ /s -]+"
        />
        <span className="form__field-error" id="email-input-error">
          {errors.name}
        </span>

        <label className="form__label" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="Email"
          className={`form__field
          ${errors.email ? "form__field_type_error" : ""}`}
          required
          value={values.email || ""}
          onChange={handleChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <span className="form__field-error" id="email-input-error">
          {errors.email}
        </span>

        <label className="form__label" htmlFor="password">
          Пароль
        </label>
        <input
          type="password"
          name="password"
          id="password-input"
          placeholder="Пароль"
          className={`form__field
          ${errors.password ? "form__field_type_error" : ""}`}
          required
          minLength="3"
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="form__field-error" id="password-input-error">
          {errors.password}
        </span>
        <div className="form__button-container">
          <p className="button__error-message">{error}</p>
          <button
            type="submit"
            className={`form__button
            ${isValid ? "" : " form__button_inactive"}`}
          >
            Зарегистрироваться
          </button>
        </div>
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
