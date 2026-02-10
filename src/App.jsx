import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";



import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/animations.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Footer />
    </>
  );
}

export default App;
