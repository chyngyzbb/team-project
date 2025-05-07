import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/page/Home";
import Shop from "./component/page/Shop";
import Contact from "./component/page/Contact";
import Brend from "./component/page/Brend";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brend" element={<Brend />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
