import React from "react";

function MyFirstComponent(props) {
    return(
        <div>
            <h2>Hi ! Your Name is {props.Name}, And Your Age is {props.Age}</h2>
        </div>
    )
}

export default MyFirstComponent