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
                                if (props.sendlanguage === "en") setmessage("We were expecting another password.")
                                if (props.sendlanguage === "fr") setmessage("Nous attendions un autre mot de passe.")
                                if (props.sendlanguage === "sp") setmessage("Esperábamos otra contraseña.")
                            }
                            })
                        } else {
                            if (props.sendlanguage === "en") setmessage("No such user.")
                            if (props.sendlanguage === "fr") setmessage("Aucune utilisateur.")
                            if (props.sendlanguage === "sp") setmessage("Este usuario no existe. ")
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
            <div className={"registerpanel"} >
                <div style={{width: "100%", height: "420px", display: "flex", alignItems: "center"}}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="10" sm="6" >
                                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                    <table >
                                        <tr >
                                            <td style={{paddingRight: "10px"}}><label htmlFor="">
                                                {props.sendlanguage === "en" ? "Username" : ""}
                                                {props.sendlanguage === "fr" ? "Mon nom" : ""}
                                                {props.sendlanguage === "sp" ? "Mi nombre" : ""}
                                            </label></td>
                                            <td style={{padding: "10px 0px"}}><input id={"nameinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeUSerName(ev.target.value)}}/></td>
                                        </tr>
                                        <tr>
                                            <td ><label htmlFor="">
                                                {props.sendlanguage === "en" ? "Password" : ""}
                                                {props.sendlanguage === "fr" ? "Mot de Passe" : ""}
                                                {props.sendlanguage === "sp" ? "Contraseña " : ""}
                                            </label></td>
                                            <td style={{padding: "10px 0px"}}><input type="password" className={"inputtext"} onChange={(ev)=>{setPass(ev.target.value)}}/></td>
                                        </tr>
                                        
                                    </table>
                                </div>

                                <div style={{width: "100%", display: "flex", justifyContent: "center", padding: "20px 0px"}}>
                                    <button onClick={login} class={"login-button"}>Login</button>
                                </div>
                                <br/><br/>
                                {isLogin ? <Redirect to="loginsuccesmenu"/> : ""}
                                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                    {message}
                                </div>
                               
                            </Col>

                            <Col xs="10" sm="6" >
                        
                            </Col>
                        </Row>
                            
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default MyLogin;