import React, { Component } from "react";
import Chp_Left from "../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from "../../common/common_on_chp/On_Top";

class English extends Component {
  state = {};
  render() {
    return (
     
      <React.Fragment>
        <Common_on_chp name="English 11" />
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left
            name="1.Vocabulary and Word Usage"
            src="/images/"
            href={`/english_quiz?chapter=${encodeURIComponent("Vocabulary and Word Usage")}`}  />

          <Chp_Right
            name="2.Grammar and Sentence structure"
            src="/images/"
            href={`/english_quiz?chapter=${encodeURIComponent("Grammar and Sentence Structure")}`}  />


          <Chp_Left name="3.Idioms and Phrases" src="/images/"          
            href={`/english_quiz?chapter=${encodeURIComponent("Idioms and Phrases")}`}  />


          <Chp_Right
            name="4.Synonyms and Antonyms"
            src="/images/"
            href={`/english_quiz?chapter=${encodeURIComponent("Synonyms and Antonyms")}`}  />


          <Chp_Left
            name="5.Analogies and Relationships between Words"
            src="/images/"
                     href={`/english_quiz?chapter=${encodeURIComponent("Analogies and Relationships between Words")}`}  />


          <Chp_Right
            name="6.Parts of Speech"
            src="/images/"
           href={`/english_quiz?chapter=${encodeURIComponent("Parts of Speech")}`}  />


          <Chp_Left
            name="7.Pronounciation and Phonetics"
            src="/images/"
                     href={`/english_quiz?chapter=${encodeURIComponent("Pronunciation and Phonetics")}`}  />


          <Chp_Right
            name="8.Active and Passive Voice"
            src="/images/"
                     href={`/english_quiz?chapter=${encodeURIComponent("Active and Passive Voice")}`}  />


          <Chp_Left name="9.Preposition and Conjuction" src="/images/"            
          href={`/english_quiz?chapter=${encodeURIComponent("Prepositions and Conjunctions")}`}  />

        </div>
      </React.Fragment>
    );
  }
}

export default English;
