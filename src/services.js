import React from "react";
import "./services.css";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services(){
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"servicespanel"}>

            <Container  >
                    <Row xs="1" sm="2" className={"row justify-content-center"}>

                        <Col xs="10" sm="6" > 
                            <div className={"image paint "}></div>
                            <div className={"servicestextbox"}>
                                <div className={"services-title"}>COLLISION REPAIR</div>
                                <br />
                                <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lacinia felis, at lobortis nunc. Vivamus sagittis id diam in fringilla. Etiam eget massa maximus, facilisis enim id, iaculis lorem. Proin eu elit sit amet nulla pellentesque laoreet ut ornare libero. Donec ultricies est eu rhoncus euismod. Nulla fermentum mollis augue. Phasellus sit amet magna orci.</div>
                            </div>
                            <div className={"image anti"}></div>
                            <div className={"servicestextbox"}>
                                <div className={"services-title"}>ANTIROUILLE</div>
                                <br />
                                <div >Mauris in nunc interdum, tempor ante ut, facilisis risus. Phasellus est nibh, pharetra bibendum tortor vitae, placerat dictum ex. Mauris nibh dui, aliquet non lectus sit amet, tincidunt lobortis erat. Maecenas quis eros faucibus, vehicula metus eget, vulputate elit. Donec id augue ipsum. </div>
                            </div>
                            <div className={"image alineacion"}></div>
                            <div className={"servicestextbox"}>
                                <div className={"services-title"}>TIRE ALIGNEMENT</div>
                                <br />
                                <div >Sed sapien mauris, iaculis ut lectus eget, venenatis condimentum lorem. Mauris eleifend porta nibh eget facilisis. Fusce volutpat maximus felis, a porta magna fringilla vitae. </div><br />
                                <div >Nulla rutrum ante eu velit dictum hendrerit. Nam et mi arcu. Vivamus pellentesque mattis lacus, at pulvinar sapien rhoncus ultrices. Sed cursus imperdiet placerat. Cras in justo metus.</div>
                            </div>
                        </Col>

                        <Col xs="10" sm="6" > 
                            <div className={"image brake "}></div>
                            <div className={"servicestextbox"}>
                                <div className={"services-title"}>BRAKE SYSTEM</div>
                                <br />
                                <div >In fermentum a diam eget dignissim. Vivamus lobortis lectus arcu, at mollis justo sollicitudin sit amet. In vulputate dui magna, sed euismod tellus maximus in.</div>
                            </div>
                            <div className={"image suspension"}></div>
                            <div className={"servicestextbox"}>
                                <div className={"services-title"}>SUSPENSION</div>
                                <br />
                                <div >Phasellus enim tellus, accumsan vel congue eu, malesuada et ante. Aenean interdum nibh a purus tempus, ut placerat risus posuere. Proin arcu urna, condimentum id leo id, accumsan vestibulum mauris.  </div><br />
                                <div >Nam dignissim ultricies dui, vel auctor magna viverra in. Sed ultrices lacinia metus vel vehicula. Nam lacinia quis justo in luctus.</div>
                            </div>
                            <div className={"image mechanic"}></div>
                            <div className={"servicestextbox"}>
                                <div className={"services-title"}>GENERAL MECHANIC</div>
                                <br />
                                <div >Pellentesque accumsan, nisl vitae dapibus condimentum, metus quam ornare sem, sit amet porta massa urna at magna. Nulla in est et felis blandit mollis. Integer sollicitudin nulla ac elit gravida, a cursus mi blandit. Phasellus ornare justo ut ligula blandit, sed lobortis erat sagittis. Maecenas mi purus, pretium at mattis et, bibendum non nisi.</div>
                            </div>
                        </Col>

                    </Row >

                </Container >
                
            </div>
        </div>
    )
}


export default Services;