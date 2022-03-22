import React from "react";


const Dropdown = ({options}) => {
    const renderedOptions = options.map(
        (op) => { return (
            <div key={op.value} className="item">
                {op.label}
            </div>
        )}
    )
    return <div>
    <div className="ui form">
        <div className="field">
            <div className="label">Select a color</div>
            <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">Select Color</div>
                    <div className="menu visible transition">{ renderedOptions}</div>
            </div>
        </div>
    </div>
    
     </div>
}


export default Dropdown;