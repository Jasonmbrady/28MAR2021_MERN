import React from 'react';


const BoxDisplay = ({boxes}) => {
    const renderBoxes = (box, idx) => {
        return(
            <div key={idx} style={{backgroundColor: box.color, width: box.width + "px", height: box.width + "px", display: 'inline-block', margin: "10px"}}></div>
        )
    }
    return(
        <div>
            {boxes.map(renderBoxes)}
        </div>
    )
}

export default BoxDisplay;