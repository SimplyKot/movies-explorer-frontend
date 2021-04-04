import "./profile.css";
import { useState } from "react";
import Form from "../Form/Form";

function Profile(props) {
  const [data, setData] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });

  const [isEdit, setIsEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEdit(false);
    console.log("Сохраняем изменения");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleLogout(e) {
    e.preventDefault();
    console.log("Выходим из аккаунта");
  }

  function handleEditMode(e) {
    e.preventDefault();
    setIsEdit(true);
    console.log("Переходим в режим редактирования", isEdit);
  }

  return (
    <section className="profile__form-container">
      <Form
        name="register"
        title={`Привет, ${data.name}!`}
        onSubmit={handleSubmit}
      >
        <div className="from__input-container from__input-container_type_profile">
          <label
            className="form__label form__label_view_profile"
            htmlFor="email"
          >
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
        </div>
        <div className="from__input-container">
          <label
            className="form__label form__label_view_profile"
            htmlFor="email"
          >
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
        </div>
        <nav className="profile__selector">
          <button
            type="submit"
            className={`form__button form__button_view_profile
            ${isEdit ? "" : "form__button_disabled"}`}
          >
            Сохранить
          </button>
          <p
            className={`selector__button
            ${isEdit ? "selector__button_disabled" : ""}`}
            onClick={handleEditMode}
          >
            Редактировать
          </p>
          <p
            className={`selector__button selector__button_type_exit
            ${isEdit ? "selector__button_disabled" : ""}`}
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </p>
        </nav>
      </Form>
    </section>
  );
}
export default Profile;
