import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
// import Header from "./components/header/Header";

function App() {
  return (
    <main className="max-w-[100vw] flex flex-col h-fit">
      {/* <Header/> */}
      <Nav/>
      <Home />
      <About />
    </main>
  );

}

export default App;
