import React, {useState} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import "./myregister.css";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Container, Row, Col } from 'react-bootstrap';

function MyRegister(props) {

    const bcrypt = require('bcryptjs');

    //variables for Register
    const [responseReg, setresponseReg] = useState([]);
    const [isRegister, setisRegister] = useState(false);

    const [name, setname] = useState ("");
    const [vehicle, setvehicle] = useState ("");
    const [email, setemail] = useState ("");
    const [phone, setphone] = useState ("");
    const [userNameReg, setuserNameReg] = useState ("");
    const [passRegOne, setpassRegOne] = useState ("");
    const [passRegTwo, setpassRegTwo] = useState ("");
    const [accountLanguage, setaccountLanguage] = useState("");
    const [message, setmessage] = useState("");
    const [emptyFields, setemptyFields] = useState("");
    const [matchPass, setmatchPass] = useState("");
    
    const register= () => {
        if (name === "" || email === "" || phone === "" || userNameReg === "" || passRegOne === "" || passRegTwo === "" || accountLanguage === "") {
            if (props.sendlanguage === "en") {
                setemptyFields("Please fill all mandatory fields.");
                setmatchPass("");
                setmessage("");
            }
            if (props.sendlanguage === "fr") {
                setemptyFields("Veuillez remplir tous les champs obligatoires.");
                setmatchPass("");
                setmessage("");
            }
            if (props.sendlanguage === "sp") {
                setemptyFields("Por favor, complete todos los campos obligatorios.");
                setmatchPass("");
                setmessage("");
            }  
        } else {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
                if (userNameReg.indexOf(' ') >= 0 ) document.getElementById("userinput").style.color="red";
                if (!re.test(email)) document.getElementById("emailinput").style.color="red";
                if (format.test(name)) document.getElementById("nameinput").style.color="red";
                if (format.test(userNameReg)) document.getElementById("userinput").style.color="red";
                if (re.test(email) && !format.test(name) && !format.test(userNameReg) && !(userNameReg.indexOf(' ') >= 0)){
                    if (passRegOne === passRegTwo) {
                        bcrypt.hash(passRegOne, 10, function(err, hash) {
                        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/register", {username: userNameReg, password: hash, myname: name, myvehicule: vehicle, myemail: email, myphone: phone, mylanguage: accountLanguage}).then((response)=>{
                            setresponseReg(response.data);
                            console.log(response.data)
                            if (response.data.command === "INSERT") {
                                setisRegister(true);
                            } else {
                                if (response.data.name === "error") {
                                    if (response.data.code === "23505") {
                                        if (props.sendlanguage === "en") {
                                            setmessage("This user already exists.");
                                            setemptyFields("");
                                            setmatchPass("");
                                        }
                                        if (props.sendlanguage === "fr") {
                                            setmessage("Cet utilisateur existe déjà.");
                                            setemptyFields("");
                                            setmatchPass("");
                                        }
                                        if (props.sendlanguage === "sp") {
                                            setmessage("Este usuario ya existe.");
                                            setemptyFields("");
                                            setmatchPass("");
                                        }    
                                    }
                                } else {
                                    if (props.sendlanguage === "en") {
                                        setmessage("Something went wrong. Try again later.");
                                        setemptyFields("");
                                        setmatchPass("");
                                    }
                                    if (props.sendlanguage === "fr") {
                                        setmessage("Quelque chose s'est mal passé. Réessayez plus tard.");
                                        setemptyFields("");
                                        setmatchPass("");
                                    }
                                    if (props.sendlanguage === "sp") {
                                        setmessage("Algo salió mal. Inténtelo de nuevo más tarde.");
                                        setemptyFields("");
                                        setmatchPass("");
                                    }    
                                }
                            }
                        });
                        
                    })
                } else {
                    if (props.sendlanguage === "en") {
                        setmatchPass("Passwords must match.");
                        setmessage ("");
                        setemptyFields("");
                    }
                    if (props.sendlanguage === "fr") {
                        setmatchPass("Les mots de passe doivent correspondre.");
                        setmessage ("");
                        setemptyFields("");
                    }
                    if (props.sendlanguage === "sp") {
                        setmatchPass("Las contraseñas deben coincidir.");
                        setmessage ("");
                        setemptyFields("");
                    }   
                }
            } else {
                if (props.sendlanguage === "en") {
                    setmessage("Invalid name, username or email.");
                    setemptyFields("");
                    setmatchPass("");
                }
                if (props.sendlanguage === "fr") {
                    setmessage("Nom, utilisateur ou e-mail invalide.");
                    setemptyFields("");
                    setmatchPass("");
                }
                if (props.sendlanguage === "sp") {
                    setmessage("Nombre, usuario o correo electrónico no válido.");
                    setemptyFields("");
                    setmatchPass("");
                }    
            }
        }
    }

    const changeUserNAmeReg = (myusername) => {
        if (document.getElementById("userinput").style.color="red") document.getElementById("userinput").style.color="black";
        setuserNameReg(myusername);
    }

    const changeName = (myname) => {
        if (document.getElementById("nameinput").style.color="red") document.getElementById("nameinput").style.color="black";
        setname(myname);
    }

    const changeEmail = (myemail) => {
        if (document.getElementById("emailinput").style.color="red") document.getElementById("emailinput").style.color="black";
        setemail(myemail);
    }


    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"registerpanel"}>
                <div style={{width: "100%", height: "500px", display: "flex", alignItems: "center"}}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs="10" sm="6" >
                                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                    <table >
                                        <tr>
                                            <td><label htmlFor="">
                                                {props.sendlanguage === "en" ? "My name" : ""}
                                                {props.sendlanguage === "fr" ? "Mon nom" : ""}
                                                {props.sendlanguage === "sp" ? "Mi nombre" : ""}
                                                <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                                            </label></td>
                                            <td style={{padding: "5px 0px"}}><input id={"nameinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeName(ev.target.value)}}/></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="">
                                                {props.sendlanguage === "en" ? "My vehicle" : ""}
                                                {props.sendlanguage === "fr" ? "Mon véhicule" : ""}
                                                {props.sendlanguage === "sp" ? "Mi vehiculo" : ""}
                                            </label></td>
                                            <td style={{padding: "5px 0px"}}><input type="text" className={"inputtext"} onChange={(ev)=>{setvehicle(ev.target.value)}}/></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="">
                                                {props.sendlanguage === "en" ? "My Email" : ""}
                                                {props.sendlanguage === "fr" ? "Mon Email" : ""}
                                                {props.sendlanguage === "sp" ? "Mi Email" : ""}
                                                <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                                            </label></td>
                                            <td style={{padding: "5px 0px"}}><input id={"emailinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeEmail(ev.target.value)}}/></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="">
                                                {props.sendlanguage === "en" ? "My Phone" : ""}
                                                {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                                                {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                                                <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                                                </label></td>
                                            <td style={{padding: "5px 0px"}}>
                                                <PhoneInput className={"inputtext"}
                                                                    countries={["CA", "US", "MX"]}
                                                                    defaultCountry="CA"
                                                                    onChange={setphone}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="" >
                                                {props.sendlanguage === "en" ? "Username" : ""}
                                                {props.sendlanguage === "fr" ? "Utilisateur " : ""}
                                                {props.sendlanguage === "sp" ? "Usuario" : ""}
                                                <span style={emptyFields? {color: "red"} : {}}>{" *"}</span>
                                                </label></td>
                                            <td style={{padding: "5px 0px"}}><input id={"userinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeUserNAmeReg(ev.target.value)}}/></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="">
                                                {props.sendlanguage === "en" ? "Password" : ""}
                                                {props.sendlanguage === "fr" ? "Mot de passe" : ""}
                                                {props.sendlanguage === "sp" ? "Contraseña" : ""}
                                                <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                                                </label></td>
                                            <td style={{padding: "5px 0px"}}><input type="password" className={"inputtext"} onChange={(ev)=>{setpassRegOne(ev.target.value)}}/></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="">
                                                {props.sendlanguage === "en" ? "Confirm Password" : ""}
                                                {props.sendlanguage === "fr" ? "Confirmez le mot de passe" : ""}
                                                {props.sendlanguage === "sp" ? "Confirmar Contraseña" : ""}
                                                <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                                                </label></td>
                                            <td style={{padding: "5px 0px"}}><input type="password" className={"inputtext"} onChange={(ev)=>{setpassRegTwo(ev.target.value)}}/></td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="">
                                                {props.sendlanguage === "en" ? "Language" : ""}
                                                {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                                                {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                                                <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                                                </label></td>
                                            <td style={{padding: "5px 0px"}}>
                                            <div style={{display: "flex", justifyContent: "center"}}>     
                                                <div style={{padding: "0px 10px"}}><input type="radio" name="accountlanguage" id="en" onClick={(ev) => setaccountLanguage(ev.target.id)} />English</div>
                                                <div style={{padding: "0px 10px"}}><input type="radio" name="accountlanguage" id="fr" onClick={(ev) => setaccountLanguage(ev.target.id)}/>Français</div>
                                                <div style={{padding: "0px 10px"}}><input type="radio" name="accountlanguage" id="sp" onClick={(ev) => setaccountLanguage(ev.target.id)}/>Español</div>
                                            </div>
                                            </td>
                                        </tr>
                                        
                                    </table>
                                </div>

                                <div style={{width: "100%", display: "flex", justifyContent: "center", padding: "20px 0px"}}>
                                    <button onClick={register} class={"login-button"}>Register</button><br/><br/>
                                </div>
                                

                                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                    {message}
                                    {emptyFields}
                                    {matchPass}
                                </div>
                            
                                {isRegister ? <Redirect to="registersuccesmenu"/> : ""}

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

export default MyRegister;