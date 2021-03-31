import "./profile.css";
import { useState } from "react";
import Form from "../Form/Form";

function Profile(props) {
  const [data, setData] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  // TODO: Подогнать форму под измененный шаблон
  return (
    <section className="profile__form-container">
      <Form
        name="register"
        title={`Привет, ${data.name}`}
        onSubmit={handleSubmit}
      >
        <label className="form__label form__label_view_profile" htmlFor="email">
          Имя
        </label>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Имя"
          className="form__field form__field_view_profile"
          required
          value={data.name || ""}
          onChange={handleChange}
        />
        <span className="form__field-error" id="email-input-error"></span>

        <label className="form__label form__label_view_profile" htmlFor="email">
          E-mail
        </label>
        <input
          type="text"
          name="email"
          id="email-input"
          placeholder="Email"
          className="form__field form__field_view_profile"
          required
          value={data.email || ""}
          onChange={handleChange}
        />
        <span className="form__field-error" id="email-input-error"></span>

        <button
          type="submit"
          className="form__button form__button_view_profile"
        >
          Зарегистрироваться
        </button>
      </Form>
    </section>
  );
}
export default Profile;
