import React from "react";

const Accordion = ({ items }) => {
    const renderedItems = items.map ( i => {

        return <div key="i.title">
              <div className="title active">
                    <i className="dropdown icon"></i> {i.title}
              </div>
              <div className="content active"><p> {i.content} </p>  </div>
        </div>
    })
   return <div className="ui styled accordion">{renderedItems}</div>
}

export default Accordion;