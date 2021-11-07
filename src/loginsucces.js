import React, {useState, useEffect} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import "./myregister.css";

function MyLoginSucces(props){

    const initialsesionsave = JSON.parse(localStorage.getItem("savesesion")) || [""];
    const [myUser, setmyUser] = useState(initialsesionsave.usersave || "");
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
        setshowInputReview(!showInputReview);
        setnewReviewDate(appointments[myindex].appdate);
        setnewReviewTime(appointments[myindex].apptime);
    }

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"registerpanel login-success-container"}>
                <div style={{width: "90%"}}>

                    <div style={{display: "flex", justifyContent: "space-between", padding: "20px 0px"}}>
                        <div style={{fontSize: "1.2em"}}> Hi, {myUser} </div>
                        <div>
                            <button onClick={logout} className={"logout-button"}>Log out</button>
                        </div>

                    </div>

                    <div style={{margin: "50px 0px"}}>
                        <h4 >My Appointsments</h4>
                        <hr />
                        <table >
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
                                        <td id={index} onClick={(ev) => setUpdateDate(ev.target.id)} style={{cursor: "pointer"}}>{apps.reviews ? apps.reviews : "Add review"}</td>
                                    </tr>
                                    
                                )
                            })}
                        </table>
                        <div className={showInputReview ? "showreviewinput" : "hidereviewinput"}>
                            <div >
                                <div id={"one"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[0] ? "★" : "☆"}</div>
                                <div id={"two"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[1] ? "★" : "☆"}</div>
                                <div id={"three"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[2] ? "★" : "☆"}</div>
                                <div id={"four"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[3] ? "★" : "☆"}</div>
                                <div id={"five"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[4] ? "★" : "☆"}</div>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="2" onChange={(ev)=>{setmyReview(ev.target.value)}}></textarea>
                            </div>
                            <div>
                                <button onClick={updateReview} className={"login-button link-login-button"}>Send Review</button>
                            </div>
                        </div>
                        <br />
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Link to="appointmentmenu" className={"login-button link-login-button"}>Make new appointment</Link>
                        </div>
                    </div>

                    <div style={{marginBottom: "150px"}}>
                        <h4 >My Reviews</h4>
                        <hr />
                        <div>Leave review wihout appointment</div>
                        <div >
                            <div >
                                <div id={"one"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[0] ? "★" : "☆"}</div>
                                <div id={"two"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[1] ? "★" : "☆"}</div>
                                <div id={"three"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[2] ? "★" : "☆"}</div>
                                <div id={"four"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[3] ? "★" : "☆"}</div>
                                <div id={"five"} className={"div-stars"} onClick={(ev)=>fillStars(ev.target.id)}>{star[4] ? "★" : "☆"}</div>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="2" onChange={(ev)=>{setmyReview(ev.target.value)}}></textarea>
                            </div>
                            <div>
                                <button onClick={sendReview} className={"login-button link-login-button"}>Send Review</button>
                            </div>
                        </div>
                    </div>
                    
                
                    {isLogout ? <Redirect to="/"/> : ""}  

                </div>
            </div>
        </div>
    )
}

export default MyLoginSucces;