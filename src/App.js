import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";

function App() {
  return (
    <div>
      <Navbar />
      <About>
        <hr />
      </About>
      <Section title="Skills" content="sdffjlsjflsjfljslfjslfjlsjfl" />
    </div>
  );
}

export default App;
