import React, {useState} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import "./myregister.css";
import { Container, Row, Col } from 'react-bootstrap';

function MyLogin(props){

    const bcrypt = require('bcryptjs');

    const [userName, setuserName] = useState ("");
    const [pass, setPass] = useState ("");
    const [responseLog, setresponseLog] = useState("");
    const [isLogin, setisLogin] = useState(false);
    const [message, setmessage] = useState("");

    const login = () => {
        const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
        if (format.test(userName)) {
            document.getElementById("nameinput").style.color="red";
            } else {
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
                            } else {
                                setmessage("Wrong password")
                            }
                            })
                        } else {
                            setmessage("NO register")
                        }
                    })
                }
            })
        }
    }

    const changeUSerName = (myname) => {
        if (document.getElementById("nameinput").style.color="red") document.getElementById("nameinput").style.color="black";
        setuserName(myname);
    } 

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"registerpanel"} style={{height: "420px"}}>
                <Container>
                    <Row xs="1" sm="2" className="justify-content-center" >
                        <Col   className="justify-content-center">
                            
                            <table >
                                <tr>
                                    <td><label htmlFor="">
                                        {props.sendlanguage === "en" ? "Username" : ""}
                                        {props.sendlanguage === "fr" ? "Mon nom" : ""}
                                        {props.sendlanguage === "sp" ? "Mi nombre" : ""}
                                    </label></td>
                                    <td><input id={"nameinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeUSerName(ev.target.value)}}/></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="">
                                        {props.sendlanguage === "en" ? "Password" : ""}
                                        {props.sendlanguage === "fr" ? "Mot de Passe" : ""}
                                        {props.sendlanguage === "sp" ? "Contraseña " : ""}
                                    </label></td>
                                    <td><input type="password" className={"inputtext"} onChange={(ev)=>{setPass(ev.target.value)}}/></td>
                                </tr>
                                
                            </table>

                            <button onClick={login}>Login</button><br/><br/>
                            {isLogin ? <Redirect to="loginsuccesmenu"/> : ""}
                            {message}
                           
                        </Col>

                        <Col  >
                       
                        </Col>
                    </Row>
                        
                </Container>
            </div>
        </div>
    )
}

export default MyLogin;