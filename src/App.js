import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="subApp">
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;
