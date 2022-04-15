import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../auth-context";

export default function Header(props) {
  const auth = useContext(AuthContext);
  return (
    <header>
      {auth.status && (
        <Link to="/todos">
          <button>Todo List</button>
        </Link>
      )}

      <Link to="/auth">
        <button>Auth</button>
      </Link>
      <hr />
      <Outlet />
    </header>
  );
}
