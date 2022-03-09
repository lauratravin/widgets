import React from "react";


const Accordion = ({ items }) => {

    const onTitleclick = (index) => {
        console.log(index)
    }

    const renderedItems = items.map ( (i,index) => {

        return (
        <React.Fragment key={i.title}>
              <div className="title active"
              onClick={() => onTitleclick(index)}>
                    <i className="dropdown icon"></i> {i.title}
              </div>
              <div className="content active"><p> {i.content} </p>  </div>
        </React.Fragment>)
    })
   return <div className="ui styled accordion">{renderedItems}</div>
}

export default Accordion;