import React, { Component } from "react";
import Chp_Left from "../../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from '../../../common/common_on_chp/On_Top';


class Chem_Part1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Common_on_chp name="Chemistry 11" />
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left
            name="1.Basic Chemistry"
            src="/images/chemistry_part_1/a.png"
          //href="/videonotes/chapter/nextpage/Basic Chemistry" 
href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Basic Chemistry")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=ncOsI8p_tWY&list=PLI-NxcTUPiPzaVCVzpvz…")}`}
/>
          <Chp_Right
            name="2.Expeimental Techniques in CHemistry"
            src="/images/chemistry_part_1/b.png"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Expeimental Techniques in CHemistry")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=IaxlBagOaYQ&list=PLAFyoFAPvecDbFLeoH8T…")}`}
          />

          <Chp_Left name="3.Gases" src="/images/chemistry_part_1/c.png" 
           href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Gases")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=Md4IOMdzXRg&list=PLI-NxcTUPiPyPZACH71q…")}`}
           />

          <Chp_Right
            name="4.Liquids and Solids"
            src="/images/chemistry_part_1/d.png"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Liquids and Solids")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=-aSdEfSyR_A&list=PLI-NxcTUPiPyjja9Hi17…")}`}
          />

          <Chp_Left
            name="5.Atomic Structure"
            src="/images/chemistry_part_1/e.png"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Atomic Structure")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=ePIXPxnVjfM&list=PLI-NxcTUPiPzi7OXaTQR…")}`} />

          <Chp_Right
            name="6.Chemical Bonding"
            src="/images/chemistry_part_1/f.png"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Chemical Bonding")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=pa-RjGTY0iQ&list=PLI-NxcTUPiPyEBWmiJ3q…")}`}
           />

          <Chp_Left
            name="7.Thermochemistry"
            src="/images/chemistry_part_1/g.png"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Thermochemistry")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=sLgE2vF5lk4&list=PLI-NxcTUPiPy0d3QAy2c…")}`}
           />

          <Chp_Right
            name="8.Chemical Equilibrium"
            src="/images/chemistry_part_1/h.png"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Chemical Equilibrium")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=rztmpcy3y9Q&list=PLI-NxcTUPiPy30X5tiUr…")}`}
          />

          <Chp_Left name="9.Solutions" src="/images/chemistry_part_1/i.png" 
         
          href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Solutions")}&link=${encodeURIComponent(" https://www.youtube.com/watch?v=7yE526xto7M&list=PLI-NxcTUPiPyEC8s_RN4…")}`}
          />

          <Chp_Right
            name="10.Electrochemistry"
            src="/images/chemistry_part_1/j.png"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Electrochemistry")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=wgktsa0V_Qk&list=PLI-NxcTUPiPxmwmg-Xor…")}`}
          />

          <Chp_Left
            name="11.Reaction Kinetics"
            src="/images/chemistry_part_1/k.png"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Reaction Kinetics")}&link=${encodeURIComponent("https://www.youtube.com/watch?v=TiltTVTP87Q&list=PLAFyoFAPvecCChRkn28H…")}`}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Chem_Part1;
