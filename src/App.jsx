import About from "./components/About";
import Home from "./components/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <main className="max-w-screen flex flex-col h-fit">
      <Header/>
      <Home />
      <About />
    </main>
  );

}

export default App;
