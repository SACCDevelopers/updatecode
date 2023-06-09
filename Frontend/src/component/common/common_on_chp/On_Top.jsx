import React from "react";

const Common_on_chp = (props) => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img id="im" src="/images/sci.png" />
          </div>
        </div>
        <div className="bookstopic">
        <h2>{props.name}</h2>
        <h6>Select Chapter</h6>
        </div>
        <hr />
      </div>
    </React.Fragment>
  );
};

export default Common_on_chp;
