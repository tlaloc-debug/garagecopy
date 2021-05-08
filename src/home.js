import React, {useState} from "react";
import { DistributeVertical } from "react-bootstrap-icons";
import Carousel from "./carousel.js"
import "./index.css"
import { Facebook } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { GeoAltFill } from 'react-bootstrap-icons';

function Home() {

    const [mexstyle, setmexstyle] = useState(true);
    const [usstyle, setusstyle] = useState(true);
    const [canstyle, setcanstyle] = useState(true);
    const [canNSstyle, setcanNSstyle] = useState(true);

    const showMexCity = () => {
        setmexstyle(!mexstyle);
    }

    const showUSCity = () => {
        setusstyle(!usstyle);
    }

    const showCanCity = () => {
        setcanstyle(!canstyle);
    }

    const showCanNSCity = () => {
        setcanNSstyle(!canNSstyle);
    }

    return (
        <div>
            <div >
                <Carousel />
            </div>
            

            <div className={"horizontal"}>
                <div className={"description"}>
                    <div className={"divleft"}>
                        <div className={"lenguaje"}>
                            <div className={"lenguajeback"}></div>
                            <div className={"lenguajebox"}></div>
                            <div className={"titleboxes"}>THE CAR LANGUAJE</div>
                            <div className={"textboxes"}>Learn what the lights in your car mean</div>
                        </div>
                        <div className={"knowing"}>
                            <div className={"knowingback"}></div>
                            <div className={"knowingbox"}></div>
                            <div className={"titleboxes"}>KNOWING YOUR CAR</div>
                            <div className={"textboxes"}>Learn about your car's components</div>    
                        </div>
                        <div className={"whatcould"}>
                            <div className={"whatcouldback"}></div>
                            <div className={"whatcouldbox"}></div>
                            <div className={"titleboxes"}>WHAT COULD GO WRONG?</div>
                            <div className={"textboxes"}>Why you should fix your car</div>   
                        </div> 
                        <div className={"movie"}>
                        <div className={"moviebox"}></div>
                            <div className={"pieces"}></div>
                            <div className={"movieback"}></div>
                            <div style={{position: "absolute", top: "123px", right: "18px", width: "30px", height: "30px", backgroundColor: "white"}}></div>
                            <div style={{position: "absolute", top: "110px", right: "5px"}}>< Youtube color="red" size={60}/></div>
                        </div> 
                    </div>
                    <div className={"divright"}>
                        <div className={"average"}>
                            <div className={"total"}>
                                <div className={"horizontal"}>
                                    <div style={{fontSize: "2.5em"}}>2.5</div>
                                </div>
                                <div className={"horizontal"}>
                                    <div style={{color: "#fdc91b", fontSize: "1.8em"}}>★★★☆☆</div>
                                </div>
                                <div className={"horizontal"}>
                                    <div>Average Rating</div>
                                </div>
                            </div>
                            <div className={"bars"}>
                                <div style={{position: "relative", width: "200px", height: "15px", border: "solid 1px", borderRadius: "5px", margin: "2px"}}> 
                                    <div className={"progress"} style={{width: "80%"}}></div> 
                                    <div style={{position: "absolute", top: "-2px", left: "2px"}}>★★★★★</div>
                                </div>
                                <div style={{position: "relative", width: "200px", height: "15px", border: "solid 1px", borderRadius: "5px", margin: "2px"}}> 
                                    <div className={"progress"} style={{width: "60%"}}></div> 
                                    <div style={{position: "absolute", top: "-2px", left: "2px"}}>★★★★☆</div>
                                </div>
                                <div style={{position: "relative", width: "200px", height: "15px", border: "solid 1px", borderRadius: "5px", margin: "2px"}}> 
                                    <div className={"progress"} style={{width: "40%"}}></div> 
                                    <div style={{position: "absolute", top: "-2px", left: "2px"}}>★★★☆☆</div>
                                </div>
                                <div style={{position: "relative", width: "200px", height: "15px", border: "solid 1px", borderRadius: "5px", margin: "2px"}}> 
                                    <div className={"progress"} style={{width: "20%"}}></div> 
                                    <div style={{position: "absolute", top: "-2px", left: "2px"}}>★★☆☆☆</div>
                                </div>
                                <div style={{position: "relative", width: "200px", height: "15px", border: "solid 1px", borderRadius: "5px", margin: "2px"}}> 
                                    <div className={"progress"} style={{width: "10%"}}></div> 
                                    <div style={{position: "absolute", top: "-2px", left: "2px"}}>★☆☆☆☆</div>
                                </div>
                                
                            </div>
                            <div className={"stars"}>
                                <div ></div><div style={{display: "inline-block"}}>80%</div><br/>
                                <div ></div><div style={{display: "inline-block"}}>60%</div><br/>
                                <div ></div><div style={{display: "inline-block"}}>40%</div><br/>
                                <div ></div><div style={{display: "inline-block"}}>20%</div><br/>
                                <div ></div><div style={{display: "inline-block"}}>10%</div><br/>
                            </div>
                        </div>
                        <div className={"horizontal"} style={{width: "100%"}}><h3>Reviews</h3></div>
                        
                        <div className={"reviews"}>
                            <div className={"person"}>
                                <div className={"face1"}></div>
                                <div className={"info"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Maria</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>This paragraph contains a lot of lines in the source code, but the browser ignores it.</div>
                                </div>
                            </div>

                            <div className={"person"}>
                                <div className={"face2"}></div>
                                <div className={"info"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Juan</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>This paragraph contains a lot of lines in the source code, but the browser ignores it.</div>
                                </div>
                            </div>

                            <div className={"person"}>
                                <div className={"face3"}></div>
                                <div className={"info"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Laura</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>This paragraph contains a lot of lines in the source code, but the browser ignores it.</div>
                                </div>
                            </div>

                            <div className={"person"}>
                                <div className={"face4"}></div>
                                <div className={"info"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Panfilo</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>This paragraph contains a lot of lines in the source code, but the browser ignores it.</div>
                                </div>
                            </div>

                            <div className={"person"}>
                                <div className={"face5"}></div>
                                <div className={"vertical"}>
                                    <div style={{marginLeft: "5px"}}>
                                        <div className={"timeposition"}>8 days ago</div>
                                        <div>Sarah</div>
                                        <div className={"timeposition"}>Student</div>
                                    </div>
                                </div>
                                
                                <div className={"comment"}>
                                    <div className={"starsComments"}>★★★★★</div>
                                    <div>This paragraph contains a lot of lines in the source code, but the browser ignores it.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div style={{position: "relative"}}>
                <div className={"graybar"}></div>
                <div className={"barbox"}>
                    <div className={"brandbox"}>
                        <div className={"brand"}>THE CESAR BODY SHOPS</div>
                    </div>   
                </div>  
            </div>
            
            <div className={"horizontal"} style={{width: "100%", height: "600px", padding: "0px 0px", position: "relative"}}>
               
                       
                        <div className={"northamerica"}></div>
                    
                    <div style={{position: "absolute", left: "50px", top: "300px"}} onClick={showMexCity}>
                    <div className={"map"}>
                        <div className={"mapbar"}>
                            <div className={"mapborder"}></div>
                        </div>
                        
                        <div className={"mapbox"}>
                            <div >MEXICO</div> 
                        </div>
                        
                        <div className={"mexico"}>
                            <div className={"nameAgs"}>AGUASCALIENTES</div>
                            <div ><iframe  className={mexstyle ? "mapa1" : "mapa2"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.082788152457!2d-102.31181488471434!3d21.892887563091474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429eef2d30aab47%3A0x1f1115c17f88eaa7!2sFelipe%20Ruiz%20de%20Ch%C3%A1vez%20409%2C%20Miravalle%2C%2020040%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sca!4v1617158224486!5m2!1ses!2sca"  allowfullscreen="" loading="lazy"></iframe></div>
                            <div className={"markmexico"} onClick={showMexCity}><GeoAltFill />
                                <div className={mexstyle ? "showmexico" : "showmexicofix"}>
                                    <div className={"textmexico"}></div>
                                    <div className={"addresmexico"}>
                                        <div style={{fontSize: "1.3em"}}>AGUASCALIENTES, AGS</div>
                                        <div>Felipe Ruiz de Chaves #409</div>
                                        <div>Colonia Miravalle C.P. 20040</div><br/>
                                        <div>449-180-75-69</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>

                    <div style={{position: "absolute", left: "50px"}} onClick={showUSCity}>
                    <div className={"map"}>
                        <div className={"mapbar"}>
                            <div className={"mapborder"}></div>
                        </div>
                        <div className={"mapbox"}>
                            <div >UNITED STATES</div>
                        </div>
                        <div className={"us"}>
                        <div className={"nameNY"}>NEW YORK</div>
                            <div ><iframe  className={usstyle ? "mapa1" : "mapa2"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.348729297264!2d-74.00750908438962!3d40.73235144430674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599340a26bb5%3A0xbfab4b5145712aa3!2sApartment%20Building%20from%20the%20TV%20Show%20Friends%2C%2090%20Bedford%20St%2C%20New%20York%2C%20NY%2010014%2C%20EE.%20UU.!5e0!3m2!1ses!2sca!4v1617311315058!5m2!1ses!2sca"  allowfullscreen="" loading="lazy"></iframe></div>
                            <div className={"markus"} onClick={showUSCity}><GeoAltFill />
                                <div className={usstyle ? "showus" : "showusfix"}>
                                    <div className={"textus"}></div>
                                    <div className={"addresus"}>
                                        <div style={{fontSize: "1.3em"}}>MANHATTAN, NY</div>
                                        <div>90 Bedford St</div>
                                        <div>NY 10014</div><br/>
                                        <div>646-123-4567</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    

                    <div style={{position: "absolute", right: "50px"}} onClick={showCanCity}>
                    <div className={"map"}>
                        <div className={"mapbar"}>
                            <div className={"mapborder"}></div>
                        </div>
                        <div className={"mapbox"}>
                            <div >CANADA</div>
                        </div>
                        <div className={"canada"}>
                        <div className={"nameQc"}>QUEBEC</div>
                            <div ><iframe  className={canstyle ? "mapa1" : "mapa2"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.348729297264!2d-74.00750908438962!3d40.73235144430674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599340a26bb5%3A0xbfab4b5145712aa3!2sApartment%20Building%20from%20the%20TV%20Show%20Friends%2C%2090%20Bedford%20St%2C%20New%20York%2C%20NY%2010014%2C%20EE.%20UU.!5e0!3m2!1ses!2sca!4v1617311315058!5m2!1ses!2sca"  allowfullscreen="" loading="lazy"></iframe></div>
                            <div className={"markcanada"} onClick={showCanCity}><GeoAltFill />
                                <div className={canstyle ? "showcanada" : "showcanadafix"}>
                                    <div className={"textcanada"}></div>
                                    <div className={"addrescanada"}>
                                        <div style={{fontSize: "1.3em"}}>LAVAL, QC</div>
                                        <div>1545 rue d'Anjou</div>
                                        <div>H7M 3R6</div><br/>
                                        <div>514-717-6664</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>

                    <div style={{position: "absolute", right: "50px", top: "300px"}} onClick={showCanNSCity}>
                    <div className={"map"}>
                        <div className={"mapbar"}>
                            <div className={"mapborder"}></div>
                        </div>
                        <div className={"mapbox"}>
                            <div >CANADA</div>
                        </div>
                        <div className={"canadaNS"}>
                        <div className={"nameNS"}>NOUVELLE-ECOSSE</div>
                            <div ><iframe  className={canNSstyle ? "mapa1" : "mapa2"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.348729297264!2d-74.00750908438962!3d40.73235144430674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599340a26bb5%3A0xbfab4b5145712aa3!2sApartment%20Building%20from%20the%20TV%20Show%20Friends%2C%2090%20Bedford%20St%2C%20New%20York%2C%20NY%2010014%2C%20EE.%20UU.!5e0!3m2!1ses!2sca!4v1617311315058!5m2!1ses!2sca"  allowfullscreen="" loading="lazy"></iframe></div>
                            <div className={"markcanadaNS"} onClick={showCanNSCity}><GeoAltFill />
                                <div className={canNSstyle ? "showcanadaNS" : "showcanadaNSfix"}>
                                    <div className={"textcanadaNS"}></div>
                                    <div className={"addrescanadaNS"}>
                                        <div style={{fontSize: "1.3em"}}>HALIFAX, NE</div>
                                        <div>5425 Sackville St</div>
                                        <div>NS B3J 3Y3</div><br/>
                                        <div>902-123-4567</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>


            </div>
        </div>
    )
}

export default Home;