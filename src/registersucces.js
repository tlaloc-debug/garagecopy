import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import "./myregister.css";

function MyRegisterSucces(){
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"registerpanel"}>
                <h2>You have succesfuly created an account </h2>
                <div><Link to="/loginmenu">Log In</Link></div>
            </div>
        </div>
    )
}

export default MyRegisterSucces;