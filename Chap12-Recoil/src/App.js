import React, { useState } from "react";

import { RecoilRoot } from "recoil";

import Async from "./components/Async";
import Header from "./components/Header";

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const login = () => {
    setAuthStatus(true);
  };
  return (
    <RecoilRoot>
      <Header />
      <hr />
      <Async />
    </RecoilRoot>
  );
}

export default App;
