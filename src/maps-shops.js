import React, {useState, useEffect} from "react"
import { GeoAltFill } from 'react-bootstrap-icons';
import "./maps-shops.css";

function  MyShopMaps(){

    const [scrollPositionMexico, setScrollPositionMexico] = useState(0);
    const [scrollPositionUS, setScrollPositionUS] = useState(0);
    const [scrollPositionCanada, setScrollPositionCanada] = useState(0);
    const [scrollPositionCanadaNS, setScrollPositionCanadaNS] = useState(0);
  
    const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 1800 && position < 2000) {setScrollPositionMexico(1);}
    else {setScrollPositionMexico(0);}
    if (position > 2000 && position < 2200) {setScrollPositionUS(1);}
    else {setScrollPositionUS(0);}
    if (position > 2200 && position < 2400) {setScrollPositionCanada(1);}
    else {setScrollPositionCanada(0);}
    if (position > 2400 && position < 2600) {setScrollPositionCanadaNS(1);}
    else {setScrollPositionCanadaNS(0);}

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

            <div style={{position: "relative"}}>
                <div className={"graybar"}></div>
                <div className={"barbox"}>
                    <div className={"brandbox"}>
                        <div className={"brand"}>THE FIXCAR BODY SHOPS</div>
                    </div>   
                </div>  
            </div>
            
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <div className={"align_horizontal maindiv-allmaps"} >
                
                    <div className={"northamerica"}></div>

                    <div>  
                    <div className={"main-map-container"} style={{left: "50px", top: "300px"}} onClick={showMexCity}>
                        <div className={"map"}>
                            <div className={scrollPositionMexico ? "mapbar mapbar-mobile" : "mapbar"}>
                                <div className={scrollPositionMexico ? "mapborder mapborder-mobile" : "mapborder"}></div>
                            </div>
                            
                            <div className={"mapbox"}>
                                <div >MEXICO</div> 
                            </div>
                            
                            <div className={scrollPositionMexico ? "map-container mexico mexico-mobile allow-pointers mapmobile-mobile" : "map-container mexico"} id={"paismexico"}>
                                <div className={scrollPositionMexico ? "ville-name nameAgs ville-name-mobile" : "ville-name nameAgs"}>AGUASCALIENTES</div>
                                <div ><iframe  className={mexstyle ? "mapa-main mapa1" : "mapa-main mapa2"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.082788152457!2d-102.31181488471434!3d21.892887563091474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429eef2d30aab47%3A0x1f1115c17f88eaa7!2sFelipe%20Ruiz%20de%20Ch%C3%A1vez%20409%2C%20Miravalle%2C%2020040%20Aguascalientes%2C%20Ags.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sca!4v1617158224486!5m2!1ses!2sca"  allowfullscreen="" loading="lazy"></iframe></div>
                                <div className={"markmexico"} onClick={showMexCity}><GeoAltFill />
                                    <div className={mexstyle ? "showmexico" : "showmexicofix"}>
                                        <div className={"textmexico"}></div>
                                        <div className={"address-country addresmexico"}>
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

                    <div className={"main-map-container"} style={{left: "50px"}} onClick={showUSCity}>
                        <div className={"map"}>
                            <div className={scrollPositionUS ? "mapbar mapbar-mobile" : "mapbar"}>
                                <div className={scrollPositionUS ? "mapborder mapborder-mobile" : "mapborder"}></div>
                            </div>
                            <div className={"mapbox"}>
                                <div >UNITED STATES</div>
                            </div>
                            <div className={scrollPositionUS ? "map-container us us-mobile" : "map-container us"}>
                            <div className={scrollPositionUS ? "ville-name nameNY ville-name-mobile" : "ville-name nameNY"}>NEW YORK</div>
                                <div ><iframe  className={usstyle ? "mapa-main mapa1" : "mapa-main mapa2"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.348729297264!2d-74.00750908438962!3d40.73235144430674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599340a26bb5%3A0xbfab4b5145712aa3!2sApartment%20Building%20from%20the%20TV%20Show%20Friends%2C%2090%20Bedford%20St%2C%20New%20York%2C%20NY%2010014%2C%20EE.%20UU.!5e0!3m2!1ses!2sca!4v1617311315058!5m2!1ses!2sca"  allowfullscreen="" loading="lazy"></iframe></div>
                                <div className={"markus"} onClick={showUSCity}><GeoAltFill />
                                    <div className={usstyle ? "showus" : "showusfix"}>
                                        <div className={"textus"}></div>
                                        <div className={"address-country addresus"}>
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
                        

                    <div className={"main-map-container"} style={{right: "50px"}} onClick={showCanCity}>
                        <div className={"map"}>
                            <div className={scrollPositionCanada ? "mapbar mapbar-mobile" : "mapbar"}>
                                <div className={scrollPositionCanada ? "mapborder mapborder-mobile" : "mapborder"}></div>
                            </div>
                            <div className={"mapbox"}>
                                <div >CANADA</div>
                            </div>
                            <div className={scrollPositionCanada ? "map-container canada canada-mobile" : "map-container canada"}>
                            <div className={scrollPositionCanada ? "ville-name nameQc ville-name-mobile" : "ville-name nameQc"}>QUEBEC</div>
                                <div ><iframe  className={canstyle ? "mapa-main mapa1" : "mapa-main mapa2"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.348729297264!2d-74.00750908438962!3d40.73235144430674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599340a26bb5%3A0xbfab4b5145712aa3!2sApartment%20Building%20from%20the%20TV%20Show%20Friends%2C%2090%20Bedford%20St%2C%20New%20York%2C%20NY%2010014%2C%20EE.%20UU.!5e0!3m2!1ses!2sca!4v1617311315058!5m2!1ses!2sca"  allowfullscreen="" loading="lazy"></iframe></div>
                                <div className={"markcanada"} onClick={showCanCity}><GeoAltFill />
                                    <div className={canstyle ? "showcanada" : "showcanadafix"}>
                                        <div className={"textcanada"}></div>
                                        <div className={"address-country addrescanada"}>
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

                    <div className={"main-map-container"} style={{right: "50px", top: "300px"}} onClick={showCanNSCity}>
                        <div className={"map"}>
                            <div className={scrollPositionCanadaNS ? "mapbar mapbar-mobile" : "mapbar"}>
                                <div className={scrollPositionCanadaNS ? "mapborder mapborder-mobile" : "mapborder"}></div>
                            </div>
                            <div className={"mapbox"}>
                                <div >CANADA</div>
                            </div>
                            <div className={scrollPositionCanadaNS ? "map-container canadaNS canadaNS-mobile" : "map-container canadaNS"}>
                            <div className={scrollPositionCanadaNS ? "ville-name nameNS ville-name-mobile" : "ville-name nameNS"}>NOUVELLE-ECOSSE</div>
                                <div ><iframe  className={canNSstyle ? "mapa-main mapa1" : "mapa-main mapa2"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.348729297264!2d-74.00750908438962!3d40.73235144430674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599340a26bb5%3A0xbfab4b5145712aa3!2sApartment%20Building%20from%20the%20TV%20Show%20Friends%2C%2090%20Bedford%20St%2C%20New%20York%2C%20NY%2010014%2C%20EE.%20UU.!5e0!3m2!1ses!2sca!4v1617311315058!5m2!1ses!2sca"  allowfullscreen="" loading="lazy"></iframe></div>
                                <div className={"markcanadaNS"} onClick={showCanNSCity}><GeoAltFill />
                                    <div className={canNSstyle ? "showcanadaNS" : "showcanadaNSfix"}>
                                        <div className={"textcanadaNS"}></div>
                                        <div className={"address-country addrescanadaNS"}>
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
            </div>


        </div>
    )
}

export default MyShopMaps;