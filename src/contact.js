import React from "react";
import "./index.css"

function Contact() {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"contactpanel"}>
            <div>CONTACT US</div>
            <div>CANADA</div>
            <hr />
            <div style={{display: "inline-block"}}>
                <div>QUEBEC</div>    
                <div>1545 rue d'Anjou</div>
                <div>Laval, Quebec</div>
                <div>H7M 3R6</div>    
                <div>T. 514-717-6664</div>
            </div>
            <div style={{display: "inline-block"}}>
                <div>HALIFAX</div>    
                <div>5425 Sackville St</div>
                <div>Halifax, NE</div>
                <div>NS B3J 3Y3</div>    
                <div>T. 902-123-4567</div>
            </div>
            <div>UNITED STATES</div>
            <hr />
            <div>
                <div>MANHATTAN</div>    
                <div>90 Bedford St</div>
                <div>Manhattan, NY</div>
                <div>NY 10014</div>    
                <div>T. 646-123-4567</div>
            </div>
            <div>MEXICO</div>
            <hr />
            <div>
                <div>AGUASCALIENTES</div>    
                <div>Felipe Ruiz de Chaves #409</div>
                <div>Aguasclaientes, ags</div>
                <div>C.P. 20040</div>    
                <div>T. 449-180-75-69</div>
            </div>
        </div>
        </div>
    )
}

export default Contact;