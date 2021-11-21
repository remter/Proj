import React, { useState } from "react";

const Tabs = () =>{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index)=>{
        console.log("Tab number: " + index + " Has been pressed")

    }
    return (
        <div>
            <button onClick={() => toggleTab(1)}>
                Tables
            </button>
            <button onClick={() => toggleTab(2)}>
                Individual
            </button>
            <button  onClick={() => toggleTab(3)}>
                Operations
            </button>

        </div>
    )
}
export default Tabs;