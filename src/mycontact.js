import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./mycontact.css";
import axios from "axios";
import Emailanimation from "./email-animation.js";

function Contact(props){

    const [emailNameForm, setemailNameForm] = useState("");
    const [emailAccountForm, setemailAccountForm] = useState("");
    const [emailMessageForm, setemailMessageForm] = useState("");

    const sendEmail = () => {
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/send-email", {emailName: emailNameForm, emailAccount: emailAccountForm, emailMessage: emailMessageForm}).then((response) => {console.log(response)})
        }
    
    const changeEmailName = (myEmail) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log( re.test(myEmail))
    }

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"contactpanel"}>
                <div style={{width: "100%", textAlign: "center", margin: "20px 0px"}}>
                    <h2>
                        {props.sendlanguage === "en" ? "Contact me" : ""}
                        {props.sendlanguage === "fr" ? "Contactez moi" : ""}
                        {props.sendlanguage === "sp" ? "Contactame" : ""}
                    </h2>
                </div>
                <Container  >
                    <Row xs="1" sm="2" className={"row justify-content-center"}>
                        <Col xs="8" sm="4" > 
                            <div id={"mycontactinput"}>
                                <input type="text" placeholder={props.sendlanguage === "en" ? "name" : props.sendlanguage === "fr" ? "nom" : props.sendlanguage === "sp" ? "nombre" : ""} onChange={(ev)=>{changeEmailName(ev.target.value)}} /><br /><br />
                                <input type="text" placeholder="email" onChange={(ev)=>{setemailAccountForm(ev.target.value)}}/><br /><br />
                                <textarea name="" id="" rows="8" placeholder={props.sendlanguage === "en" ? "message" : props.sendlanguage === "fr" ? "message" : props.sendlanguage === "sp" ? "mensaje" : ""} onChange={(ev)=>{setemailMessageForm(ev.target.value)}} ></textarea><br /><br />
                                <div style={{width: "100%", display: "flex", justifyContent:"center", marginBottom: "50px"}}>
                                    <button onClick={sendEmail} style={{width: "100px"}}>
                                        {props.sendlanguage === "en" ? "Send" : ""}
                                        {props.sendlanguage === "fr" ? "Envoyer" : ""}
                                        {props.sendlanguage === "sp" ? "Enviar" : ""}
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col xs="10" sm="4" > 
                            <div style={{width: "300px"}}>
                                <Emailanimation />
                            </div>
                        </Col>
                    </Row >
                </Container>
            </div>
        </div>
    )

}

export default Contact;