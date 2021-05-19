import React, {useState} from "react";
import Calendar from 'react-calendar';
import "./appointment.css";
import 'react-calendar/dist/Calendar.css';

function Appointment() {

    const [dateState, setDateState] = useState(new Date());
    const [location, setlocation] = useState("");
    let times=["9:00", "11:00", "13:00", "15:00", "17:00"];
    const [timeselected, settimeselected] = useState ("");
    const [book, setbook] = useState ("");
    const [name, setname] = useState ("");
    const [vehicle, setvehicle] = useState ("");
    const [email, setemail] = useState ("");
    const [phone, setphone] = useState ("");
    const [reason, setreason] = useState ("");

    const selecttime = (timechose) => {
        times.map((Times, index)=>{
            document.getElementById(index).className="buttontime buttontimenot";
        })
       document.getElementById(timechose).className="buttontime buttontimeselected";
       settimeselected(times[timechose]);
    }

    const bookappointment = () => {
        if (location==="") {alert("You must select a location.")}
        else  if (timeselected==="") {alert("You must pick a time.")}
        else  if (name==="") {alert("You must fill your contact information.")}
        else setbook("Thank you " + name + ". You have succesfully booked an appointment on " + String(dateState).substr(0,15) + " at " + timeselected + " hrs. at " + location + ".")
    }

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"appointmentpanel"}>
                <div>BOOK AN APPOINTMENT</div>
                <div style={{display: "flex", justifyContent: "center", margin: "30px"}}>
                    <div>
                        <span style={{padding: "0px 30px"}}>Select A Location: </span>
                        <span style={{padding: "0px 10px"}}><input type="radio" name="location" id="Quebec" onClick={(ev) => setlocation(ev.target.id)} /> Quebec</span>
                        <span style={{padding: "0px 10px"}}><input type="radio" name="location" id="Halifax" onClick={(ev) => setlocation(ev.target.id)}/> Halifax</span>
                        <span style={{padding: "0px 10px"}}><input type="radio" name="location" id="USA" onClick={(ev) => setlocation(ev.target.id)}/> USA</span>
                        <span style={{padding: "0px 10px"}}><input type="radio" name="location" id="Mexico" onClick={(ev) => setlocation(ev.target.id)}/> Mexico</span>
                    </div>
                </div>
                
                <div className={"appointmentinput"}>
                    <div className={"appointmentcalendar"}>
                        <div>Select A Date</div><br />
                        <Calendar onChange={(e)=>{setDateState(e)}} value={dateState} />
                    </div>
                    <div className={"appointmenttime"}>
                        <div>Select A Time</div><br />
                        {times.map((Times, index)=>{
                            return (
                                <div id={index} className={"buttontime buttontimenot"} onClick={(ev) => selecttime(ev.target.id)}>{Times}</div>
                            )
                        })}
                    </div>
                    <div className={"appointmentinfo"}>
                        <div>Your Contact Info</div><br />
                        <table>
                            <tr>
                                <td><label htmlFor="">My name</label></td>
                                <td><input type="text" className={"inputtext"} onChange={(ev)=>{setname(ev.target.value)}}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">My vehicle</label></td>
                                <td><input type="text" className={"inputtext"} onChange={(ev)=>{setvehicle(ev.target.value)}}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">My Email</label></td>
                                <td><input type="text" className={"inputtext"} onChange={(ev)=>{setemail(ev.target.value)}}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">My Phone</label></td>
                                <td><input type="text" className={"inputtext"} onChange={(ev)=>{setphone(ev.target.value)}}/></td>
                            </tr>
                            <tr>
                                <td style={{verticalAlign: "top"}}><label htmlFor="">Reason</label></td>
                                <td><textarea name="" id="" cols="21" rows="5" onChange={(ev)=>{setreason(ev.target.value)}}></textarea></td>
                            </tr>
                        </table>
                        <br />
                        <button onClick={bookappointment}>Book Now</button>
                        
                    </div>
                </div>
                <div style={{width: "100%", height: "50px", textAlign: "center"}}>{book}</div>
            </div>
        </div>
    )
}

export default Appointment;