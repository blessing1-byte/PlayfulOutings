// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import ContactUs from "./Components/Pages/ContactUs";
// import Header from './Components/Layout/Header';

function App() {
  return (
    <>
      <Header />
      <ContactUs/>
      <Footer />
    </>
  );
}

export default App;
