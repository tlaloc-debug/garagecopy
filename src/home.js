import React, {useState, useEffect} from "react";
import Carousel from "./carousel.js";
import "./home.css";
import { Youtube } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import MyShopMaps from "./maps-shops.js";
import axios from "axios";

function Home(props) {

    const [reviews, setreviews] = useState([])
    let stars = [0,0,0,0,0,0];
    let average = 0;
    
    const getAllReviews = () => {
        axios.get("https://all-in-one-proxy.herokuapp.com/https://connectto.herokuapp.com/allreviewsfixcar").then((response)=> {
            setreviews(response.data);
        })
    }

    useEffect(() => {
        getAllReviews();
    }, []);

    const getAverage = (count) => {
        average = ((stars[0]*1 + stars[1]*2 + stars[2]*3 + stars[3]*4 + stars[4]*5) / (stars[5]*10)*10).toFixed(1);
        return average;
    }

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
                                    <div className={"titleboxes"}>
                                        {props.sendlanguage === "en" ? "THE CAR LANGUAGE" : ""}
                                        {props.sendlanguage === "fr" ? "LE LANGAGE AUTOMOBILE" : ""}
                                        {props.sendlanguage === "sp" ? "EL LENGUAGE AUTOMOTRIZ" : ""}
                                    </div>
                                    <div className={"textboxes"}>
                                        {props.sendlanguage === "en" ? "Learn what the lights in your car mean" : ""}
                                        {props.sendlanguage === "fr" ? "Les voyants du tableau de bord" : ""}
                                        {props.sendlanguage === "sp" ? "Significado de las luces del tablero" : ""}
                                    </div>
                                </div>
                                <div className={"lenguaje"}>
                                    <div className={"lenguaje-container knowingback"}></div>
                                    <div className={"lenguaje-container knowingbox"}></div>
                                    <div className={"titleboxes"}>
                                        {props.sendlanguage === "en" ? "KNOWING YOUR CAR" : ""}
                                        {props.sendlanguage === "fr" ? "CONNAÎTRE VOTRE VOITURE" : ""}
                                        {props.sendlanguage === "sp" ? "CONOZCA SU AUTO" : ""}
                                    </div>
                                    <div className={"textboxes"}>
                                        {props.sendlanguage === "en" ? "Learn about your car's components" : ""}
                                        {props.sendlanguage === "fr" ? "Les composants de votre voiture" : ""}
                                        {props.sendlanguage === "sp" ? "Conozca los componentes de su automóvil " : ""}
                                    </div>    
                                </div>
                                <div className={"lenguaje"}>
                                    <div className={"lenguaje-container whatcouldback"}></div>
                                    <div className={"lenguaje-container whatcouldbox"}></div>
                                    <div className={"titleboxes"}>
                                        {props.sendlanguage === "en" ? "WHAT COULD GO WRONG?" : ""}
                                        {props.sendlanguage === "fr" ? "SYMPTOMES DE PANNES?" : ""}
                                        {props.sendlanguage === "sp" ? "¿QUÉ PUEDE SALIR MAL?" : ""}
                                    </div>
                                    <div className={"textboxes"}>
                                        {props.sendlanguage === "en" ? "Why you should fix your car" : ""}
                                        {props.sendlanguage === "fr" ? "Pourquoi devriez-vous réparer votre auto" : ""}
                                        {props.sendlanguage === "sp" ? "¿Por qué deberías arreglar tu coche? " : ""}
                                    </div>   
                                </div> 
                                <a href="https://youtu.be/ZQvfHyfgBtA">
                                    <div className={"lenguaje"} id={"youtube-video"}>
                                        <div className={"lenguaje-container moviebox"}></div>
                                        <div className={"pieces"}></div>
                                        <div className={"lenguaje-container movieback"}></div>
                                        <div style={{position: "absolute", top: "123px", right: "18px", width: "30px", height: "30px", backgroundColor: "white"}}></div>
                                        <div style={{position: "absolute", top: "110px", right: "5px"}}>< Youtube color="red" size={60}/></div>
                                    </div> 
                                </a>
                            </div>
                        </div>
                    </Col>
                    
                    <Col sm="6">
                        <div className={"align_horizontal average"}>

                                {reviews.map((countstars) => {
                                    if (countstars.stars === 1) stars[0] = stars[0]+1;
                                    
                                    
                                    if (countstars.stars === 2) stars[1] = stars[1]+1;
                                        
                                       
                                    
                                    if (countstars.stars === 3) stars[2] = stars[2]+1;
                                        
                                        
                                    
                                    if (countstars.stars === 4) stars[3] = stars[3]+1;
                                        
                                        
                                    
                                    if (countstars.stars === 5) stars[4] = stars[4]+1;
                                        
                                        
                                    
                                    stars[5] = stars[5] + 1
                                })}

                            <div >
                                <div className={"align_horizontal"}>
                                    <div style={{fontSize: "2.5em", height: "50px"}}>{getAverage(stars)}</div>
                                </div>
                                <div className={"align_horizontal"}>
                                    <div style={{color: "#fdc91b", fontSize: "1.8em"}}>
                                        {Math.trunc(average) === 1 ? "★☆☆☆☆" : ""}
                                        {Math.trunc(average) === 2 ? "★★☆☆☆" : ""}
                                        {Math.trunc(average) === 3 ? "★★★☆☆" : ""}
                                        {Math.trunc(average) === 4 ? "★★★★☆" : ""}
                                        {Math.trunc(average) === 5 ? "★★★★★" : ""}
                                    </div>   
                                </div>
                                <div className={"align_horizontal"}>
                                    <div>
                                        {props.sendlanguage === "en" ? "Average Rating" : ""}
                                        {props.sendlanguage === "fr" ? "Note moyenne" : ""}
                                        {props.sendlanguage === "sp" ? "Average Rating" : ""}
                                    </div>
                                </div>
                            </div>

                            <div className={"rating_bars"}>

                                

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "80%"}}></div> 
                                        <div className={"little_stars"}>★★★★★</div>   
                                    </div>
                                    <div className={"showpercentage"}>{Math.trunc((stars[4]/stars[5])*100) + "%"}</div><br/>
                                </div>

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "60%"}}></div> 
                                        <div className={"little_stars"}>★★★★☆</div>
                                    </div>
                                    <div className={"showpercentage"}>{Math.trunc((stars[3]/stars[5])*100) + "%"}</div><br/>
                                </div>

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "40%"}}></div> 
                                        <div className={"little_stars"}>★★★☆☆</div>
                                    </div>
                                    <div className={"showpercentage"}>{Math.trunc((stars[2]/stars[5])*100) + "%"}</div><br/>
                                </div>

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "20%"}}></div> 
                                        <div className={"little_stars"}>★★☆☆☆</div>
                                    </div>
                                    <div className={"showpercentage"}>{Math.trunc((stars[1]/stars[5])*100) + "%"}</div><br/>
                                </div>

                                <div className={"align_horizontal"}>
                                    <div className={"rating_progress_container"}> 
                                        <div className={"rating_progress"} style={{width: "10%"}}></div> 
                                        <div className={"little_stars"}>★☆☆☆☆</div>
                                    </div>
                                    <div className={"showpercentage"}>{Math.trunc((stars[0]/stars[5])*100) + "%"}</div><br/>
                                </div>
                                
                            </div>
                        </div>

                        <div className={"reviews"}>
                                
                            {reviews.filter((items) => {
                                if (items.language.includes(props.sendlanguage)){
                                    return items
                                }}).map((items) => {
                                    return (
                                        <div>
                                            <div className={"person"}>
                                                <div className={"main-face face1"}></div>
                                                <div className={"info"}>
                                                    <div style={{marginLeft: "5px"}}>
                                                        <div className={"timeposition"}>
                                                            {props.sendlanguage === "en" ? "8 days ago" : ""}
                                                            {props.sendlanguage === "fr" ? "il y a 8 jours" : ""}
                                                            {props.sendlanguage === "sp" ? "hace 8 días " : ""}
                                                        </div>
                                                        <div>{items.name}</div>
                                                        <div className={"timeposition"}>
                                                            {props.sendlanguage === "en" ? "Student" : ""}
                                                            {props.sendlanguage === "fr" ? "Étudiant" : ""}
                                                            {props.sendlanguage === "sp" ? "Estudiante" : ""}
                                                        </div>
                                                    </div>
                                                </div>
                                
                                                <div className={"comment"}>
                                                    <div className={"starsComments"}>
                                                        {items.stars === 1 ? "★☆☆☆☆" : ""}
                                                        {items.stars === 2 ? "★★☆☆☆" : ""}
                                                        {items.stars === 3 ? "★★★☆☆" : ""}
                                                        {items.stars === 4 ? "★★★★☆" : ""}
                                                        {items.stars === 5 ? "★★★★★" : ""}
                                                    </div>
                                                    <div>{items.myreview}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            })}     

                        </div>
                    </Col>

                </Row>
            
            </Container>

            <MyShopMaps />

        </div>
    )
}

export default Home;