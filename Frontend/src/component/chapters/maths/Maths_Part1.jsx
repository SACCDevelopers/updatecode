import React, { Component } from "react";
import Chp_Left from "../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from "../../common/common_on_chp/On_Top";

class Maths_Part1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Common_on_chp name="Maths 11" />
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left name="1.Number Systems" src="/images/maths_part_1/a.png" 
          href={`/mathematics_quiz?chapter=${encodeURIComponent("Number System")}`}
          />

          <Chp_Right
            name="2.Sets Functions and Groups"
            src="/images/maths_part_1/b.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Sets, Functions, and Groups")}`} 
          />

          <Chp_Left
            name="3.Matrices and Determinants"
            src="/images/maths_part_1/c.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Matrices and Determinants")}`} />

          <Chp_Right
            name="4.Quadratic Equations"
            src="/images/maths_part_1/d.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Quadratic Equation")}`} />

          <Chp_Left
            name="5.Parial Fractions"
            src="/images/maths_part_1/e.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Partial Fractions")}`} />

          <Chp_Right
            name="6.Sequences and Series"
            src="/images/maths_part_1/f.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Sequences and Series")}`} />

          <Chp_Left
            name="7.Permutations Combination and Probability"
            src="/images/maths_part_1/g.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Permutation, Combination and Probability")}`} />

          <Chp_Right
            name="8.Mathematical Induction and Binomial Theoreom"
            src="/images/maths_part_1/h.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Mathematical Induction")}`} />

          <Chp_Left
            name="9.Fundamentals of Trignometry"
            src="/images/maths_part_1/i.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Fundamentals of Trigonometry")}`} />

          <Chp_Right
            name="10.Trignometric Identities"
            src="/images/maths_part_1/j.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Trigonometric Identities")}`} />

          <Chp_Left
            name="11.Trignometric Functions and their Graphs"
            src="/images/maths_part_1/k.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Trigonometric Functions and Their Graphs")}`} />

          <Chp_Right
            name="12.Applications of Trignometry"
            src="/images/maths_part_1/l.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Application of Trigonometry")}`} />

          <Chp_Left
            name="13.Inverse Trignometric Functions"
            src="/images/maths_part_1/m.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Inverse Trigonometric Functions")}`} />

          <Chp_Right
            name="14.Solutions of Trignometric Functions"
            src="/images/maths_part_1/n.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Solution of Trigonometric Equations")}`} />

<Chp_Left
            name="15.Function and Limit"
            src="/images/maths_part_2/a.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Functions and Limits")}`} />

          <Chp_Right
            name="16.Differentiation"
            src="/images/maths_part_2/b.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Differentiation")}`} />

          <Chp_Left name="17.Integration" src="/images/maths_part_2/c.png" 
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Integration")}`} />

          <Chp_Right
            name="18.Introduction to Analytical Geometry"
            src="/images/maths_part_2/d.png"
           href={`/mathematics_quiz?chapter=${encodeURIComponent("Introduction to Analytic Geometry")}`} />

          

          <Chp_Left name="19.Vectors" src="/images/maths_part_2/g.png"  
          href={`/mathematics_quiz?chapter=${encodeURIComponent("Vectors")}`} />
        
        </div>
      </React.Fragment>
    );
  }
}

export default Maths_Part1;
