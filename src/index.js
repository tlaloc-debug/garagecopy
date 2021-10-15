import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Facebook } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import Home from "./home.js";
import Contact from "./mycontact.js";
import Ourshops from "./ourshops.js";
import Services from "./services.js";
import About from "./about.js";
import Appointment from "./appointment.js";
import Sales from "./sales.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {

    

    return (
        <Router>
        
        <div>
            <div className={"backmain"}>
                <div className={"backphoto"}>

                </div>
            </div>
               
            <div className={"align_horizontal"}>
                <div className={"bartopnav"}>

                </div>
                <div className={"bartopnavcontainer"}>
                    <div className={"topnav_grayarea"}>
                        <Container>
                    
                            <Row xs="12" sm="12"  >
                                <Col sm="3">
                                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                        <div className={"align_vertical"}>
                                            <div className={"canflag"}></div>
                                                Canada
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="6">
                                    <div className={"align_vertical"}>
                                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                            <ul>
                                                <li className={"topinbox"}><Link to="/">Home</Link></li>
                                                <li className={"topinbox"}><Link to="/contactmenu">Contact</Link></li>
                                                <li className={"topinbox"} style={{borderRight: "solid white"}}>French</li>
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
                
                        <Row xs="12" sm="12"  >
                    
                            <Col sm="6">
                            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                <div className={"align_vertical"}> <div className={"mylogo"}></div> </div>

                                <div className={"mytitle"}> 
                                    <div >
                                        <div className={"align_horizontal"} style={{fontSize: "2em"}}>"FixCar"</div>
                                        <div className={"align_horizontal"} style={{fontSize: "1.5em"}}>BODY SHOP</div>
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
                                            <div style={{paddingLeft: "10px"}}>449-180-75-69</div>
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
                <div className={"bartopnavcontainer"}>
                    <div className={"menulist"}>
                        <div className={"align_vertical"}>
                            <ul>
                                <li className={"menu"}><Link to="/">HOME</Link></li>
                                <li className={"menu"}><Link to="/salesmenu">SALES</Link></li>
                                <li className={"menu"}><Link to="/shopmenu">OUR SHOPS</Link></li>
                                <li className={"menu"}><Link to="/appointmentmenu">APPOINTMENT</Link></li>
                                <li className={"menu"}><Link to="/servicesmenu">SERVICES</Link></li>
                                <li className={"menu"}><Link to="/aboutmenu">ABOUT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <Switch>
                <Route path="/" exact component={House} />
                <Route path="/salesmenu" component={Salesfunction} />
                <Route path="/contactmenu" component={Contactfunction} />
                <Route path="/shopmenu" component={Ourshopsfunction} />
                <Route path="/servicesmenu" component={Servicesfunction} />
                <Route path="/aboutmenu" component={Aboutfuntion} />
                <Route path="/appointmentmenu" component={Appointmentfuntion} />
            </Switch>
    
            <div className={"align_horizontal"}>
                <div className={"footer"}>
                    <div className={"align_vertical"}>
                        <div className={"callus"} style={{color: "#408CCC"}}>CALL US</div>
                    </div>
                    <div className={"align_vertical"}>
                        <div className={"callus"} >CAN 514-717-6664</div>
                    </div>
                    <div className={"align_vertical"}>
                        <div className={"callus"} style={{borderRight: "solid", borderWidth: "1px"}}>MEX 449-180-75-69</div>
                    </div>
                    <div className={"align_vertical"}>
                        <div className={"callus"} style={{color: "#408CCC"}}>CONNECT WITH US</div>
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

        </div>
        </Router>
    )
}

const House = () => (<Home />);
const Salesfunction = () => (<Sales />);
const Contactfunction = () => (<Contact />);
const Ourshopsfunction = () => (<Ourshops />);
const Servicesfunction = () => (<Services />);
const Aboutfuntion = () => (<About />);
const Appointmentfuntion = () => (<Appointment />);

ReactDOM.render(<App />, document.getElementById("root"));