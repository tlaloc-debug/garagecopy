import React from "react";
import "./ourshops.css";

function Ourshops() {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"contactpanel"}>
                <div style={{display: "flex"}}>
                    <div className={"shopimage shopquebec"}></div>
                    <div style={{width: "600px", height: "200px"}}>
                        <div className={"ourshopstext"}> 
                            <div style={{width: "90%"}}>
                                <div>QUEBEC</div><br />
                                <div>Contamos con los servicois mas comunes de la region, como el antirouille y cambio de neumaticos de verano e invierno.</div> 
                                <div>Contamos tambien con un amplio inventario en neumaticos para brindarle n servisio completo incluyendo venta e instalacion</div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div style={{display: "flex"}}>
                <div className={"shopimage shophalifax"}></div>
                    <div style={{width: "600px", height: "200px"}}>
                        <div className={"ourshopstext"}> 
                        <div style={{width: "90%"}}>
                            <div>HALIFAX</div><br />
                            <div>Devido a la humaedad genaral de la region, es muy comun que la caroseria e tu veihiculo sufra corrosion. es por eso que ademas de los servision generales, tenemos amplia experiencia en la prevencion de la oxidacion y reparacion de la misma.</div>
                            <div>Si tu aitu ya presenta simtonas de corrosion, agenda una cita oara determinar cual es el mejor proceimento a seguir.</div>
                        </div>
                        </div>
                    </div>
                </div>

                <div style={{display: "flex"}}>
                <div className={"shopimage shopusa"}></div>
                    <div style={{width: "600px", height: "200px"}}>
                        <div className={"ourshopstext"}> 
                        <div style={{width: "90%"}}>
                            <div>USA</div>
                            <div>Ya sea que sea una reparacion ordinaria o un proyecto de restauracion, cinyamoes con el profesional altament capacitado ademoas de las gherramientas adecuadas para traer nuevamente a la vida esas joyas del pasado.</div>
                            <div>Aceptamos tambien poroyectos de modificacion a medida para crear el auto de tus suenos.</div>
                        </div>
                        </div>
                    </div>
                </div>
            
                <div style={{display: "flex"}}>
                <div className={"shopimage shopmex"}></div>
                    <div style={{width: "600px", height: "200px"}}>
                        <div className={"ourshopstext"}> 
                        <div style={{width: "90%"}}>
                            <div>MEXICO</div>
                            <div>Sabemos lo desafiante que puede ser la conduccion en esta region, por lo que pônemos a su disposicion un servisio especilizado de suspencion que va desde el analisis del estado actual del mismo hasta el vambio total del mismo de ser necesario.</div>
                            <div>Contamos con las mejores marcas de amortiguadores y resortes para que su auto pueda hacer frente a cualquier camino, sin importar el estado del mismo.</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourshops;