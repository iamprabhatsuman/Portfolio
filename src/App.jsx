import "./App.css";
import { ThemeProvider } from "./Store/ThemeContext";
import Hero from "./Componetns/Hero/Hero";
import Projects from "./Componetns/Projects/Projects";
import Skills from "./Componetns/Skills/Skills";
import Contact from "./Componetns/Contact/Contact";
import Footer from "./Componetns/Footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
