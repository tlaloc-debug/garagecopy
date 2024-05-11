import React, {useState} from "react";
import Calendar from 'react-calendar';
import "./appointment.css";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

function Appointment(props) {

    const initialsesionapp = JSON.parse(localStorage.getItem("savesesion")) || [""];
    const [isBookSucces, setisBookSucces] = useState(false);

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
    const [message, setmessage] = useState("");

    const selecttime = (timechose) => {
        times.map((Times, index)=>{
            document.getElementById(index).className="buttontime buttontimenot";
        })
       document.getElementById(timechose).className="buttontime buttontimeselected";
       settimeselected(times[timechose]);
    }

    const BOOKappointment = () => {
        if (location === "" || dateState === "" || timeselected === "" || name === "" || email === "" || phone === "") {
            if (props.sendlanguage === "en") setmessage("Please fill in all the required fields.")
            if (props.sendlanguage === "fr") setmessage("Veuillez remplir tous les champs obligatoires.")
            if (props.sendlanguage === "sp") setmessage("Por favor, rellene todos los campos obligatorios.")
            
        } else {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
            if (!re.test(email)) document.getElementById("emailinput").style.color="red";
            if (format.test(name)) document.getElementById("nameinput").style.color="red";
            if (re.test(email) && !format.test(name)){
                axios.post("https://all-in-one-proxy-3187fcbdcf4f.herokuapp.com/https://connectto-cdf4284ddfed.herokuapp.com/bookappointment", {
                    appointmentdate: dateState,
                    appointmenttime: timeselected,
                    appointmentlocation: location,
                    appointmentname: name,
                    appointmentemail: email,
                    appointmentphone: phone
                }).then((response3)=>{
                    console.log(response3.data);
                    if (response3.data.command === "INSERT") {
                        setisBookSucces(true);
                    }
                }) 
            }
        }
    }

    const changeName = (myname) => {
        if (document.getElementById("nameinput").style.color="red") document.getElementById("nameinput").style.color="black";
        setname(myname);
    }

    const changeEmail = (myemail) => {
        if (document.getElementById("emailinput").style.color="red") document.getElementById("emailinput").style.color="black";
        setemail(myemail);
    }

    const BOOKappointmentlogin = () => {
        axios.post("https://all-in-one-proxy-3187fcbdcf4f.herokuapp.com/https://connectto-cdf4284ddfed.herokuapp.com/bookappointmentlogin", {
            appointmentdate: dateState,
            appointmenttime: timeselected,
            appointmentlocation: location,
            appname: initialsesionapp.usersave
        }).then((response3)=>{
            console.log(response3.data);
            if (response3.data.command === "INSERT") {
                setisBookSucces(true);
            }
        }) 
    }

    const selectdate = (e) => {
        
            setDateState(e);
            axios.post("https://all-in-one-proxy-3187fcbdcf4f.herokuapp.com/https://connectto-cdf4284ddfed.herokuapp.com/searchdate", {
                searchdate: e,
            }).then((response1)=>{console.log(response1)
            if (response1.data=="done"){
                axios.get("https://all-in-one-proxy-3187fcbdcf4f.herokuapp.com/https://connectto-cdf4284ddfed.herokuapp.com/resultdate").then((response2)=>{
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
                            <span style={message ? {color: "red"} : {}}>{" *"}</span>
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
                    <Row  className={"row justify-content-center"}>

                        <Col xs="10" sm="4" > 
                            <div>
                                {props.sendlanguage === "en" ? "Select A Date:" : ""}
                                {props.sendlanguage === "fr" ? "Sélectionnez Une Date:" : ""}
                                {props.sendlanguage === "sp" ? "Seleccione Una Fecha:" : ""}
                                <span style={message ? {color: "red"} : {}}>{" *"}</span>
                                </div><br />
                            <Calendar onChange={(e)=>{selectdate(e, resp => {console.log(resp)})}} value={dateState} />
                        </Col>

                        <Col xs="10" sm="2" > 
                            <div className={"appointmenttime"}>
                                <div>
                                    {props.sendlanguage === "en" ? "Select A Time:" : ""}
                                    {props.sendlanguage === "fr" ? "Sélectionnez Une Heure:" : ""}
                                    {props.sendlanguage === "sp" ? "Seleccione Una Hora:" : ""}
                                    <span style={message ? {color: "red"} : {}}>{" *"}</span>
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
                                            <span style={message ? {color: "red"} : {}}>{" *"}</span>
                                        </label></td>
                                        <td><input id={"nameinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeName(ev.target.value)}}/></td>
                                    </tr>
                                    <tr style={initialsesionapp.sesionOn ? {display: "none"} : {}}>
                                        <td><label htmlFor="">
                                            {props.sendlanguage === "en" ? "My vehicle" : ""}
                                            {props.sendlanguage === "fr" ? "Mon véhicule" : ""}
                                            {props.sendlanguage === "sp" ? "Mi vehiculo" : ""}
                                        </label></td>
                                        <td><input type="text" className={"inputtext"} onChange={(ev)=>{changeEmail(ev.target.value)}}/></td>
                                    </tr>
                                    <tr style={initialsesionapp.sesionOn ? {display: "none"} : {}}>
                                        <td><label htmlFor="">
                                            {props.sendlanguage === "en" ? "My Email" : ""}
                                            {props.sendlanguage === "fr" ? "Mon Email" : ""}
                                            {props.sendlanguage === "sp" ? "Mi Email" : ""}
                                            <span style={message ? {color: "red"} : {}}>{" *"}</span>
                                        </label></td>
                                        <td><input id={"emailinput"} type="text" className={"inputtext"} onChange={(ev)=>{changeEmail(ev.target.value)}}/></td>
                                    </tr>
                                    <tr style={initialsesionapp.sesionOn ? {display: "none"} : {}}>
                                        <td><label htmlFor="">
                                            {props.sendlanguage === "en" ? "My Phone" : ""}
                                            {props.sendlanguage === "fr" ? "Mon Téléphone" : ""}
                                            {props.sendlanguage === "sp" ? "Mi Teléfono" : ""}
                                            <span style={message ? {color: "red"} : {}}>{" *"}</span>
                                            </label></td>
                                        <td><PhoneInput className={"inputtext"}
                                                countries={["CA", "US", "MX"]}
                                                defaultCountry="CA"
                                                onChange={setphone}/>
                                        </td>
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
                
                <div style={{width: "100%", height: "50px", textAlign: "center", marginTop: "30px"}}>{message}</div>
                <div style={{width: "100%", height: "50px", textAlign: "center", marginTop: "30px"}}>{book}</div>

                {isBookSucces ? <Redirect to="appointmentsuccestext"/> : ""}

            </div>
        </div>
    )
}

export default Appointment;