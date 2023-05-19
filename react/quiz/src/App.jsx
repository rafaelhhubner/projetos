import { useContext } from "react";

import Welcome from "./components/Welcome";
import Questions from "./components/Question";

import './App.css';

function App() {
  

  return (
      <div className="App">
        <h1>Quiz de Programação:</h1>
        <Welcome />
      </div>
  )
}

export default App;
