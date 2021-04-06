import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import AionAR from "./components/AionARlist"
import Experience from "./components/Experience";
import Pitch from "./components/Pitch";
import Edujob from "./components/Edujob";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     
      <Navbar />
      <Header />
      <AboutMe />
      <Services/>
      <AionAR />
      <Experience />
      <Pitch />
      <Edujob />
      <Portfolio />
      <Contacts />
      <Footer />
      
      
    </>
  );
}

export default App;
