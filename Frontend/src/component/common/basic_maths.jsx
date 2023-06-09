import React from "react";
import "../css/basic_maths.css"
import { Link } from "react-router-dom";

const Basic_Chp = (props) => {
  return (
    <React.Fragment>
      <div className={props.class}>
        <Link to={props.href}>
        <img className="basicimg" src={props.src} />
        </Link>
        <h5>{props.name}</h5>
      </div>
    </React.Fragment>
  );
};

export default Basic_Chp;
