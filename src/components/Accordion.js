import React from "react";
import {useState} from "react";


const Accordion = ({ items }) => {

    const[activeIndex, setActiveIndex] = useState(null)


    const onTitleclick = (index) => {
        setActiveIndex(index)
    }



    const renderedItems = items.map ( (i,index) => {
     //if the index click by user is equal to the one I am going to render, then assign the active class
        const active = index === activeIndex? 'active' : ''

        return (
        <React.Fragment key={i.title}>
              <div className={"title" + active}
              onClick={() => onTitleclick(index)}>
                    <i className="dropdown icon"></i> {i.title}
              </div>
              <div className={`content ${active}`}><p> {i.content} </p>  </div>
        </React.Fragment>)
    })
   return <div className="ui styled accordion">
            {renderedItems} 
          </div>
}

export default Accordion;