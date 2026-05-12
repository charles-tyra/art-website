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
                <div> test div </div> 
            : 
                <div> not a test div </div>
        }
        </div>
    )
}

export default PicturedDiv;