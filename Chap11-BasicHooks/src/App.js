import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./auth-context";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const login = () => {
    setAuthStatus(true);
  };
  return (
    <AuthContext.Provider value={{ status: authStatus, login: login }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="todos" element={<Todo />} />
              <Route path="auth" element={<Auth />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
