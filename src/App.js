import "./App.css";
import Header from "./components/header";
import Characters from "./components/Characters";
import { useState } from "react";

function App() {
  // const [text, setText] = useState("");

  return (
    <div className="App">
      <Header />
      <Characters />
    </div>
  );
}

export default App;
