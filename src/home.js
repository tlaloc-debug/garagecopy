import React, {useState} from "react";
import Carousel from "./carousel.js";
import "./home.css";
import { Youtube } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import MyShopMaps from "./maps-shops.js";

function Home() {

    return (
        <div>
            <div >
                <Carousel />
            </div>
            
            <Container>
                
                <Row xs="12" sm="12"  >
            
                    <Col sm="6">
                        <div  style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <div className={"littleboxes-container"}>
                                <div className={"lenguaje"}>
                                    <div className={"lenguaje-container lenguajeback"}></div>
                                    <div className={"lenguaje-container lenguajebox"}></div>
                                    <div className={"titleboxes"}>THE CAR LANGUAJE</div>
                                    <div className={"textboxes"}>Learn what the lights in your car mean</div>
                                </div>
                                <div className={"lenguaje"}>
                                    <div className={"lenguaje-container knowingback"}></div>
                                    <div className={"lenguaje-container knowingbox"}></div>
                                    <div className={"titleboxes"}>KNOWING YOUR CAR</div>
                                    <div className={"textboxes"}>Learn about your car's components</div>    
                                </div>
                                <div className={"lenguaje"}>
                                    <div className={"lenguaje-container whatcouldback"}></div>
                                    <div className={"lenguaje-container whatcouldbox"}></div>
                                    <div className={"titleboxes"}>WHAT COULD GO WRONG?</div>
                                    <div className={"textboxes"}>Why you should fix your car</div>   
                                </div> 
                                <div className={"lenguaje"} id={"youtube-video"}>
                                    <div className={"lenguaje-container moviebox"}></div>
                                    <div className={"pieces"}></div>
                                    <div className={"lenguaje-container movieback"}></div>
                                    <div style={{position: "absolute", top: "123px", right: "18px", width: "30px", height: "30px", backgroundColor: "white"}}></div>
                                    <div style={{position: "absolute", top: "110px", right: "5px"}}>< Youtube color="red" size={60}/></div>
                                </div> 
                            </div>
                        </div>
                    </Col>
                    
                    <Col sm="6">
                        <div className={"align_horizontal average"}>

                            <div >
                                <div className={"align_horizontal"}>
                                    <div style={{fontSize: "2.5em", height: "50px"}}>2.5</div>
                                </div>
                                <div className={"align_horizontal"}>
                                    <div style={{color: "#fdc91b", fontSize: "1.8em"}}>★★★☆☆</div>
                                </div>
                                <div className={"align_horizontal"}>
                                    <div>Average Rating</div>
                                </div>
                            </div>

                            <div className={"rating_bars"}>

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "80%"}}></div> 
                                        <div className={"little_stars"}>★★★★★</div>   
                                    </div>
                                    <div className={"showpercentage"}>80%</div><br/>
                                </div>

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "60%"}}></div> 
                                        <div className={"little_stars"}>★★★★☆</div>
                                    </div>
                                    <div className={"showpercentage"}>80%</div><br/>
                                </div>

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "40%"}}></div> 
                                        <div className={"little_stars"}>★★★☆☆</div>
                                    </div>
                                    <div className={"showpercentage"}>80%</div><br/>
                                </div>

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "20%"}}></div> 
                                        <div className={"little_stars"}>★★☆☆☆</div>
                                    </div>
                                    <div className={"showpercentage"}>80%</div><br/>
                                </div>

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "10%"}}></div> 
                                        <div className={"little_stars"}>★☆☆☆☆</div>
                                    </div>
                                    <div className={"showpercentage"}>80%</div><br/>
                                </div>
                                
                            </div>
                        </div>

                        <div className={"reviews"}>
                            <div className={"person"}>
                                <div className={"main-face face1"}></div>
                                <div className={"info"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Maria</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>Best bodyshop ever.</div>
                                </div>
                            </div>

                            <div className={"person"}>
                                <div className={"main-face face2"}></div>
                                <div className={"info"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Juan</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>Best bodyshop ever.</div>
                                </div>
                            </div>

                            <div className={"person"}>
                                <div className={"main-face face3"}></div>
                                <div className={"info"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Laura</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>Best bodyshop ever.</div>
                                </div>
                            </div>

                            <div className={"person"}>
                                <div className={"main-face face4"}></div>
                                <div className={"info"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Panfilo</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>Best bodyshop ever.</div>
                                </div>
                            </div>

                            <div className={"person"}>
                                <div className={"main-face face5"}></div>
                                <div className={"vertical"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Sarah</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>Best bodyshop ever.</div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            
            </Container>

            <MyShopMaps />

        </div>
    )
}

export default Home;