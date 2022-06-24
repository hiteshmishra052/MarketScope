import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import ReactDOM from "react-router-dom"
import { useHistory } from "react-router-dom";

const Login= ({setLoginUser}) =>{

    const history = useHistory()

    const[user, setUser] = useState({
    
        email:  "",
        password: "",
        position: ""
    })


    const handleChange = e =>{
        
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () =>
    {
        axios.post("http://localhost:9002/login", user)
        .then(res => 
            {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/after")
        })
    }

     return(
        <>
        <div className="login"> 
            
            <h1 className="Log">Log In</h1>
            <input type="text" placeholder="Enter your Email" name="email" value={user.email}  onChange={handleChange}></input>
            <input type="password" name="password" placeholder="Enter your Password" value={user.password} onChange={handleChange}></input>
            <label for="pos">Select Role</label>
            <select name="position" value={user.position} onChange={handleChange} id="pos">
                <option value="Team Leader">Team Leader</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Admin">Admin</option>
                <option value="Sourcing Lead">Sourcing Lead</option>
            </select>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={ () => history.push("/register")}>Register</div>
        </div>
        </>
     );

}

export default Login;