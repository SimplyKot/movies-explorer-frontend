import "./login.css";
import logo from "../../images/logo.svg";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import { withRouter, useHistory } from "react-router";
import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/UseForm";

function Login(props) {
  const { onLogin } = props;
  const history = useHistory();
  const [error, setError] = useState("");

  // const [data, setData] = React.useState({});
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormValidation();

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    onLogin(values).catch((err) => {
      setError("Произошла ошибка при входе");
    });
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
      <Form
        name="login"
        title="Рады видеть!"
        onSubmit={handleSubmit}
        noValidate
      >
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
            Войти
          </button>
        </div>
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
