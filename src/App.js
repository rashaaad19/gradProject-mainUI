import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import NearbyPage from "./components/nearbyPlaces/NearbyPage";
import CategoryPage from "./components/CategoryPage";
import FooterContent from "./components/footerPage/FooterContent";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="home__container">

        <Home></Home>
      </div>
      <div className="secondPage__container">
        <Popular></Popular>
      </div>
      <div className="thirdPage__container">
        <NearbyPage></NearbyPage>
      </div>
      <div className="fourthPage__container">
    <CategoryPage></CategoryPage>
      </div>
      <div className="footer__container">
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
