import React, {useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import "./alice-carousel.css";
import "./mycarousel.css";
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

function Carousel(props) {
    
    return (
        <div >
            <div >
                <AliceCarousel autoPlay autoPlayInterval="5000" animationDuration="1000" infinite="true" disableButtonsControls="true"  >

                    <div  className={"clasicbox"}>
                        <div className={"clasic3"}>
                            <div className={"box"}></div>
                            <div className={"services"}>
                                <div className={"carousel-title-element"}>
                                    {props.sendlanguage === "en" ? "SERVICES" : ""}
                                    {props.sendlanguage === "fr" ? "SERVICES" : ""}
                                    {props.sendlanguage === "sp" ? "SERVICIOS" : ""}
                                </div>
                                <div>
                                    {props.sendlanguage === "en" ? "Not only we are there for you in case of an accident, we can make sure that your car is always safe and beautiful." : ""}
                                    {props.sendlanguage === "fr" ? "Non seulement nous sommes là pour vous en cas d'accident, nous pouvons nous assurer que votre voiture est toujours sûre et belle." : ""}
                                    {props.sendlanguage === "sp" ? "No solo estamos allí para usted en caso de accidente, podemos asegurarnos de que su automóvil esté siempre seguro y bello." : ""}
                                </div>
                                <div className={"servicesbutton"}>
                                    <Link to="servicesmenu" className={"linkcarrousel"}>
                                        {props.sendlanguage === "en" ? "Go" : ""}
                                        {props.sendlanguage === "fr" ? "Aller" : ""}
                                        {props.sendlanguage === "sp" ? "Ir " : ""}
                                    </Link>
                                </div>
                            </div>
                        </div>    
                    </div>  

                    <div  className={"clasicbox"}>
                        <div className={"clasic4"}>
                            <div className={"box"}></div>
                            <div className={"services"}>
                                <div className={"carousel-title-element"}>
                                    {props.sendlanguage === "en" ? "SALES" : ""}
                                    {props.sendlanguage === "fr" ? "VENTES" : ""}
                                    {props.sendlanguage === "sp" ? "VENTAS" : ""}
                                </div>
                                <div>
                                    {props.sendlanguage === "en" ? "We have all kind of tires for your car, whether you need summer, winter or all-season tires." : ""}
                                    {props.sendlanguage === "fr" ? "Nous avons toutes sortes de pneus pour votre voiture, que vous ayez besoin de pneus d'été, d'hiver ou toutes saisons." : ""}
                                    {props.sendlanguage === "sp" ? "Disponemos de todo tipo de neumáticos para tu coche, ya sean neumáticos de verano, de invierno o para todas las estaciones." : ""}
                                </div>
                                <div className={"servicesbutton"}>
                                    <Link to="salesmenu" className={"linkcarrousel"}>
                                        {props.sendlanguage === "en" ? "Buy" : ""}
                                        {props.sendlanguage === "fr" ? "Acheter" : ""}
                                        {props.sendlanguage === "sp" ? "Comprar" : ""}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div  className={"clasicbox"}>
                        <div className={"clasic2"}>
                            <div className={"box"}></div>
                            <div className={"services"}>
                                <div className={"carousel-title-element"}>
                                    {props.sendlanguage === "en" ? "TESTIMONIALS" : ""}
                                    {props.sendlanguage === "fr" ? "TÉMOIGNAGES" : ""}
                                    {props.sendlanguage === "sp" ? "TESTIMONIOS" : ""}
                                </div>
                                <div>
                                    {props.sendlanguage === "en" ? "Find out why we are the best option for you by reading the experience of some of our customers." : ""}
                                    {props.sendlanguage === "fr" ? "Découvrez pourquoi nous sommes la meilleure option pour vous en lisant l'expérience de certains de nos clients." : ""}
                                    {props.sendlanguage === "sp" ? "Descubra por qué somos la mejor opción para usted leyendo la experiencia de algunos de nuestros clientes." : ""}
                                </div>
                                <div className={"servicesbutton"}>
                                    {props.sendlanguage === "en" ? "Read" : ""}
                                    {props.sendlanguage === "fr" ? "Lire" : ""}
                                    {props.sendlanguage === "sp" ? "Leer" : ""}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"clasicbox"} >
                        <div className={"clasic1"} > 
                        <div className={"car1"}></div>
                        <div className={"car2"}></div>
                        <div className={"car3"}></div>
                        <div className={"car4"}></div>
                        <div className={"car6"}></div>
                        <div className={"car5"}></div>
                            <div className={"box"}></div>
                            <div className={"services"}>
                                <div className={"carousel-title-element"}>
                                    {props.sendlanguage === "en" ? "GALLERY" : ""}
                                    {props.sendlanguage === "fr" ? "GALERIE" : ""}
                                    {props.sendlanguage === "sp" ? "GALERÍA" : ""}
                                </div>
                                <div>
                                    {props.sendlanguage === "en" ? "Take a look at some of the cars we have repaired or even brought back to life!" : ""}
                                    {props.sendlanguage === "fr" ? "Jetez un œil à certaines des voitures que nous avons réparées ou même ramenées à la vie!" : ""}
                                    {props.sendlanguage === "sp" ? "Eche un vistazo a algunos de los coches que hemos reparado o incluso que hemos vuelto a la vida." : ""}
                                </div>
                                <div className={"servicesbutton"}>
                                    {props.sendlanguage === "en" ? "Watch" : ""}
                                    {props.sendlanguage === "fr" ? "Regarder" : ""}
                                    {props.sendlanguage === "sp" ? "Ver" : ""}
                                </div>
                            </div>
                        </div>   
                    </div>

                </AliceCarousel>
                
            </div>
            
        </div>
    )
}

export default Carousel;