import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <main className="max-w-screen h-fit">
      <nav className="w-full h-[10vh] bg-[rgba(0,0,0,0.75)]"></nav>
      <Home />
      <About />
    </main>
  );
}

export default App;
