import React, {useState, Fragment} from "react";
import ReactDOM from "react-dom";
import "./index.css"
import { Facebook } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { GeoAltFill } from 'react-bootstrap-icons';
import Home from "./home.js";
import Contact from "./contact.js"
import Ourshops from "./ourshops.js";
import Services from "./services.js"
import About from "./about.js";
import Appointment from "./appointment.js";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {

    return (
        <Router>
        <div>
            <div className={"backmain"}>
                <div className={"backphoto"}>

                </div>
            </div>
               
                <div className={"horizontal"}>
                    <div className={"bartopnav"}>

                    </div>
                    <div className={"bartopnavcontainer"}>
                        <div className={"topnav"}>
                            
                            <div className={"vertical"}>
                            <div className={"canflag"}></div>
                                Canada
                            </div>
                            <div className={"vertical"}>
                                <ul>
                                    <li className={"top"}><Link to="/">Home</Link></li>
                                    <li className={"top"}><Link to="/contactmenu">Contact</Link></li>
                                    <li className={"top"} style={{borderRight: "solid white"}}>French</li>
                                </ul>
                            </div>
                            <div className={"vertical"}>
                                <a href="https://www.facebook.com/"><div className={"icon"}><Facebook /></div></a>
                                <a href="https://www.youtube.com/"><div className={"icon"}><Youtube /></div></a>
                                <a href="https://twitter.com//"><div className={"icon"}><Twitter /></div></a>
                                <a href="https://www.instagram.com//"><div className={"icon"}><Instagram /></div></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={"horizontal"}>
                    <div className={"name"}>

                        <div className={"vertical"}> <div className={"logo"}></div> </div>

                        <div className={"title"}> 
                            <div >
                                <div className={"horizontal"} style={{fontSize: "2em"}}>"CESAR"</div>
                                <div className={"horizontal"} style={{fontSize: "1.5em"}}>BODY SHOP</div>
                            </div>
                        </div>
                        
                        <div className={"phone"}>
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
                </div>

                

                <div className={"horizontal"}>
                    <div className={"barmenu"}>

                    </div>
                    <div className={"bartopnavcontainer"}>
                        <div className={"menulist"}>
                            <div className={"vertical"}>
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
   
                <div className={"horizontal"}>
                    <div className={"footer"}>
                        <div className={"vertical"}>
                            <div className={"callus"} style={{color: "#408CCC"}}>CALL US</div>
                        </div>
                        <div className={"vertical"}>
                            <div className={"callus"} style={{borderRight: "solid", borderWidth: "1px"}}>CAN 514-717-6664 MEX 449-180-75-69</div>
                        </div>
                        <div className={"vertical"}>
                            <div className={"callus"} style={{color: "#408CCC"}}>CONNECT WITH US</div>
                        </div>
                        <div className={"vertical"}>
                            <div className={"horizontal"} style={{color: "#408CCC"}}>
                                <div className={"icon"}><Facebook /></div>
                                <div className={"icon"}><Youtube /></div>
                                <div className={"icon"}><Twitter /></div>
                                <div className={"icon"}><Instagram /></div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        </Router>
    )
}

const House = () => (<Home />);
const Salesfunction = () => (<h1>Sales</h1>);
const Contactfunction = () => (<Contact />);
const Ourshopsfunction = () => (<Ourshops />);
const Servicesfunction = () => (<Services />);
const Aboutfuntion = () => (<About />);
const Appointmentfuntion = () => (<Appointment />);

ReactDOM.render(<App />, document.getElementById("root"));