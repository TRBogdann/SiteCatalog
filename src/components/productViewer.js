import React, { useState } from "react";
import "./productViewer.css";
import returnBt from "../media/return.png"

function Viewer(props)
{
    const [pret,setPret]=useState(props.prices[0].pret);
    const [mainsrc,setMainsrc]=useState(props.pack[0]);
    return(
        <div className="viewContainer">
        <header>
        <img class="returnButton" onClick={()=>{window.location="/"}} alt="img" src={returnBt}></img>
        </header>
        <div className="view">
        <div className="photos">
        <img className="mainImg" alt="img" src={mainsrc}>
        </img>
        <div className="imgSwitch">
        {props.pack.map((source)=>{
            return <img className="bubble" alt="img" src={source} onClick={()=>{setMainsrc(source)}}></img>
        }
        )}
        </div>
        </div>
        <div className="det">
        <h3>{props.title}</h3>
            <ul className="info">
           { props.text.map((data) => {
            return <li key={data.text}>{data.text}</li>
          })}
          </ul>
          <div className="preturi">
            {props.prices.map((price)=>
            {
                return <button className="dimensiune" onClick={()=>{setPret(price.pret)}}>{price.nume}</button>
            })}
         <div className="pret">Pret: {pret}</div>
         <div style={{color:"red", fontWeight:500}}>*Pretul contine TVA</div>
          </div>
        </div>
        </div>
        </div>
    )
}
export default Viewer;