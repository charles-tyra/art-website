import React, {useState} from "react";
import './picturedDiv.css';

function PicturedDiv({pictureCat}) {
    let [clicked, setClicked] = useState(false);

    const changeDiv = (e) => {
        setClicked(!clicked);
    }

    return (
        <div onClick={changeDiv}>
        {clicked 
            ? 
                <div> test div </div> 
            : 
                <div> not a test div </div>
        }
        </div>
    )
}

export default PicturedDiv;