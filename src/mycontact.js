import React, {useState} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./index.css";
import axios from "axios";
import Emailanimation from "./email-animation.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact(props){

    const [emailNameForm, setemailNameForm] = useState("");
    const [emailAccountForm, setemailAccountForm] = useState("");
    const [emailMessageForm, setemailMessageForm] = useState("");

    const sendEmail = () => {
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/send-email", {emailName: emailNameForm, emailAccount: emailAccountForm, emailMessage: emailMessageForm}).then((response) => {console.log(response)})
        }

    return (
        <div>
            <div style={{width: "100%", textAlign: "center", marginTop: "50px"}}>
                <h2>
                    {props.sendlanguage === "en" ? "Contact me" : ""}
                    {props.sendlanguage === "fr" ? "Contactez moi" : ""}
                    {props.sendlanguage === "sp" ? "Contactame" : ""}
                </h2>
            </div>
            <Container style={{padding: "20px"}} >
                <Row xs="1" sm="8" className={"row justify-content-center"}>
                    <Col sm="4" > 
                        <input type="text" placeholder={props.sendlanguage === "en" ? "name" : props.sendlanguage === "fr" ? "nom" : props.sendlanguage === "sp" ? "nombre" : ""} onChange={(ev)=>{setemailNameForm(ev.target.value)}} /><br /><br />
                        <input type="text" placeholder="email" onChange={(ev)=>{setemailAccountForm(ev.target.value)}}/><br /><br />
                        <textarea name="" id="" rows="8" placeholder={props.sendlanguage === "en" ? "message" : props.sendlanguage === "fr" ? "message" : props.sendlanguage === "sp" ? "mensaje" : ""} onChange={(ev)=>{setemailMessageForm(ev.target.value)}} ></textarea><br /><br />
                        <div style={{width: "100%", display: "flex", justifyContent:"center"}}>
                            <button onClick={sendEmail} style={{width: "100px"}}> 
                                {props.sendlanguage === "en" ? "Send" : ""}
                                {props.sendlanguage === "fr" ? "Envoyer" : ""}
                                {props.sendlanguage === "sp" ? "Enviar" : ""}
                            </button>
                        </div>
                    </Col>
                    <Col sm="4" > 
                        <div style={{width: "300px"}}>
                            <Emailanimation />
                        </div>
                    </Col>
                </Row >
            </Container>
        </div>
    )

}

export default Contact;