import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Promo />
        <AboutProject />
        <Footer />
      </div>
    </div>
  );
}

export default App;
