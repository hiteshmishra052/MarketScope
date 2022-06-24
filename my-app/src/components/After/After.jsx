import React from "react";
import "./After.css";

const After = ({setLoginUser}) => {
  return (
    <>
      <h1>After login Page</h1>
      <button className="button" onClick={() =>setLoginUser({})}>LogOut</button>
    </>
  );
};

export default After;