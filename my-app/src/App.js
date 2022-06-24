import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router ,Redirect,Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import After from "./components/After/After"

const App = () => {

  const [user, setLoginUser] = useState({})

  return (
    <>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/services" component={Services} exact/>
        <Route path="/contact"  exact><Contact/></Route> 
        <Route path="/after"  exact>
          {
            user && user._id ? <After setLoginUser={setLoginUser}/> : <Login setLoginUser= {setLoginUser}/>
          }
          
        </Route>   
        <Route path="/login" exact><Login setLoginUser= {setLoginUser}/></Route>   
        <Route path="/register" component={Register} exact/>   
        <Redirect to="/"/>     
      </Switch>
    </>
  );
};

export default App;