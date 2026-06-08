import React, {useState} from "react";
import './picturedDiv.css';

function PicturedDiv({pictureCat}) {
    let [clicked, setClicked] = useState(false);
    // Planning to do different categories for each of the drawings, will just pick a random one each click reset.

    const changeDiv = (e) => {
        setClicked(!clicked);
    }

    return (
        <div onClick={changeDiv}>
        {clicked 
            ? 
                <div className="standard"> v </div> 
            : 
                <div className="dropped"> v </div>
        }
        </div>
    )
}

export default PicturedDiv;