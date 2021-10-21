import React, {useState} from "react";
import Calendar from 'react-calendar';
import "./appointment.css";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dayjs from 'dayjs';

function Appointment(props) {

    const initialsesionapp = JSON.parse(localStorage.getItem("savesesion")) || [""];

    const [dateState, setDateState] = useState(new Date());
    const [location, setlocation] = useState("");
    const [times, settimes] = useState ([])
    const [timeselected, settimeselected] = useState ("");
    const [book, setbook] = useState ("");
    const [name, setname] = useState ("");
    const [vehicle, setvehicle] = useState ("");
    const [email, setemail] = useState ("");
    const [phone, setphone] = useState ("");
    const [reason, setreason] = useState ("");
    let newarray=["9:00", "11:00", "13:00", "15:00"];

    const selecttime = (timechose) => {
        times.map((Times, index)=>{
            document.getElementById(index).className="buttontime buttontimenot";
        })
       document.getElementById(timechose).className="buttontime buttontimeselected";
       settimeselected(times[timechose]);
    }

    const BOOKappointment = () => {
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/bookappointment", {
            appointmentdate: dateState,
            appointmenttime: timeselected,
            appointmentlocation: location,
            appointmentname: name,
            appointmentemail: email,
            appointmentphone: phone
        }).then((response3)=>{
            console.log(response3.data);
            if (response3.data.command) setbook("YOu have succesfully book an appointment");
        }) 
    }

    const BOOKappointmentlogin = () => {
        axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/bookappointmentlogin", {
            appointmentdate: dateState,
            appointmenttime: timeselected,
            appointmentlocation: location,
            appname: initialsesionapp.usersave
        }).then((response3)=>{
            console.log(response3.data);
            if (response3.data.command) setbook("YOu have succesfully book an appointment");
        }) 
    }

    const selectdate = (e) => {
        
            setDateState(e);
            axios.post("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/searchdate", {
                searchdate: e,
            }).then((response1)=>{console.log(response1)
            if (response1.data=="done"){
                axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/resultdate").then((response2)=>{
                        response2.data.map((horas)=>{
                            if(horas.time==="9:00") {newarray[0]=""}
                            if(horas.time==="11:00") {newarray[1]=""}
                            if(horas.time==="13:00") {newarray[2]=""}
                            if(horas.time==="15:00") {newarray[3]=""}
                        })
                        settimes(newarray);
                    })
            }
        })    
    }

    return (

        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"appointmentpanel"}>

                <div className={"appointment-radio"}>
                    <div>
                        <div style={{padding: "0px 30px"}}>
                            {props.sendlanguage === "en" ? "Select A Location:" : ""}
                            {props.sendlanguage === "fr" ? "Sélectionnez Un Emplacement:" : ""}
                            {props.sendlanguage === "sp" ? "Selecciona Una Ubicación:" : ""}
                        </div>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>     
                        <div style={{padding: "0px 10px"}}><input type="radio" name="location" id="Quebec" onClick={(ev) => setlocation(ev.target.id)} /> Quebec</div>
                        <div style={{padding: "0px 10px"}}><input type="radio" name="location" id="Halifax" onClick={(ev) => setlocation(ev.target.id)}/> Halifax</div>
                        <div style={{padding: "0px 10px"}}><input type="radio" name="location" id="USA" onClick={(ev) => setlocation(ev.target.id)}/> USA</div>
                        <div style={{padding: "0px 10px"}}><input type="radio" name="location" id="Mexico" onClick={(ev) => setlocation(ev.target.id)}/> Mexico</div>   
                    </div>
                </div>
                <br />

                <Container  >
                    <Row xs="1" sm="3" className={"row justify-content-center"}>

                        <Col xs="10" sm="4" > 
                            <div>
                                {props.sendlanguage === "en" ? "Select A Date:" : ""}
                                {props.sendlanguage === "fr" ? "Sélectionnez Une Date:" : ""}
                                {props.sendlanguage === "sp" ? "Seleccione Una Fecha:" : ""}
                                </div><br />
                            <Calendar onChange={(e)=>{selectdate(e, resp => {console.log(resp)})}} value={dateState} />
                        </Col>

                        <Col xs="10" sm="2" > 
                            <div className={"appointmenttime"}>
                                <div>
                                    {props.sendlanguage === "en" ? "Select A Time:" : ""}
                                    {props.sendlanguage === "fr" ? "Sélectionnez Une Heure:" : ""}
                                    {props.sendlanguage === "sp" ? "Seleccione Una Hora:" : ""}
                                    </div><br />
                                {times.map((Times, index)=>{
                                    return (
                                        <div id={index} className={"buttontime buttontimenot"} onClick={(ev) => selecttime(ev.target.id)}>{Times}</div>
                                    )
                                })}
                            </div>
                        </Col>

                        <Col xs="10" sm="6" > 
                            <div >
                                <div>
                                    {props.sendlanguage === "en" ? "Your Contact Info:" : ""}
                                    {props.sendlanguage === "fr" ? "Vos Coordonnées:" : ""}
                                    {props.sendlanguage === "sp" ? "Tu información de contacto:" : ""}
                                </div><br />
                                <table style={{width: "100%"}}>
                                    <tr style={initialsesionapp.sesionOn ? {display: "none"} : {}}>
                                        <td><label htmlFor="">
                                            {props.sendlanguage === "en" ? "My name" : ""}
                                            {props.sendlanguage === "fr" ? "Mon nom" : ""}
                                            {props.sendlanguage === "sp" ? "Mi nombre" : ""}
                                        </label></td>
                                        <td><input type="text" className={"inputtext"} onChange={(ev)=>{setname(ev.target.value)}}/></td>
                                    </tr>
                                    <tr style={initialsesionapp.sesionOn ? {display: "none"} : {}}>
                                        <td><label htmlFor="">
                                            {props.sendlanguage === "en" ? "My vehicle" : ""}
                                            {props.sendlanguage === "fr" ? "Mon véhicule" : ""}
                                            {props.sendlanguage === "sp" ? "Mi vehiculo" : ""}
                                        </label></td>
                                        <td><input type="text" className={"inputtext"} onChange={(ev)=>{setvehicle(ev.target.value)}}/></td>
                                    </tr>
                                    <tr style={initialsesionapp.sesionOn ? {display: "none"} : {}}>
                                        <td><label htmlFor="">
                                            {props.sendlanguage === "en" ? "My Email" : ""}
                                            {props.sendlanguage === "fr" ? "Mon Email" : ""}
                                            {props.sendlanguage === "sp" ? "Mi Email" : ""}
                                        </label></td>
                                        <td><input type="text" className={"inputtext"} onChange={(ev)=>{setemail(ev.target.value)}}/></td>
                                    </tr>
                                    <tr style={initialsesionapp.sesionOn ? {display: "none"} : {}}>
                                        <td><label htmlFor="">
                                            {props.sendlanguage === "en" ? "My Phone" : ""}
                                            {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                                            {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                                            </label></td>
                                        <td><input type="text" className={"inputtext"} onChange={(ev)=>{setphone(ev.target.value)}}/></td>
                                    </tr>
                                    <tr>
                                        <td style={{verticalAlign: "top"}}>
                                            <label htmlFor="">
                                                {props.sendlanguage === "en" ? "Reason" : ""}
                                                {props.sendlanguage === "fr" ? "Raison" : ""}
                                                {props.sendlanguage === "sp" ? "Razón" : ""}
                                            </label></td>
                                        <td><textarea className={"inputtext"} name="" id="" cols="21" rows="5" onChange={(ev)=>{setreason(ev.target.value)}}></textarea></td>
                                    </tr>
                                </table>
                                <br />
                                <div id={"bocknow-button"} style={initialsesionapp.sesionOn ? {display: "none"} : {}}>
                                    <button  onClick={BOOKappointment}>
                                        {props.sendlanguage === "en" ? "Book Now" : ""}
                                        {props.sendlanguage === "fr" ? "Scheduler" : ""}
                                        {props.sendlanguage === "sp" ? "Agendar" : ""}
                                    </button>
                                </div>
                                <div id={"bocknow-button"} style={initialsesionapp.sesionOn ? {} : {display: "none"}}>
                                    <button  onClick={BOOKappointmentlogin}>
                                        booklogin
                                    </button>
                                </div>
                            </div>
                        </Col>

                    </Row >

                </Container >

                <div style={{width: "100%", height: "50px", textAlign: "center"}}>{book}</div>
            </div>
        </div>
    )
}

export default Appointment;