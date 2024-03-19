import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <h1>Evelyn's Portfolio</h1>

      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
