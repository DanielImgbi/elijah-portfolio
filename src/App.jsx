import Home from "./components/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <main className="w-screen h-screen bg-no-repeat bg-cover bg-[url('/writing_bg7.jpg')] overflow-x-hidden">
      <Header/>
      <Home />
    </main>
  );

}

export default App;
