import React, {useState} from 'react';

const BoxForm = ({boxes, setBoxes}) => {
    let [boxColor, setBoxColor] = useState("#000000");
    let [boxSize, setBoxSize] = useState("0");
    const colorHandler = e => {
        setBoxColor(e.target.value);
    }
    const sizeHandler = e => {
        setBoxSize(e.target.value);
    }
    const formHandler = e => {
        e.preventDefault();
        const thisBox = {
            width: boxSize,
            color: boxColor
        }
        setBoxes([...boxes, thisBox]);
        setBoxSize("0");
        setBoxColor("#000000");
    }
    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Size</label>
                <input type="number" onChange={sizeHandler} value={boxSize}/>
            </div>
            <div>
                <label>Color</label>
                <input type="color" onChange={colorHandler} value={boxColor}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default BoxForm;