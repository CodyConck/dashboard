import Nav from "./components/Nav.js";
import ImageScroller from "./components/ImageScroller.js";
import Weather from "./components/Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Weather />
      <ImageScroller />
    </div>
  );
}

export default App;
