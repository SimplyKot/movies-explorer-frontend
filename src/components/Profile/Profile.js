import "./profile.css";
import { useState, useEffect, useContext } from "react";
import Form from "../Form/Form";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { onLogout, onUpdate } = props;
  const [data, setData] = useState(currentUser);
  const [isEdit, setIsEdit] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [error, setError] = useState("");

  // TODO: useEffect? context

  useEffect(() => {
    if (data.name !== currentUser.name || data.email !== currentUser.email) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [data, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(data)
      .then((res) => {
        console.log("Сохранили изменения");
        setIsEdit(false);
      })
      .catch((err) => {
        setError("При обновлении профиля произошла ошибка.");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleLogout(e) {
    e.preventDefault();
    onLogout();
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
            disabled={!isEdit}
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
            disabled={!isEdit}
          />
          <span className="form__field-error" id="email-input-error"></span>
        </div>
        <nav className="profile__selector">
          {/* TODO: Сделать сообщение об ошибке над кнопкой */}
          <p className="profile__error-message">{`${error}`}</p>

          <button
            type="submit"
            className={`form__button form__button_view_profile
            ${isEdit ? "" : " form__button_disabled"}
            ${isButtonActive ? "" : " form__button_inactive"}`}
            disabled={!isButtonActive}
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
