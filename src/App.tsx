import React from "react";
import "./App.css";
import MiniCodeComplexIntput from "./components/MiniCodeComplexIntput";
import MiniCodeInput from "./components/MiniCodeInput";
import MiniCodeStateCallback from "./components/MiniCodeStateCallback";
import MiniCodeUseEffectMount from "./components/MiniCodeUseEffectMount";
import MiniCodeUseEffectUnMount from "./components/MiniCodeUseEffectUnMount";

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>Ejemplos de useState</h2>
      <MiniCodeStateCallback />
      <hr />
      <hr />
      <hr />
      <hr />

      <MiniCodeComplexIntput />
      <hr />
      <hr />
      <hr />
      <hr />

      <MiniCodeInput />
      <h2>Ejemplos de useEffect</h2>

      <MiniCodeUseEffectMount />
      <hr />
      <hr />
      <hr />
      <hr />
      <MiniCodeUseEffectUnMount />



    </div>
  );
};

export default App;
