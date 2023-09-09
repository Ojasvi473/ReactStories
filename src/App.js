import "./App.css";
import Card from "./Component/Card/Card";
import Filter from "./Component/Filter/Filter";
import Footer from "./Component/Footer/Footer";
import Photo from "./Component/Image/Photo";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Photo />
      <Filter />
      <Card />
      <Footer />
    </>
  );
}

export default App;
