import React from "react";
import "../styles/images.css";



    const Images = (props) =>(
        <div className = "card">
            <div className="img-container">
                <img src={props.image} id={props.index}  alt={props.name} onClick={props.handleClicked}  width="50px" />
            </div>
        </div>
    );



export default Images;