import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";

let content = [
  {
    title: "Skills",
    content:
      "Lorem Lorem ipsum dolor sit amet,Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit  consectetur adipisicing elit Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit  Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    title: "Experience",
    content:
      "Lorem Lorem ipsum dolor sit amet, Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    title: "Education",
    content:
      "Lorem Lorem ipsum dolor sit amet, Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    title: "Projects",
    content:
      "Lorem Lorem ipsum dolor sit amet, . Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elitLorem Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <About>
        <hr />
      </About>
      {content.map((item, index) => {
        return (
          <Section key={index} title={item.title} content={item.content}>
            {index !== content.length - 1 ? <hr /> : ""}
          </Section>
        );
      })}
    </div>
  );
}

export default App;
