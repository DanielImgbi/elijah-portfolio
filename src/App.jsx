import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import DropDown from "./components/DropDown";
import { useState } from "react";
// import Header from "./components/header/Header";

function App() {
  const [toggled, setToggle] = useState(false);

  const handleNavToggle = () => {
    if (!toggled) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <main className="max-w-screen flex flex-col h-fit">
      {/* <Header/> */}
      {toggled && <DropDown handleNavToggle={handleNavToggle} />}
      <Nav toggled={toggled} handleNavToggle={handleNavToggle} />
      <Home />
      <About />
    </main>
  );
}

export default App;
