import React, {useState} from "react";
import AliceCarousel from 'react-alice-carousel';
import "./alice-carousel.css";
import "./index.css"

function Carousel() {
    
    return (
        <div >
            <div >
                <AliceCarousel autoPlay autoPlayInterval="5000" animationDuration="1000" infinite="true" disableButtonsControls="true"  >

                    <div  className={"clasicbox"}>
                        <div className={"clasic3"}>
                            <div className={"box"}></div>
                            <div className={"services"}>
                                <div style={{fontSize: "2.5em"}}>SERVICES</div><br/><br/>
                                <div>Not only we are there for you in case of an accident, we can make sure that your car is always safe and beautiful. </div>
                                <div className={"servicesbutton"}>More</div>
                            </div>
                        </div>    
                    </div>  

                    <div  className={"clasicbox"}>
                        <div className={"clasic4"}>
                            <div className={"box"}></div>
                            <div className={"services"}>
                                <div style={{fontSize: "2.5em"}}>SHOP</div><br/><br/>
                                <div>We have all kind of tires for your car, whether you need summer, winter or all-season tires. </div>
                                <div className={"servicesbutton"}>Buy</div>
                            </div>
                        </div>
                    </div> 

                    <div  className={"clasicbox"}>
                        <div className={"clasic2"}>
                            <div className={"box"}></div>
                            <div className={"services"}>
                                <div style={{fontSize: "2.5em"}}>CUSTUMER TESTIMONIALS</div><br/><br/>
                                <div>Find out why we are the best option for you by reading the experience of some of our customers. </div>
                                <div className={"servicesbutton"}>Read</div>
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
                                <div style={{fontSize: "2.5em"}}>GALLERY</div><br/><br/>
                                <div>Take a look at some of the cars we have repaired or even brought back to life! </div>
                                <div className={"servicesbutton"}>Visit</div>
                            </div>
                        </div>   
                    </div>

                </AliceCarousel>
                
            </div>
            
        </div>
    )
}

export default Carousel;