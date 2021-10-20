import React, {useState} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import "./myregister.css";

function MyLogin(props){

    const bcrypt = require('bcryptjs');

    const [userName, setuserName] = useState ("");
    const [pass, setPass] = useState ("");
    const [responseLog, setresponseLog] = useState("");
    const [isLogin, setisLogin] = useState(false);

    const login = () => {
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/loginname", {username: userName}).then((response1)=> {
            if (response1.data=="done"){
                axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/login").then((response2)=>{
                    console.log(response2)
                    if (response2.data.length>0){
                        
                        let hash=response2.data[0].password;
                        bcrypt.compare(pass, hash, function(err, res) {
                        if (res==true) {
                            props.handleSetSesion(true)
                            localStorage.setItem("savesesion", JSON.stringify({sesionOn: true, usersave: userName}));
                            setisLogin(true);
                        }
                        })
                    }
                })
            }
        })
    }

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"registerpanel"}>
                <table >
                    <tr>
                        <td><label htmlFor="">
                            {props.sendlanguage === "en" ? "Username" : ""}
                            {props.sendlanguage === "fr" ? "Mon nom" : ""}
                            {props.sendlanguage === "sp" ? "Mi nombre" : ""}
                        </label></td>
                        <td><input type="text" className={"inputtext"} onChange={(ev)=>{setuserName(ev.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">
                            {props.sendlanguage === "en" ? "Password" : ""}
                            {props.sendlanguage === "fr" ? "Mon véhicule" : ""}
                            {props.sendlanguage === "sp" ? "Mi vehiculo" : ""}
                        </label></td>
                        <td><input type="password" className={"inputtext"} onChange={(ev)=>{setPass(ev.target.value)}}/></td>
                    </tr>
                    
                </table>

                <button onClick={login}>Login</button><br/><br/>
                {isLogin ? <Redirect to="loginsuccesmenu"/> : ""}
            </div>
        </div>
    )
}

export default MyLogin;