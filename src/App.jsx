import Home from "./components/Home";

function App() {
  return (
    <main className="w-screen h-screen bg-no-repeat bg-cover bg-[url('/writing_bg7.jpg')]">
      <div className="w-full h-[10vh] bg-[rgba(0,0,0,0.75)] text-3xl flex items-center justify-center text-white">Nav</div>
      <Home />
    </main>
  );
}

export default App;
