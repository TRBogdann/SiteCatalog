import React from "react";
import "./product.css";

function Product(props)
{
    return(
        <div className="cardCont">
        <div className="card">
            <img alt="img" src={props.image}></img>
            <h3>{props.title}</h3>
            <ul className="info">
           { props.text.map((data) => {
            return <li key={data.text}>{data.text}</li>
          })}
          </ul>
            
            
        </div>
        <div className="cover" onClick={()=>{window.location="productview"+props.number;}}><button>Mai multe detalii</button></div>
        </div>
    )
}
export default Product;