import React, { useState } from "react";
import "../../css/books.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Chp_Right = (props) => {
  const [pTagValue, setPTagValue] = useState("");

  const handleImageClick = () => {
    console.log(props.name)
    setPTagValue(props.name);
  };

  return (
    <React.Fragment>
      <div className="row booksrow">
        <div className="col-5"></div>
        <div className="col-2">
          <div className="v1"></div>
        </div>
        <div className="col-5 flex_right">
          <div className="horiright"></div>
          <div className="ava_right">
          <Link to={props.href}>
              <Avatar id="avatar" src={props.src} onClick={handleImageClick} />
            </Link>
            <p>{props.name}</p>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default Chp_Right;
