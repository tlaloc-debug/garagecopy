import React, {useState} from "react";
import "./sales.css";
import Axios from "axios";

function Sales() {

    const [collect, setcollect] = useState ([])

    const showproducts = () => {
        Axios.get("http://localhost:3001/products").then((response) => {
            setcollect(response.data.data.collections.edges)
        }); 
    }

    const description = (number) => {
        document.getElementById(number).style.height="100px";
    }
    
    return(
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <div className={"salespanel"}>
                <button onClick={showproducts}>Show All Products</button>
                <div style={{display: "flex", justifyContent: "space-around", margin: "30px 0px"}}>
                   {collect.slice(0,3).map((collections, index)=>{
                       return (
                            <div className={"products"}>
                                <div className={"producttext"}>{collections.node.title}</div>
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
                <div style={{display: "flex", justifyContent: "space-around", margin: "30px 0px"}}>
                   {collect.slice(3,7).map((collections, index)=>{
                       return (
                        <div className={"products"}>
                        <div className={"producttext"}>{collections.node.title}</div>
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
                
            </div>

        </div>
    )
}

export default Sales;