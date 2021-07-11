import React from "react";


const Card =(props) =>{
  return(
    <div className="wrapper">
      <h2>{props.recipie}</h2>
      <p>{props.calories}</p>
    </div>
  );
};
export default Card;