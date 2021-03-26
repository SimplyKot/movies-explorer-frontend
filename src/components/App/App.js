import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
