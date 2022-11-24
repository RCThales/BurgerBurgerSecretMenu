import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Secret from "./assets/imgs/secretmenu.png";
import "./App.css";
import Menu from "./components/menu/menu.component";

function App() {

  return (
    <div className="App">
      <>
        <h1>BURGER BURGER</h1>

        <img width="70%" src={Secret} alt="Secret Menu" />

        <Menu></Menu>
      </>
    </div>
  );
}

export default App;
