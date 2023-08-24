import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function dmCallback(e){setDarkMode(e)}
  return (
    <DarkModeWrapper darkMode = {darkMode}>
      <Header darkMode ={darkMode} dmCallback = {dmCallback} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
