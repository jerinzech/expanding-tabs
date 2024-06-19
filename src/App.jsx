import "./App.css";
import { Home, AboutUs, Services, Projects } from "./components";

function App() {
  return (
    <>
      <div className="container">
        <div className="page-views">
          <div className="home-component" id="1">
            <Home />
          </div>

          <div className="aboutus-component" id="2">
            <AboutUs />
          </div>

          <div className="services-component" id="3">
            <Services />
          </div>

          <div className="projects-component" id="4">
            <Projects />
          </div>
        </div>

        <div className="nav-bar">
          <div className="home-link">
            <a href="#1">home</a>
          </div>

          <div className="aboutus-link">
            <a href="#2">aboutus</a>
          </div>

          <div className="services-link">
            <a href="#3">services</a>
          </div>

          <div className="projects-link">
            <a href="#4">projects</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
