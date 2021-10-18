import React from "react";
import "./ourshops.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ourshops(props) {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"contactpanel"}>
                <Container  >
                    <Row xs="1" sm="2" className={"row justify-content-center"}>
                        <Col xs="12" sm="6" > 
                            <div className={"shopimage shopquebec"}></div>
                        </Col>
                        <Col xs="10" sm="6" > 
                            <div className={"ourshopstext"}> 
                                <div style={{width: "90%"}}>

                                    <div className={"ourshopstitle"}>QUEBEC</div><br />

                                    <div>
                                        {props.sendlanguage === "en" ? "We have the most common services in the region, such as antirouille and change of summer and winter tires. " : ""}
                                        {props.sendlanguage === "fr" ? "Nous avons les services les plus courants de la région, tels que l'antirouille et le changement des pneus été et hiver. " : ""}
                                        {props.sendlanguage === "sp" ? "Contamos con los servicios más comunes de la región, como el antirouille y cambio de neumáticos de verano e invierno." : ""}
                                    </div>
                                    <div>
                                        {props.sendlanguage === "en" ? "We also have a large inventory of tires to provide a complete service including sale and installation. " : ""}
                                        {props.sendlanguage === "fr" ? "Nous avons également un grand inventaire de pneus pour offrir un service complet incluant la vente et l'installation. " : ""}
                                        {props.sendlanguage === "sp" ? "Contamos también con un amplio inventario en neumáticos para brindarle un servicio completo incluyendo venta e instalación." : ""}
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row >
                    <Row xs="1" sm="2" className={"row justify-content-center"}>
                        <Col xs="12" sm="6" > 
                            <div className={"shopimage shophalifax"}></div>
                        </Col>
                        <Col xs="10" sm="6" > 
                            <div className={"ourshopstext"}> 
                                <div style={{width: "90%"}}>

                                    <div className={"ourshopstitle"}>HALIFAX</div><br />

                                    <div>
                                        {props.sendlanguage === "en" ? "Due to the general humidity of the region, it is very common for the body of your vehicle to suffer from corrosion. That is why, in addition to general services, we have extensive experience in rust prevention and repair. " : ""}
                                        {props.sendlanguage === "fr" ? "En raison de l'humidité générale de la région, il est très fréquent que la carrosserie de votre véhicule souffre de corrosion. C'est pourquoi, en plus des services généraux, nous avons une vaste expérience dans la prévention et la réparation de la rouille. " : ""}
                                        {props.sendlanguage === "sp" ? "Debido a la humedad general de la región, es muy común que la carrocería de tu vehículo sufra corrosión. Es por eso que además de los servicios generales, tenemos amplia experiencia en la prevención de la oxidación y reparación de la misma." : ""}
                                    </div>
                                    <div>
                                        {props.sendlanguage === "en" ? "If your car already shows signs of corrosion, schedule an appointment to determine the best procedure to follow. " : ""}
                                        {props.sendlanguage === "fr" ? "Si votre voiture montre déjà des signes de corrosion, prenez rendez-vous pour déterminer la meilleure procédure à suivre. " : ""}
                                        {props.sendlanguage === "sp" ? "Si tu auto ya presenta síntomas de corrosión, agenda una cita para determinar cuál es el mejor procedimento a seguir." : ""}
                                    </div>
                                    
                                </div>
                            </div>
                        </Col>
                    </Row >
                    <Row xs="1" sm="2" className={"row justify-content-center"}>
                        <Col xs="12" sm="6" > 
                            <div className={"shopimage shopusa"}></div>
                        </Col>
                        <Col xs="10" sm="6" > 
                            <div className={"ourshopstext"}> 
                                <div style={{width: "90%"}}>

                                    <div className={"ourshopstitle"}>USA</div><br />

                                    <div>
                                        {props.sendlanguage === "en" ? "Whether it's an ordinary repair or restoration project, we have the highly trained professional plus the right tools to bring those jewels of the past back to life. " : ""}
                                        {props.sendlanguage === "fr" ? "Qu'il s'agisse d'un projet de réparation ou de restauration ordinaire, nous avons le professionnel hautement qualifié ainsi que les bons outils pour redonner vie à ces joyaux du passé. " : ""}
                                        {props.sendlanguage === "sp" ? "Ya sea que sea una reparación ordinaria o un proyecto de restauración, contamos con el profesional altamente capacitado además de las herramientas adecuadas para traer nuevamente a la vida esas joyas del pasado." : ""}
                                    </div>
                                    <div>
                                        {props.sendlanguage === "en" ? "We also accept custom modification projects to create the car of your dreams. " : ""}
                                        {props.sendlanguage === "fr" ? "Nous acceptons également les projets de modification sur mesure pour créer la voiture de vos rêves. " : ""}
                                        {props.sendlanguage === "sp" ? "Aceptamos también proyectos de modificación a medida para crear el auto de tus sueños." : ""}
                                    </div>
                                   
                                </div>
                            </div>
                        </Col>
                    </Row >
                    <Row xs="1" sm="2" className={"row justify-content-center"}>
                        <Col xs="12" sm="6" > 
                            <div className={"shopimage shopmex"}></div>
                        </Col>
                        <Col xs="10" sm="6" > 
                            <div className={"ourshopstext"}> 
                                <div style={{width: "90%"}}>

                                    <div className={"ourshopstitle"}>MEXICO</div><br />

                                    <div>
                                        {props.sendlanguage === "en" ? "We know how challenging driving can be in this region, which is why we provide you with a specialized suspension service that ranges from an analysis of its current condition to a complete replacement if necessary. " : ""}
                                        {props.sendlanguage === "fr" ? "Nous savons à quel point la conduite peut être difficile dans cette région, c'est pourquoi nous vous fournissons un service de suspension spécialisé qui va d'une analyse de son état actuel à un remplacement complet si nécessaire. " : ""}
                                        {props.sendlanguage === "sp" ? "Sabemos lo desafiante que puede ser la conducción en esta región, por lo que ponemos a su disposición un servicio especializado de suspensión que va desde el análisis del estado actual del mismo hasta el cambio total del mismo de ser necesario." : ""}
                                    </div>

                                </div>
                            </div> 
                        </Col>
                    </Row >
                </Container>
                <br />
            </div>
        </div>
    )
}

export default Ourshops;