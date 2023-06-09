import React, { Component } from "react";
import Chp_Left from "../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from "../../common/common_on_chp/On_Top";


class IQ extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Common_on_chp name="IQ"/>
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left
            name="1.Sequence and Series"
            src="/images/"
            href={`/Analytical&IQ_quiz?chapter=${encodeURIComponent("Sequence and Series")}`}
            
          />

          <Chp_Right
            name="2.Coding and Decoding"
            src="/images/"
        href={`/Analytical&IQ_quiz?chapter=${encodeURIComponent("Coding and Decoding")}`}
             />

          <Chp_Left name="3.Odd One Out" src="/images/" href="/chapter/nextpage" />

          <Chp_Right
            name="4.Number Reasoning"
            src="/images/"
        href={`/Analytical&IQ_quiz?chapter=${encodeURIComponent("Number Reasoning")}`}
             />

          <Chp_Left
            name="5.Analytical Reasoning"
            src="/images/"
        href={`/Analytical&IQ_quiz?chapter=${encodeURIComponent("Analytical Reasoning")}`}
             />

                  </div>
      </React.Fragment>
    );
  }
}

export default IQ;
