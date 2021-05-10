import React from "react";

function Add2Numbers({v1, v2}) {
    var Out = parseInt(v1) + parseInt(v2)
    console.log(Out)
    return(
        <div>
            <h3>Output: {Out}</h3>

        </div>
    )
}

export default Add2Numbers