import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="subApp">
        <Navbar />
        <Home />
        <About />
        <Skills/>
      </div>
    </div>
  );
}

export default App;
