import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

function MyLoginSucces(props){

    const [appointments, setappointments] = useState([]);
    const [isLogout, setisLogout] = useState(false);
    let [star, setstar] = useState([false,false,false, false, false]);

    const fillStars = (starnumber) => {
        if (starnumber==="one") setstar([true,false,false, false, false]);
        if (starnumber==="two") setstar([true,true,false, false, false]);
        if (starnumber==="three") setstar([true,true,true, false, false]);
        if (starnumber==="four") setstar([true,true,true, true, false]);
        if (starnumber==="five") setstar([true,true,true, true, true]);
    }

    const getAllAppointments = () => {
        axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/userappointmentsfixauto").then((response1)=> {
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
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"registerpanel"}>
                <div>
                   
                    <h3>My Appointsments</h3>
                    <table>
                        <tr>
                            <th>location</th>
                            <th>date</th>
                            <th>time</th>
                            <th>stars</th>
                            <th>review</th>
                        </tr>
                        
                        {appointments.map((apps)=>{
                            return (
                                
                                <tr>
                                    <td>{apps.applocation}</td>
                                    <td>{apps.appdate}</td>
                                    <td>{apps.apptime}</td>
                                    <td>{apps.stars ? apps.stars : ""}</td>
                                    <td>{apps.reviews ? apps.reviews : "Esta cita no tiene reviw. Agrgar una"}</td>
                                </tr>
                                
                            )
                        })}
                     </table>
                     <div>Make new appointment</div>
                     <div>leave review wihout appointment</div>
                     <div>
                         <div style={{display: "flex", justifyContent: "center"}}>
                            <div id={"one"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[0] ? "★" : "☆"}</div>
                            <div id={"two"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[1] ? "★" : "☆"}</div>
                            <div id={"three"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[2] ? "★" : "☆"}</div>
                            <div id={"four"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[3] ? "★" : "☆"}</div>
                            <div id={"five"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[4] ? "★" : "☆"}</div>
                         </div>
                         <div>
                            <textarea name="" id="" cols="30" rows="5"></textarea>
                         </div>
                     </div>
                </div>

                <button onClick={logout}>Log out</button>
                {isLogout ? <Redirect to="/"/> : ""}
            </div>
        </div>
    )
}

export default MyLoginSucces;