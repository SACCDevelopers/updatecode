import React, { Component } from "react";
import Chp_Left from "../../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from '../../../common/common_on_chp/On_Top';


class English extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Common_on_chp name="Chemistry 11" />
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left
            name="1.Vocabulary amd Word Usage"
            src="/images/"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Vocabulary amd Word Usage")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`} />

          <Chp_Right
            name="2.Grammar and Sentence structure"
            src="/images/"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Grammar and Sentence structure")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`} />

          <Chp_Left name="3.Idioms and Phrases" src="/images/"
          href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Idioms and Phrases")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`} />

          <Chp_Right
            name="4.Synonyms and Antonyms"
            src="/images/"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Synonyms and Antonyms")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`} />

          <Chp_Left
            name="5.Relationship Between Words"
            src="/images/"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Relationship Between Words")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`} />

          <Chp_Right
            name="6.Parts of Speech"
            src="/images/"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Parts of Speech")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`} />

          <Chp_Left
            name="7.Pronounciation and Phonetics"
            src="/images/"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Pronounciation and Phonetics")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`} />

          <Chp_Right
            name="8.Active and Passive Voice"
            src="/images/"
            href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Active and Passive Voice")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`} />

          <Chp_Left name="9.Preposition and Conjuction" src="/images/" 
          href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Preposition and Conjuction")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`} />
        </div>
      </React.Fragment>
    );
  }
}

export default English;
