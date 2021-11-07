import React from "react";
import "./about.css";

function About(props) {
    return(
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"aboutpanel"}>
                <div className={"aboutbox"}>
                    <div className={"abouttext"}> 
                        <div>
                            {props.sendlanguage === "en" ? "Founded in 1980 by an apprentice who decided to try his luck setting his own course, 'Cesar' Body Shop is a company that from its origins has been characterized by carrying the banner of guaranteed satisfaction and a focus on customer service." : ""}
                            {props.sendlanguage === "fr" ? "Fondée en 1980 par un apprenti qui a décidé de tenter sa chance en créant son propre parcours, 'Cesar' Body Shop est une entreprise qui, depuis ses origines, s'est caractérisée par le fait de porter la bannière de la satisfaction garantie et de l'accent mis sur le service à la clientèle. " : ""}
                            {props.sendlanguage === "sp" ? "Fundada en 1980 por un aprendiz que decidió probar suerte marcando su propio rumbo, 'Cesar' Body Shop es una empresa que desde sus orígenes se ha caracterizado por llevar el estandarte de la satisfacción garantizada y un enfoque en el servicio al cliente." : ""}  
                        </div><br />
                        <div>
                            {props.sendlanguage === "en" ? "Now, 40 years later, this company continues with the mission of offering a unique automotive improvement experience at affordable prices since we understand that a car is not only a means of transportation but a travel companion of whom we will always have a warm memory." : ""}
                            {props.sendlanguage === "fr" ? "Aujourd'hui, 40 ans plus tard, cette entreprise poursuit sa mission d'offrir une expérience d'amélioration automobile unique à des prix abordables puisque nous comprenons qu'une voiture n'est pas seulement un moyen de transport mais un compagnon de voyage dont nous garderons toujours un bon souvenir." : ""}
                            {props.sendlanguage === "sp" ? "Ahora, 40 años después, esta empresa continúa con la misión de ofrecer una experiencia de mejora automotriz única a precios asequibles ya que entendemos que un automóvil no es solo un medio de transporte sino un compañero de viaje del que siempre tendremos un cálido recuerdo." : ""}  
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;
