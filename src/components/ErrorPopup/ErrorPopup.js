import "./errorpopup.css";

function ErrorPopup(props) {
  const { isOpen, message, closeHandler } = props;
  function handleCloseError(e) {
    e.preventDefault();
    closeHandler();
    console.log("Закрываем попап с ошибкой");
  }

  return (
    <section className={`error-popup ${isOpen ? "error-popup_opened" : ""}`}>
      <h1 className="error-popup__description">Пpоизошла ошиюка: {message}</h1>
      <nav className="error-popup__close" onClick={handleCloseError}>
        Закрыть
      </nav>
    </section>
  );
}

export default ErrorPopup;
