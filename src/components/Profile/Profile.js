import "./profile.css";
import { useState, useEffect, useContext } from "react";
import Form from "../Form/Form";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormValidation from "../../hooks/UseForm";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { onLogout, onUpdate } = props;
  // const [data, setData] = useState(currentUser);
  const [isEdit, setIsEdit] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [error, setError] = useState("");

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormValidation();

  useEffect(() => {
    resetForm(currentUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      isValid &&
      (values.name !== currentUser.name || values.email !== currentUser.email)
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, currentUser]);

  function handleSubmit(e) {
    setError("");
    e.preventDefault();
    onUpdate(values)
      .then((res) => {
        console.log("Сохранили изменения");
        setIsEdit(false);
      })
      .catch((err) => {
        setError("При обновлении профиля произошла ошибка.");
      });
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
        title={`Привет, ${currentUser.name}!`}
        onSubmit={handleSubmit}
        noValidate
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
            value={values.name || ""}
            onChange={handleChange}
            pattern="^[0-9a-zA-Zа-яёА-ЯЁ /s -]+"
            disabled={!isEdit}
          />
          <span
            className="form__field-error form__field-error_type_profile"
            id="email-input-error"
          >
            {errors.name}
          </span>
        </div>
        <div className="from__input-container from__input-container_type_profile">
          <label
            className="form__label form__label_view_profile"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Email"
            className="form__field form__field_view_profile"
            required
            value={values.email || ""}
            onChange={handleChange}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            disabled={!isEdit}
          />
          <span
            className="form__field-error form__field-error_type_profile"
            id="email-input-error"
          >
            {errors.email}
          </span>
        </div>
        <nav className="profile__selector">
          <p className="profile__error-message">{error}</p>

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
