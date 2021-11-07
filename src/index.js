import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Facebook, Youtube, Twitter, Instagram, List, X } from 'react-bootstrap-icons';
import Home from "./home.js";
import Contact from "./mycontact.js";
import Ourshops from "./ourshops.js";
import Services from "./services.js";
import About from "./about.js";
import Appointment from "./appointment.js";
import Sales from "./sales.js";
import MyLogin from "./mylogin";
import MyRegister from "./myregister";
import MyRegisterSucces from "./registersucces";
import MyLoginSucces from "./loginsucces";
import MyAppointmentSucces from "./appointmentsucces";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {

    const initialsesionsave = JSON.parse(localStorage.getItem("savesesion")) || [""];
    const [sesionLogin, setsesionLogin] = useState(initialsesionsave.sesionOn || false);

    const [language, setlanguage] = useState("en");
    const [stylemobileMenu, setstylemobileMenu] = useState(false);

    const showMobileMenu = () => {
        setstylemobileMenu(!stylemobileMenu)
    }
    
    return (
        <Router>
        
        <div >
            <div className={"backmain"}>
                <div className={"backphoto"}>

                </div>
            </div>
               
            <div className={"align_horizontal"} id={"top"}>
                <div className={"bartopnav"}>

                </div>
                <div className={"bartopnavcontainer"}>
                    <div className={"topnav_grayarea"}>
                        <Container>
                    
                            <Row >
                                <Col sm="4">
                                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                        <div className={"align_vertical"}>
                                            <div className={"canflag"}></div>
                                            <ul>
                                                <li className={sesionLogin ? "notshown" : "topinbox"} style={{border: "none"}}>
                                                    <Link to="/loginmenu">
                                                        {language === "en" ? "Log In" : ""}
                                                        {language === "fr" ? "Connexion " : ""}
                                                        {language === "sp" ? "Acceder" : ""}
                                                    </Link></li>
                                                <li className={sesionLogin ? "notshown" : "topinbox"} style={{border: "none"}}>
                                                    <Link to="/registermenu">
                                                        {language === "en" ? "Register" : ""}
                                                        {language === "fr" ? "Inscrire" : ""}
                                                        {language === "sp" ? "Registrarse" : ""}
                                                    </Link></li>
                                                <li className={sesionLogin ? "topinbox" : "notshown"} style={{border: "none"}}>
                                                    <Link to="/loginsuccesmenu">
                                                        {language === "en" ? "Account" : ""}
                                                        {language === "fr" ? "Compte" : ""}
                                                        {language === "sp" ? "Cuenta" : ""}
                                                    </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="5">
                                    <div className={"align_vertical"}>
                                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                            <ul>
                                                <li className={"topinbox"}><Link to="/">Home</Link></li>
                                                <li className={"topinbox"}><Link to="/contactmenu">
                                                    {language === "en" ? "Contact" : ""}
                                                    {language === "fr" ? "Contact" : ""}
                                                    {language === "sp" ? "Contacto" : ""}
                                                    </Link></li>
                                                <li className={"topinbox"} style={{borderRight: "solid white"}}>
                                                    <select className={"language_select_desktop"}
                                                        value={language}
                                                        onChange={e => setlanguage(e.target.value)}>
                                                        <option value="en">English</option>
                                                        <option value="fr">French</option>
                                                        <option value="sp">Spanish</option>
                                                    </select>    
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                        <div className={"align_vertical"} >
                                            <a href="https://www.facebook.com/"><div className={"icon"}><Facebook /></div></a>
                                            <a href="https://www.youtube.com/"><div className={"icon"}><Youtube /></div></a>
                                            <a href="https://twitter.com//"><div className={"icon"}><Twitter /></div></a>
                                            <a href="https://www.instagram.com//"><div className={"icon"}><Instagram /></div></a>
                                        </div>
                                    </div>
                                </Col >
                        
                            </Row>
                        </Container>
                           
                    </div>
                </div>
            </div>
                
            <div className={"align_horizontal"}>

                <div className={"myname"}>

                    <Container>
                
                        <Row   >
                    
                            <Col sm="6">
                            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                <div className={"align_vertical"}> <div className={"mylogo"}></div> </div>

                                <div className={"mytitle"}> 
                                    <div >
                                        <div className={"align_horizontal"} style={{fontSize: "2em"}}>FixCar</div>
                                        <div className={"align_horizontal"} style={{fontSize: "1.5em"}}>
                                            {language === "en" ? "BODY SHOP" : ""}
                                            {language === "fr" ? "GARAGE" : ""}
                                            {language === "sp" ? "TALLER" : ""}
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </Col>
                            
                            <Col sm="6">
                            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                <div className={"myphone"}>
                                    <div style={{borderLeft: "solid", borderWidth: "1px", paddingLeft: "30px"}}>
                                        <div style={{display: "flex"}}>
                                            <div style={{color: "#408CCC"}}>QC</div>
                                            <div style={{paddingLeft: "10px"}}>514-717-6664</div>
                                        </div>
                                        
                                        <div style={{display: "flex"}}>
                                            <div style={{color: "#408CCC"}}>NS</div>
                                            <div style={{paddingLeft: "10px"}}>449-180-7569</div>
                                        </div>    
                                    </div>
                                </div>
                                </div>
                            </Col>
                            
                        </Row>
            
                    </Container>
                    
                </div>   
            </div>

            <div className={"align_horizontal"}>
                <div className={"barmenu"}>

                </div>
                <div className={"bartopnavcontainer"} >
                    <div className={"menulist"}>
                        <div className={"align_vertical"} id={"bar-menu-desktop"}>
                            <ul>
                                <li className={"menu"}><Link to="/">HOME</Link></li>
                                <li className={"menu"}><Link to="/salesmenu">
                                    {language === "en" ? "SALES" : ""}
                                    {language === "fr" ? "VENTES" : ""}
                                    {language === "sp" ? "VENTAS" : ""}
                                    </Link></li>
                                <li className={"menu"}><Link to="/shopmenu">
                                    {language === "en" ? "SHOPS" : ""}
                                    {language === "fr" ? "GARAGES" : ""}
                                    {language === "sp" ? "TALLERES" : ""}
                                    </Link></li>
                                <li className={"menu"}><Link to="/appointmentmenu">
                                    {language === "en" ? "APPOINTMENT" : ""}
                                    {language === "fr" ? "RENDEZ-VOUS" : ""}
                                    {language === "sp" ? "CITAS" : ""}
                                    </Link></li>
                                <li className={"menu"}><Link to="/servicesmenu">
                                    {language === "en" ? "SERVICES" : ""}
                                    {language === "fr" ? "SERVICES" : ""}
                                    {language === "sp" ? "SERVICIOS" : ""}
                                    </Link></li>
                                <li className={"menu"}><Link to="/aboutmenu">ABOUT</Link></li>
                            </ul>
                        </div>
                        <div id={"bar-menu-mobile"}>
                            <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}> 
                                <List size={30} onClick={showMobileMenu}/>
                                <div style={{display: "flex"}} className={"menu"}>
                                    <div >QC</div>
                                    <div style={{paddingLeft: "10px"}}>514-717-6664</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Switch>
                <Route path="/" exact  ><Home sendlanguage={language}/></Route >
                <Route path="/salesmenu"  ><Sales sendlanguage={language}/></Route >
                <Route path="/contactmenu" ><Contact sendlanguage={language}/></Route >
                <Route path="/shopmenu" ><Ourshops sendlanguage={language}/></Route >
                <Route path="/servicesmenu"  ><Services sendlanguage={language}/></Route >
                <Route path="/aboutmenu"  ><About sendlanguage={language}/></Route >
                <Route path="/appointmentmenu"  ><Appointment sendlanguage={language} /></Route >
                <Route path="/loginmenu"  ><MyLogin handleSetSesion={sesionLogin => {setsesionLogin(sesionLogin);}} sendlanguage={language}/></Route >
                <Route path="/registermenu"  ><MyRegister sendlanguage={language}/></Route >
                <Route path="/registersuccesmenu"  ><MyRegisterSucces sendlanguage={language}/></Route >
                <Route path="/loginsuccesmenu"  ><MyLoginSucces handleSetSesion={sesionLogin => {setsesionLogin(sesionLogin);}} sendlanguage={language}/></Route >
                <Route path="/appointmentsuccestext"  ><MyAppointmentSucces sendlanguage={language}/></Route >
            </Switch>
    
            <div className={"align_horizontal"}>
                <div className={"footer"}>
                    <div className={"align_vertical"}>
                        <div className={"callus"} style={{color: "#408CCC"}}>
                            {language === "en" ? "CALL US" : ""}
                            {language === "fr" ? "APPELEZ-NOUS" : ""}
                            {language === "sp" ? "LLAMANOS" : ""}
                        </div>
                    </div>
                    <div className={"align_vertical"}>
                        <div className={"callus"} >CAN 514-717-6664</div>
                    </div>
                    <div className={"align_vertical"}>
                        <div className={"callus"} style={{borderRight: "solid", borderWidth: "1px"}}>MEX 449-180-75-69</div>
                    </div>
                    <div className={"align_vertical"}>
                        <div className={"callus"} style={{color: "#408CCC"}}>
                            {language === "en" ? "CONNECT WITH US" : ""}
                            {language === "fr" ? "CONNECTE-TOI AVEC NOUS" : ""}
                            {language === "sp" ? "CONECTA CON NOSOTROS" : ""}
                        </div>
                    </div>
                    <div className={"align_vertical"}>
                        <div className={"footer-bar-icons"} style={{color: "#408CCC"}}>
                            <div className={"icon-footer"}><Facebook /></div>
                            <div className={"icon-footer"}><Youtube /></div>
                            <div className={"icon-footer"}><Twitter /></div>
                            <div className={"icon-footer"}><Instagram /></div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className={stylemobileMenu ? "show-mobile-main-menu mobile-main-menu" : "mobile-main-menu"} >
                <div className={"mobile-menu-bar"} >
                    <div style={{position: "relative"}}>
                        <div className={"close-menu"}>
                            <X color={"white"} size={40} onClick={showMobileMenu}/>
                        </div>
                    </div>
                </div>
                <ul id={"mobile-menu-list"}>
                    <li ><Link onClick={showMobileMenu} to="/"><div style={{display: "inline-block", width: "100%"}}>HOME</div></Link></li>
                    <li ><Link onClick={showMobileMenu} to="/salesmenu"><div style={{display: "inline-block", width: "100%"}}>SALES</div></Link></li>
                    <li ><Link onClick={showMobileMenu} to="/shopmenu"><div style={{display: "inline-block", width: "100%"}}>OUR SHOPS</div></Link></li>
                    <li ><Link onClick={showMobileMenu} to="/appointmentmenu"><div style={{display: "inline-block", width: "100%"}}>APPOINTMENT</div></Link></li>
                    <li ><Link onClick={showMobileMenu} to="/servicesmenu"><div style={{display: "inline-block", width: "100%"}}>SERVICES</div></Link></li>
                    <li ><Link onClick={showMobileMenu} to="/aboutmenu"><div style={{display: "inline-block", width: "100%"}}>ABOUT</div></Link></li>
                </ul>
            </div>
        </div>
        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));