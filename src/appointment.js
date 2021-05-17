import React, {useState} from "react";
import Calendar from 'react-calendar';
import "./appointment.css";
import 'react-calendar/dist/Calendar.css';

function Appointment() {

    const [dateState, setDateState] = useState(new Date());
    const [location, setlocation] = useState("Quebec");
    let times=["9:00", "11:00", "13:00", "15:00", "17:00"];

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"appointmentpanel"}>
                <div>BOOK AN APPOINTMENT</div>
                <span>Select A Location: </span>
                <input type="radio" name="location" id="Quebec" onClick={(ev) => setlocation(ev.target.id)} defaultChecked /> Quebec
                <input type="radio" name="location" id="Halifax" onClick={(ev) => setlocation(ev.target.id)}/> Halifax
                <input type="radio" name="location" id="USA" onClick={(ev) => setlocation(ev.target.id)}/> USA
                <input type="radio" name="location" id="Mexico" onClick={(ev) => setlocation(ev.target.id)}/> Mexico
                <div className={"appointmentinput"}>
                    <div className={"appointmentcalendar"}>
                        <div>Select A Date</div><br />
                        <Calendar onChange={(e)=>{setDateState(e)}} value={dateState} />
                    </div>
                    <div className={"appointmenttime"}>
                        <div>Select A Time</div><br />
                        {times.map((Times)=>{
                            return (
                                <div className={"buttontime"}>{Times}</div>
                            )
                        })}
                    </div>
                    <div className={"appointmentinfo"}>
                        <div>Your Contact Info</div><br />
                        <table>
                            <tr>
                                <td><label htmlFor="">My name</label></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">My vehicle</label></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">My Email</label></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">My Phone</label></td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Appointment Reason</label></td>
                                <td><textarea name="" id="" cols="30" rows="10"></textarea></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment;