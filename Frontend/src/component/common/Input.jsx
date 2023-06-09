import React from "react";
import "../css/inpu.css"

const Input = (props) => {
  return (
    <React.Fragment>
       <div id="container" className="container m-3">
               <div className="row">
            <div className="col-4">
      <label htmlFor={props.name} className="col-form-label">
        {props.label}
      </label>
      </div>
      <div className="col-7 ">
      <input
        type={props.type}
        className="form-control text_background"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onchange}
        placeholder={props.placeholder}
        
        
      />
    </div>
    </div>
    </div>
    </React.Fragment>
  );
};

export default Input;
