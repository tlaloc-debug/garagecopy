import React from "react";
import "./about.css";

function About() {
    return(
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"aboutpanel"}>
                {/*<div className={"aboutbox"}></div>*/}
                <div className={"abouttext"}> 
                    <div>Founded in 1980 by an apprentice who decided to try his luck setting his own course, "Cesar" Body Shop is a company that from its origins has been characterized by carrying the banner of guaranteed satisfaction and a focus on customer service.</div><br />
                    <div>Now, 40 years later, this company continues with the mission of offering a unique automotive improvement experience at affordable prices since we understand that a car is not only a means of transportation but a travel companion of whom we will always have a warm memory. </div>
                </div>
            </div>
        </div>
    )
}

export default About;
