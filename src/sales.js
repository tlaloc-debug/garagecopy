import React, {useState} from "react";
import "./sales.css";
import Axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sales(props) {

    let myelement;
    const [collect, setcollect] = useState ([])

    const showproducts = () => {
        Axios.get("https://shopifyconnect.herokuapp.com/products").then((response) => {
            setcollect(response.data.data.collections.edges)
        }); 
    }

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

                    <button onClick={showproducts}>Show All Products</button> <br />
                    <h2>If Shopify ask you a pasword: autsep</h2>

                    <Container  >
                        <Row xs="1" sm="3" className={"row justify-content-center"}>
                            <Col xs="8" sm="4" > 
                                <div >
                                    {collect.slice(0,1).map((collections, index)=>{
                                        return (
                                            <div className={"products"}>
                                                <div className={"producttext"}>
                                                    {props.sendlanguage === "en" ? "13 inches" : ""}
                                                    {props.sendlanguage === "fr" ? "13 pouces" : ""}
                                                    {props.sendlanguage === "sp" ? "13 pulgadas" : ""}
                                                </div>
                                                <div className={"tiresizes"}>
                                                    {collections.node.products.edges.map((article, index)=>{
                                                        return (
                                                            <div id={collections.node.title+index} className={"articlesize"} onClick={(ev)=>{description(ev.target.id)}}>
                                                                {article.node.title}
                                                                <div className={"inventory"}>
                                                                    <div>Stock: {article.node.totalInventory}</div>
                                                                    {article.node.variants.edges.map((hola)=>{
                                                                        return (
                                                                            <div>
                                                                                <div>Price: ${hola.node.price}</div>
                
                                                                            </div>
                                                                        )
                                                                    })}
                                                                
                                                                </div>
                                                                <div className={"storelink"}><a href={"https://tlaloc-debug-dev.myshopify.com/products/"+article.node.title}>Check on store</a></div>
                                                                
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>

                            <Col xs="8" sm="4" > 
                                <div >
                                    {collect.slice(1,2).map((collections, index)=>{
                                        return (
                                            <div className={"products"}>
                                                <div className={"producttext"}>
                                                    {props.sendlanguage === "en" ? "14 inches" : ""}
                                                    {props.sendlanguage === "fr" ? "14 pouces" : ""}
                                                    {props.sendlanguage === "sp" ? "14 pulgadas" : ""}
                                                </div>
                                                <div className={"tiresizes"}>
                                                    {collections.node.products.edges.map((article, index)=>{
                                                        return (
                                                            <div id={collections.node.title+index} className={"articlesize"} onClick={(ev)=>{description(ev.target.id)}}>
                                                                {article.node.title}
                                                                <div className={"inventory"}>
                                                                    <div>Stock: {article.node.totalInventory}</div>
                                                                    {article.node.variants.edges.map((hola)=>{
                                                                        return (
                                                                            <div>
                                                                                <div>Price: ${hola.node.price}</div>
                
                                                                            </div>
                                                                        )
                                                                    })}
                                                                
                                                                </div>
                                                                <div className={"storelink"}><a href={"https://tlaloc-debug-dev.myshopify.com/products/"+article.node.title}>Check on store</a></div>
                                                                
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                            </Col>

                            <Col xs="8" sm="4" > 
                                <div >
                                    {collect.slice(2,3).map((collections, index)=>{
                                        return (
                                            <div className={"products"}>
                                                <div className={"producttext"}>
                                                    {props.sendlanguage === "en" ? "15 inches" : ""}
                                                    {props.sendlanguage === "fr" ? "15 pouces" : ""}
                                                    {props.sendlanguage === "sp" ? "15 pulgadas" : ""}
                                                </div>
                                                <div className={"tiresizes"}>
                                                    {collections.node.products.edges.map((article, index)=>{
                                                        return (
                                                            <div id={collections.node.title+index} className={"articlesize"} onClick={(ev)=>{description(ev.target.id)}}>
                                                                {article.node.title}
                                                                <div className={"inventory"}>
                                                                    <div>Stock: {article.node.totalInventory}</div>
                                                                    {article.node.variants.edges.map((hola)=>{
                                                                        return (
                                                                            <div>
                                                                                <div>Price: ${hola.node.price}</div>
                
                                                                            </div>
                                                                        )
                                                                    })}
                                                                
                                                                </div>
                                                                <div className={"storelink"}><a href={"https://tlaloc-debug-dev.myshopify.com/products/"+article.node.title}>Check on store</a></div>
                                                                
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

                        <Row xs="1" sm="2" className={"row justify-content-center"}>
                            <Col xs="8" sm="4" > 
                                <div >
                                    {collect.slice(3,4).map((collections, index)=>{
                                        return (
                                            <div className={"products"}>
                                                <div className={"producttext"}>
                                                    {props.sendlanguage === "en" ? "16 inches" : ""}
                                                    {props.sendlanguage === "fr" ? "16 pouces" : ""}
                                                    {props.sendlanguage === "sp" ? "16 pulgadas" : ""}
                                                </div>
                                                <div className={"tiresizes"}>
                                                    {collections.node.products.edges.map((article, index)=>{
                                                        return (
                                                            <div id={collections.node.title+index} className={"articlesize"} onClick={(ev)=>{description(ev.target.id)}}>
                                                                {article.node.title}
                                                                <div className={"inventory"}>
                                                                    <div>Stock: {article.node.totalInventory}</div>
                                                                    {article.node.variants.edges.map((hola)=>{
                                                                        return (
                                                                            <div>
                                                                                <div>Price: ${hola.node.price}</div>
                
                                                                            </div>
                                                                        )
                                                                    })}
                                                                
                                                                </div>
                                                                <div className={"storelink"}><a href={"https://tlaloc-debug-dev.myshopify.com/products/"+article.node.title}>Check on store</a></div>
                                                                
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>

                            <Col xs="8" sm="4" > 
                                <div >
                                    {collect.slice(4,5).map((collections, index)=>{
                                        return (
                                            <div className={"products"}>
                                                <div className={"producttext"}>
                                                    {props.sendlanguage === "en" ? "17 inches" : ""}
                                                    {props.sendlanguage === "fr" ? "17 pouces" : ""}
                                                    {props.sendlanguage === "sp" ? "17 pulgadas" : ""}
                                                </div>
                                                <div className={"tiresizes"}>
                                                    {collections.node.products.edges.map((article, index)=>{
                                                        return (
                                                            <div id={collections.node.title+index} className={"articlesize"} onClick={(ev)=>{description(ev.target.id)}}>
                                                                {article.node.title}
                                                                <div className={"inventory"}>
                                                                    <div>Stock: {article.node.totalInventory}</div>
                                                                    {article.node.variants.edges.map((hola)=>{
                                                                        return (
                                                                            <div>
                                                                                <div>Price: ${hola.node.price}</div>
                
                                                                            </div>
                                                                        )
                                                                    })}
                                                                
                                                                </div>
                                                                <div className={"storelink"}><a href={"https://tlaloc-debug-dev.myshopify.com/products/"+article.node.title}>Check on store</a></div>
                                                                
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