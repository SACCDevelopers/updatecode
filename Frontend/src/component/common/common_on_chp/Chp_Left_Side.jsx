import React, { useState } from "react";
import "../../css/books.css"
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const Chp_Left = (props) => {
  const [pTagValue, setPTagValue] = useState("");

  const handleImageClick = () => {
    console.log(props.name)
    setPTagValue(props.name);

  };

  return (
    <React.Fragment>
      <div className="row booksrow">
        <div className="col-5 lex">
          <div className="ava_left">
            <Link to={props.href}>
              <Avatar id="avatar" src={props.src} onClick={handleImageClick} />
            </Link>
            <p>{props.name}</p>
          </div>
          <div className="horileft"></div>
        </div>
        <div className="col-2">
          <div className="v1"></div>
        </div>
        <div className="col-5"></div>
      </div>
    </React.Fragment>
  );
};

export default Chp_Left;
