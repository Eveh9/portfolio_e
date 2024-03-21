import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Evelyn's Portfolio</h1>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
