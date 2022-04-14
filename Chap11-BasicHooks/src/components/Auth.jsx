import React, { useContext } from "react";
import AuthContext from "../auth-context";

export default function Auth(props) {
    const auth = useContext(AuthContext);
  return (
      
    <div>
      <button onClick={auth.login}>Login in</button>
    </div>
  );
}


