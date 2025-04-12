import logo from "./assets/logo.png";
import "./App.css";
import Blusinha from "./components/blusinha";

function App() {
  return (
    <div className="app">
      <header className="header">
        <p>uma loja de roupinhas</p>
      </header>
      <div>
        <Blusinha />
      </div>
    </div>
  );
}

export default App;