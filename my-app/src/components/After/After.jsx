import React, { useState } from "react";
import Login from "../login/Login"
import "./After.css";

const After = ({setLoginUser}) => {
  // const username = Login.user.name
  const [user] = useState({})
  console.log(user.name);
  return (
    <>
      <h1>After login Page</h1>
      
      {/* <h1>{username}</h1> */}
      <button className="button" onClick={() =>setLoginUser({})}>LogOut</button>
    </>
  );
};

export default After;