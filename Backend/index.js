import express, { urlencoded } from "express";
// import 
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const port = process.env.port || 9002;

let dbUrl = "";

if (port == 9002) {
    dbUrl = "mongodb://localhost:27017/myLoginRegisterDB";
} else {
    dbUrl = "";
}

mongoose.connect(dbUrl,{
    usenewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected");
})
 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    position: String,
    password: String

})

const User = new mongoose.model("User", userSchema)

//Routes

app.post("/login", (req, res)=> {
    const { email, password, position, name} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password && position==user.position ) {
                res.send({message: "Login Successfull!! "+ user.name + " "+ user.position, user: user})
            }else if(position !== user.position)
            {
                res.send({ message: "Position didn't match"})
            } 
            else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})

app.post("/register",(req,res)=> {
    //res.send("My API Register")
    const {name, email,position, password} = req.body;

    User.findOne({email: email}, (err, user) =>{
        if(user)
        {
            res.send({ message:"User already Registered" })
        } 
        else
        {
            const user = new User({
                name,
                email,
                position, 
                password
            })
        
            user.save(err => {
                if(err){
                    res.send(err)
                }else{
                   res.send({message: "Registration Successful"+user.name }) 
                }
            })
        }
    })

    
})

app.listen(port,() =>{
    console.log("BE started at port 9002");
})

//Port 9002