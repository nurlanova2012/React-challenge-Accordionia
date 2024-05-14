import React, {useState} from "react";
import data from "./data";
import  "./styles.css"


function Accordion(){
    const [selected, setSelected] = useState("");

    function handleClick(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
console.log(selected);
    return(
        <div className="acc-wrapper">
            <div className="accordion">
                {
                    data && data.length > 0? data.map(dataItem=> <div className="item">
                        <div onClick={()=> handleClick(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected==dataItem.id?(
                                <div className="content">{dataItem.answer}</div>
                            ) : null
                        }
                    </div>) : <div>No data found!</div>
                }
            </div>
        </div>
    )
    
}

export default Accordion;