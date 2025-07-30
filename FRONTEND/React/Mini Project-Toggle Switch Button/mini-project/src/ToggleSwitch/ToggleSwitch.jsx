import { useState } from "react"
import "./ToggleSwitch.css"

const ToggleSwitch = () => {
    const [isOn, setIson]= useState();
    const handleToggleSwitch= ()=>{
        setIson(!isOn);
    };
    
  return (
     
    <>
      <div className="toggle-switch" style={{backgroundColor:isOn ? "#4caf50" : "#f44336" }} onClick={handleToggleSwitch} >
        <div className={`switch ${isOn ? "on" : "of"}` }>
            <span className="switch-state">{isOn ? "on" : "of"}</span>
        </div>
      </div>
    </>
  )
}

export default ToggleSwitch
