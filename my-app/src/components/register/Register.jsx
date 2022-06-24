import React, { useState } from "react";
import "./Register.css";
import axios from "axios"
import { useHistory } from "react-router-dom";

const Register= () =>{

    const history = useHistory();

    const[user, setUser] = useState({
        name: "",
        email:  "",
        position: "",
        password: "",
        reEnterPassword: ""
    })


    const handleChange = e =>{
        
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = ()=>
    {
        const {name, email,position, password, reEnterPassword}=  user
        if(name && email && password && (password === reEnterPassword))
        {
            //alert("posted");
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message)
            history.push("/login")
        })
        }
        else
        {
            alert("Invalid Input")
        }
        
    }


     return(
        <div className="register"> 
        <h1 className="Reg">Register</h1>
        <input type="text" name= "name" value={user.name} placeholder="Enter Name" onChange={handleChange}></input>
        <input type="text" name= "email" value={user.email} placeholder="Enter Email" onChange={handleChange}></input>
        <label for="pos">Select Role</label>
        <select name="position" value={user.position} onChange={handleChange} id="pos">
                <option value="Student">Team Leader</option>
                <option value="Recuiter">Recruiter</option>
                <option value="Admin">Admin</option>
                <option value="Sourcing Lead">Sourcing Lead</option>
            </select>
        <input type="password" name= "password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <input type="password" name= "reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick={()=> history.push("/login")}>Login</div>
    </div>
     )

}

export default Register;