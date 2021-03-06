import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import "./myregister.css";

function MyRegisterSucces(props){
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"registerpanel"}>
                <div style={{width: "100%", height: "420px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div >
                        <h3>
                            {props.sendlanguage === "en" ? "You have successfully created an account." : ""}
                            {props.sendlanguage === "fr" ? "Vous avez créé un compte avec succès. " : ""}
                            {props.sendlanguage === "sp" ? "Ha creado una cuenta con éxito." : ""}
                        </h3>   
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <Link to="/loginmenu" className={"login-button link-login-button"}>Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyRegisterSucces;