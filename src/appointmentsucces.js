import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import "./myregister.css";

function MyAppointmentSucces(props){
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"registerpanel"}>
                <div style={{width: "100%", height: "420px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div >
                        <h3>
                            {props.sendlanguage === "en" ? "You have successfully booked an appointment." : ""}
                            {props.sendlanguage === "fr" ? "Vous avez pris un rendez-vous avec succès." : ""}
                            {props.sendlanguage === "sp" ? "Ha reservado una cita con éxito." : ""}
                        </h3>   
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <Link to="/" className={"login-button link-login-button"}>Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAppointmentSucces;