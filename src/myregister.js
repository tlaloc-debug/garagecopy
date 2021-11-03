import React, {useState} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import "./myregister.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

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
            setemptyFields("Please fill all fields");
            setmatchPass("");
            setmessage("");
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
                                        setmessage("este usuario ya existe");
                                        setemptyFields("");
                                        setmatchPass("");
                                    }
                                } else {
                                    setmessage ("algo salio mal, intenta mas tarde")
                                    setemptyFields("");
                                    setmatchPass("");
                                }
                            }
                        });
                        
                    })
                } else {
                    setmatchPass("Passwords must match");
                    setmessage ("");
                    setemptyFields("");
                }
            } else {
                setmessage("invalid name, username or email");
                setemptyFields("");
                setmatchPass("");
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
                <table >
                    <tr>
                        <td><label htmlFor="">
                            {props.sendlanguage === "en" ? "My name" : ""}
                            {props.sendlanguage === "fr" ? "Mon nom" : ""}
                            {props.sendlanguage === "sp" ? "Mi nombre" : ""}
                            <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                        </label></td>
                        <td><input id={"nameinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeName(ev.target.value)}}/></td>
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
                            <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                        </label></td>
                        <td><input id={"emailinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeEmail(ev.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">
                            {props.sendlanguage === "en" ? "My Phone" : ""}
                            {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                            {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                            <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                            </label></td>
                        <td>
                            <PhoneInput className={"inputtext"}
                                                countries={["CA", "US", "MX"]}
                                                defaultCountry="CA"
                                                onChange={setphone}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="" >
                            {props.sendlanguage === "en" ? "Username" : ""}
                            {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                            {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                            <span style={emptyFields? {color: "red"} : {}}>{" *"}</span>
                            </label></td>
                        <td><input id={"userinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeUserNAmeReg(ev.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">
                            {props.sendlanguage === "en" ? "Password" : ""}
                            {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                            {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                            <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                            </label></td>
                        <td><input type="password" className={"inputtext"} onChange={(ev)=>{setpassRegOne(ev.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">
                            {props.sendlanguage === "en" ? "Confirm Password" : ""}
                            {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                            {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                            <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                            </label></td>
                        <td><input type="password" className={"inputtext"} onChange={(ev)=>{setpassRegTwo(ev.target.value)}}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">
                            {props.sendlanguage === "en" ? "Language" : ""}
                            {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                            {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                            <span style={emptyFields ? {color: "red"} : {}}>{" *"}</span>
                            </label></td>
                        <td>
                        <div style={{display: "flex", justifyContent: "center"}}>     
                            <div style={{padding: "0px 10px"}}><input type="radio" name="accountlanguage" id="en" onClick={(ev) => setaccountLanguage(ev.target.id)} />English</div>
                            <div style={{padding: "0px 10px"}}><input type="radio" name="accountlanguage" id="fr" onClick={(ev) => setaccountLanguage(ev.target.id)}/>Français</div>
                            <div style={{padding: "0px 10px"}}><input type="radio" name="accountlanguage" id="sp" onClick={(ev) => setaccountLanguage(ev.target.id)}/>Español</div>
                        </div>
                        </td>
                    </tr>
                    
                </table>
            
                <button onClick={register}>Register</button><br/><br/>
               
                <div>{message}</div>  
                {isRegister ? <Redirect to="registersuccesmenu"/> : ""}
                <div>{emptyFields}</div>
                <div>{matchPass}</div>

            </div>
        </div>
    )
}

export default MyRegister;