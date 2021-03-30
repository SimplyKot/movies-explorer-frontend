import "./notfounderror.css";
function NotFoundError() {
  return (
    <div className="not-found">
      <div className="not-found__container" />
      <div className="not-found__container not-found__text-container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">Страница не найдена</p>
      </div>
      <div className="not-found__container not-found__link-container">
        <a className="not-found__link" href="#">
          Назад
        </a>
      </div>
    </div>
  );
}

export default NotFoundError;
