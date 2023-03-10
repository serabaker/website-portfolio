import "./App.css";
import Projects from "../src/components/Projects/Projects";
import Contact from "../src/components/Contact/Contact";
import Blog from "../src/components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="h1-container">
          <h1 className="h1">britny lain</h1>
        </div>

        <ul className="ui">
          <li id="#projects" className="li">
            {" "}
            <span className="span">Projects</span>
          </li>
          <li id="#blog" className="li">
            {" "}
            <span className="span">Blog</span>
          </li>
          <li id="#contact" className="li">
            {" "}
            <span className="span">Contact</span>
          </li>
        </ul>
      </nav>

      {<Projects />}
      <hr />
      <Blog />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
