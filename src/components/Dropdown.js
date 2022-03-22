import React from "react";
import { useState } from "react";

const Dropdown = ({options, selectedDD, onSelectedChange}) => {

    const [open, setOpen] = useState(false)

    const renderedOptions = options.map(
        
        (op) => {
            if (op.value ==  selectedDD.value){ return null } // skip this run with null
            return (
            <div key={op.value} className="item" onClick={() => onSelectedChange(op) }>
                {op.label}
            </div>
            )
        }
    )
    return <div>
    <div className="ui form">
        <div className="field">
            <div className="label">Select a color</div>
            <div className={`ui selection dropdown ${ open? 'visible active':''}`} onClick={()=> setOpen(!open)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedDD.label}</div>
                    <div className={`menu ${ open? 'visible transition': ' '}`}>{ renderedOptions}</div>
            </div>
        </div>
    </div>
    
     </div>
}


export default Dropdown;