import React, { Component } from "react";
import Chp_Left from "../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from "../../common/common_on_chp/On_Top";

// class Chem_Part1 extends Component {
  
//   state = {};
  
//   render() {
    
//     return (
//       <React.Fragment>
//         <Common_on_chp name="Chemistry 11" />
//         <div id="container-fluid" className="container-fluid ">
//           <Chp_Left
//             name="1.Basic Chemistry"
//             src="/images/chemistry_part_1/a.png"
//           href={"/chapter/nextpage/Basic Chemistry"} 
//           value="D"/>

//           <Chp_Right
//             name="2.Expeimental Techniques in CHemistry"
//             src="/images/chemistry_part_1/b.png"
//           href="/chapter/nextpage" />

//           <Chp_Left name="3.Gases" src="/images/chemistry_part_1/c.png" href="/chapter/nextpage" />

//           <Chp_Right
//             name="4.Liquids and Solids"
//             src="/images/chemistry_part_1/d.png"
//           href="/chapter/nextpage" />

//           <Chp_Left
//             name="5.Atomic Structure"
//             src="/images/chemistry_part_1/e.png"
//           href="/chapter/nextpage" />

//           <Chp_Right
//             name="6.Chemical Bonding"
//             src="/images/chemistry_part_1/f.png"
//           href="/chapter/nextpage" />

//           <Chp_Left
//             name="7.Thermochemistry"
//             src="/images/chemistry_part_1/g.png"
//           href="/chapter/nextpage" />

//           <Chp_Right
//             name="8.Chemical Equilibrium"
//             src="/images/chemistry_part_1/h.png"
//           href="/chapter/nextpage" />

//           <Chp_Left name="9.Solutions" src="/images/chemistry_part_1/i.png" href="/chapter/nextpage" />

//           <Chp_Right
//             name="10.Electrochemistry"
//             src="/images/chemistry_part_1/j.png"
//           href="/chapter/nextpage" />

//           <Chp_Left
//             name="11.Reaction Kinetics"
//             src="/images/chemistry_part_1/k.png"
//           href="/chapter/nextpage" />
//         </div>
//       </React.Fragment>
//     );
//   }
// }


function Chem_Part1(){
  
  return(
    <div>
       <Common_on_chp name="Chemistry 11" />
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left
            name="1.Periodic Classification of Elements and Periodicity"
            src="/images/chemistry_part_1/a.png"
          href={`/chemistry_quiz?chapter=${encodeURIComponent("Periodic Classification of Elements and Periodicity")}`}
 />

          <Chp_Right
            name="2.Expeimental Techniques in CHemistry"
            src="/images/chemistry_part_1/b.png"
            href={`/chemistry_quiz?chapter=${encodeURIComponent("Experimental Techniques")}`}
         />

          <Chp_Left 
          name="3.Gases" 
          src="/images/chemistry_part_1/c.png" 
          href={`/chemistry_quiz?chapter=${encodeURIComponent("Gases")}`}
           />

          <Chp_Right
            name="4.Liquids and Solids"
            src="/images/chemistry_part_1/d.png"
            href={`/chemistry_quiz?chapter=${encodeURIComponent("Liquids and Solids")}`}
             />

          <Chp_Left
            name="5.Atomic Structure"
            src="/images/chemistry_part_1/e.png"
            href={`/chemistry_quiz?chapter=${encodeURIComponent("Atomic Structure")}`}
             />

          <Chp_Right
            name="6.Chemical Bonding"
            src="/images/chemistry_part_1/f.png"
            href={`/chemistry_quiz?chapter=${encodeURIComponent("Chemical Bonding")}`}
             />

          <Chp_Left
            name="7.Thermochemistry"
            src="/images/chemistry_part_1/g.png"
            href={`/chemistry_quiz?chapter=${encodeURIComponent("Thermochemistry")}`}
             />

          <Chp_Right
            name="8.Chemical Equilibrium"
            src="/images/chemistry_part_1/h.png"
            href={`/chemistry_quiz?chapter=${encodeURIComponent("Chemical Equilibrium")}`}
             />

          <Chp_Left name="9.Solutions" src="/images/chemistry_part_1/i.png" 
          href={`/chemistry_quiz?chapter=${encodeURIComponent("Solutions")}`}
           
           />

          <Chp_Right
            name="10.Electrochemistry"
            src="/images/chemistry_part_1/j.png"
            href={`/chemistry_quiz?chapter=${encodeURIComponent("Electrochemistry")}`}
             />

          <Chp_Left
            name="11.Reaction Kinetics"
            src="/images/chemistry_part_1/k.png"
            href={`/chemistry_quiz?chapter=${encodeURIComponent("Reaction Kinetics")}`}
          />
        </div>

    </div>
  )
}
export default Chem_Part1;
