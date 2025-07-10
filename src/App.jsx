import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./components/mid";
import About from "./components/About";
import Skills from "./components/skill";
import Projects from "./components/project";
import Btn from "./components/Down";
import Foot from "./components/Footer";

function App() {
  return (
    <>
      <div className="profile">
        <Header></Header>
        <Image></Image>
      </div>
      <hr />
      <About></About>
      <hr />
      <Skills></Skills>
      <hr />
      <Projects></Projects>
      <hr />
      <Btn></Btn>
      <Foot></Foot>
    </>
  );
}

export default App;
