import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        {/* <Main /> */}
        {/* <Movies /> */}
        <SavedMovies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
