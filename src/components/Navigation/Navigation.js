import "./navigation.css";
import { useHistory, withRouter } from "react-router";
import profile_icon from "../../images/profile.svg";

function Navigation(props) {
  const history = useHistory();
  return (
    <div className="header_activity-container">
      <nav>
        <ul className="navigation">
          <li
            className="navigation_link"
            onClick={() => history.push("/movies")}
          >
            Фильмы
          </li>
          <li
            className="navigation_link"
            onClick={() => history.push("/saved-movies")}
          >
            Сохранённые фильмы
          </li>
        </ul>
      </nav>
      <div className="profile">
        <p className="profile_name">Аккаунт</p>
        <img className="profile_logo" src={profile_icon} alt="Профиль" />
      </div>
    </div>
  );
}
export default withRouter(Navigation);
