import React, {useState} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

function MyRegister(props) {

    const bcrypt = require('bcryptjs');

    //variables for Register
    const [responseReg, setresponseReg] = useState("null");
    const [isRegister, setisRegister] = useState(false);

    const [name, setname] = useState ("");
    const [vehicle, setvehicle] = useState ("");
    const [email, setemail] = useState ("");
    const [phone, setphone] = useState ("");
    const [userNameReg, setuserNameReg] = useState ("");
    const [passReg, setpassReg] = useState ("");

    const register = () => {
       
            bcrypt.hash(passReg, 10, function(err, hash) {
                axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/register", {username: userNameReg, password: hash, myname: name, myvehicule: vehicle, myemail: email, myphone: phone}).then((response)=>{
                    setresponseReg(response.data);
                    if (response.data.command) setisRegister(true);
                    });
                
            })
        }
    

    return (
        <div>
            <table >
                <tr>
                    <td><label htmlFor="">
                        {props.sendlanguage === "en" ? "My name" : ""}
                        {props.sendlanguage === "fr" ? "Mon nom" : ""}
                        {props.sendlanguage === "sp" ? "Mi nombre" : ""}
                    </label></td>
                    <td><input type="text" className={"inputtext"} onChange={(ev)=>{setname(ev.target.value)}}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">
                        {props.sendlanguage === "en" ? "My vehicle" : ""}
                        {props.sendlanguage === "fr" ? "Mon véhicule" : ""}
                        {props.sendlanguage === "sp" ? "Mi vehiculo" : ""}
                    </label></td>
                    <td><input type="text" className={"inputtext"} onChange={(ev)=>{setvehicle(ev.target.value)}}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">
                        {props.sendlanguage === "en" ? "My Email" : ""}
                        {props.sendlanguage === "fr" ? "Mon Email" : ""}
                        {props.sendlanguage === "sp" ? "Mi Email" : ""}
                    </label></td>
                    <td><input type="text" className={"inputtext"} onChange={(ev)=>{setemail(ev.target.value)}}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">
                        {props.sendlanguage === "en" ? "My Phone" : ""}
                        {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                        {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                        </label></td>
                    <td><input type="text" className={"inputtext"} onChange={(ev)=>{setphone(ev.target.value)}}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">
                        {props.sendlanguage === "en" ? "Username" : ""}
                        {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                        {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                        </label></td>
                    <td><input type="text" className={"inputtext"} onChange={(ev)=>{setuserNameReg(ev.target.value)}}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">
                        {props.sendlanguage === "en" ? "Password" : ""}
                        {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                        {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                        </label></td>
                    <td><input type="password" className={"inputtext"} onChange={(ev)=>{setpassReg(ev.target.value)}}/></td>
                </tr>
                
            </table>
        
        
        
            <button onClick={register}>Register</button><br/><br/>
                   
        {isRegister ? <Redirect to="registersuccesmenu"/> : ""}
        </div>
    )
}

export default MyRegister;