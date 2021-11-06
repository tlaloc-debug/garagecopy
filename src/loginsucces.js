import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import "./myregister.css";

function MyLoginSucces(props){

    const initialsesionsave = JSON.parse(localStorage.getItem("savesesion")) || [""];
    const [appointments, setappointments] = useState([]);
    const [isLogout, setisLogout] = useState(false);
    const [star, setstar] = useState([false,false,false, false, false, 0]);
    const [newReviewDate, setnewReviewDate] = useState("");
    const [newReviewTime, setnewReviewTime] = useState("");
    const [myReview, setmyReview] = useState("");
    const [showInputReview, setshowInputReview] = useState(false)

    const fillStars = (starnumber) => {
        if (starnumber==="one") setstar([true,false,false, false, false, 1]);
        if (starnumber==="two") setstar([true,true,false, false, false, 2]);
        if (starnumber==="three") setstar([true,true,true, false, false, 3]);
        if (starnumber==="four") setstar([true,true,true, true, false, 4]);
        if (starnumber==="five") setstar([true,true,true, true, true, 5]);
    }

    const getAllAppointments = () => {
        axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/userappointmentsfixcar").then((response1)=> {
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

    const updateReview = () => {
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/updatereview", {
            appname: initialsesionsave.usersave,    
            appdate: newReviewDate,
            apptime: newReviewTime,
            appstar: star[5],
            apptext: myReview
        }).then((response3)=>{
            console.log(response3.data);
            
        }) 
    }

    const sendReview = () => {
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/sendreview", {
            appname: initialsesionsave.usersave,    
            appstar: star[5],
            apptext: myReview
        }).then((response3)=>{
            console.log(response3.data);
            
        }) 
    }

    const setUpdateDate = (myindex) => {
        setshowInputReview(true);
        setnewReviewDate(appointments[myindex].appdate);
        setnewReviewTime(appointments[myindex].apptime);
    }

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"registerpanel"}>
                <div>
                   
                    <h4>My Appointsments</h4>
                    <hr />
                    <table style={{width: "100%"}}>
                        <tr>
                            <th id={"myappointments"}>location</th>
                            <th id={"myappointments"}>date</th>
                            <th id={"myappointments"}>time</th>
                            <th id={"myappointments"}>stars</th>
                            <th>review</th>
                        </tr>
                        
                        {appointments.map((apps, index)=>{
                            return (
                                
                                <tr>
                                    <td>{apps.applocation}</td>
                                    <td>{apps.appdate ? apps.appdate.slice(0,apps.appdate.search("T")) : ""}</td>
                                    <td>{apps.apptime}</td>
                                    <td>{apps.stars ? apps.stars : ""}</td>
                                    <td id={index} onClick={(ev) => setUpdateDate(ev.target.id)}>{apps.reviews ? apps.reviews : "Agregar review"}</td>
                                </tr>
                                
                            )
                        })}
                     </table>
                     <div className={showInputReview ? "showreviewinput" : "hidereviewinput"}>
                         <div style={{display: "flex", justifyContent: "center"}}>
                            <div id={"one"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[0] ? "★" : "☆"}</div>
                            <div id={"two"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[1] ? "★" : "☆"}</div>
                            <div id={"three"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[2] ? "★" : "☆"}</div>
                            <div id={"four"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[3] ? "★" : "☆"}</div>
                            <div id={"five"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[4] ? "★" : "☆"}</div>
                         </div>
                         <div>
                            <textarea name="" id="" cols="30" rows="2" onChange={(ev)=>{setmyReview(ev.target.value)}}></textarea>
                         </div>
                         <div>
                            <button onClick={updateReview}>Enviar</button>
                         </div>
                     </div>
                     <br />
                     <div>Make new appointment</div>
                     <br />

                     <h4>My Reviews</h4>
                     <hr />
                     <div>leave review wihout appointment</div>
                     <div style={{display: "flex", justifyContent: "center"}}>
                         <div style={{display: "flex", justifyContent: "center"}}>
                            <div id={"one"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[0] ? "★" : "☆"}</div>
                            <div id={"two"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[1] ? "★" : "☆"}</div>
                            <div id={"three"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[2] ? "★" : "☆"}</div>
                            <div id={"four"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[3] ? "★" : "☆"}</div>
                            <div id={"five"} style={{fontSize: "2em", cursor: "pointer"}} onClick={(ev)=>fillStars(ev.target.id)}>{star[4] ? "★" : "☆"}</div>
                         </div>
                         <div>
                            <textarea name="" id="" cols="30" rows="2" onChange={(ev)=>{setmyReview(ev.target.value)}}></textarea>
                         </div>
                         <div>
                            <button onClick={sendReview}>Enviar</button>
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