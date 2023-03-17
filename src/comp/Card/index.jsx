import React from "react";
import "./card.css"
export const Render = ({ data }) => {
   
        return (
            <div className="contener">
        <div className="title"><nav>{data.title}</nav></div>
         <div className="vas"></div>
         <img  src={data.img}/>
         <div>{data.des}</div>
         </div>
       )
}