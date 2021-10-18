import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

function MyLoginSucces(props){

    const [appointments, setappointments] = useState([]);
    const [isLogout, setisLogout] = useState(false);

    const getAllAppointments = () => {
        axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/userappointments").then((response1)=> {
            setappointments(response1.data);
        })
    }

    useEffect(() => {
        getAllAppointments();
    }, []);

    const logout = () => {
        props.handleSetSesion(false)
        localStorage.setItem("savesesion", JSON.stringify({sesionOn: false, usersave: ""}));
        setisLogout(true);
    }

    return (
        <div>
            <div>
                {appointments.map((apps)=>{
                    return (
                        <div>
                            <div>{apps.appuser}</div>
                            <div>{apps.applocation}</div>
                            <div>{apps.appdate}</div>
                            <div>{apps.apptime}</div>
                            <div>{apps.assited}</div>
                            <div>{apps.stars}</div>
                            <div>{apps.reviews}</div>
                        </div>
                    )
                })}
            </div>
            <button onClick={logout}>Log out</button>
            {isLogout ? <Redirect to="/"/> : ""}
        </div>
    )
}

export default MyLoginSucces;