import React, {useState , useEffect} from "react";
import "./sales.css";
import Axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sales(props) {

    let myelement;
    const [collect, setcollect] = useState ([])

    const showproducts = () => {
        Axios.get("https://all-in-one-proxy-3187fcbdcf4f.herokuapp.com/https://connectto-cdf4284ddfed.herokuapp.com/products").then((response) => {
            setcollect(response.data.data.collections.nodes);
            console.log(response.data.data.collections.nodes);
        }); 
    }

    useEffect(() => {
        showproducts();
    }, []);

    const description = (number) => {
        myelement = document.getElementById(number);
        console.log(myelement.style.height)
        if (myelement.style.height === "100px") {
            myelement.style.height = "25px";
        } else {
            myelement.style.height = "100px";
        }

    }
    
    return(
        <div>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <div className={"salespanel"}>

                    <Container  >
                        <Row xs="1" sm="3" className={"row justify-content-center"}>
                            <Col xs="8" sm="4" > 
                                <div >
                                    {collect.map((collections, index)=>{
                                        return (
                                            <div className={"products"}>
                                                <div className={"producttext"}>
                                                    {collections.title}
                                                    {/* {props.sendlanguage === "en" ? "13 inches" : ""}
                                                    {props.sendlanguage === "fr" ? "13 pouces" : ""}
                                                    {props.sendlanguage === "sp" ? "13 pulgadas" : ""} */}
                                                </div>
                                                <div className={"tiresizes"}>
                                                    {collections.products.nodes.map((article, index)=>{
                                                        return (
                                                            <div id={article.title+index} className={"articlesize"} onClick={(ev)=>{description(ev.target.id)}}>
                                                                {article.title}
                                                                <div className={"inventory"}>
                                                                    {article.variants.edges.map((hola)=>{
                                                                        return (
                                                                            <div>
                                                                                <div>{hola.node.inventoryQuantity > 0 ? "On Stock" : "Out of Stock"}</div>
                                                                            </div>
                                                                        )
                                                                    })}    
                                                                    {article.variants.edges.map((hola)=>{
                                                                        return (
                                                                            <div>
                                                                                <div>Price: ${hola.node.price}</div>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                
                                                                </div>
                                                                <div className={"storelink"}><a href={"https://fixcar-store.myshopify.com/products/"+article.title}>Check on store</a></div>
                                                                
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                        
                        </Row >

                    </Container>

                </div>
            
            </div>
            
        </div>
        
    )
}

export default Sales;