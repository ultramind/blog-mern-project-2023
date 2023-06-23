import { useState } from "react";
import "./App.css";
import HomePage from "./pages/home/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-opensans">
      <HomePage />
    </div>
  );
}

export default App;
