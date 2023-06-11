import React, { Component } from "react";
import Chp_Left from "../../common/common_on_chp/Chp_Left_Side";
import Chp_Right from "../../common/common_on_chp/Chp_Right_Side";
import Common_on_chp from "../../common/common_on_chp/On_Top";

class Bio_Part1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Common_on_chp name="Biology 11" />
        <div id="container-fluid" className="container-fluid ">
          <Chp_Left name="1.Introduction" src="/images/biology_part_1/a.png" />

          <Chp_Right
            name="2.Biological Molecules"
            src="/images/biology_part_1/b.png"
          href="/nextpage" />

          <Chp_Left name="3.Enzymes" src="/images/biology_part_1/c.png" href="/nextpage" />

          <Chp_Right name="4.The Cell" src="/images/biology_part_1/d.png" href="/nextpage" />

          <Chp_Left
            name="5.Variety of Life"
            src="/images/biology_part_1/e.png"
          href="/nextpage" />

          <Chp_Right
            name="6.Kingdom Prokaytae"
            src="/images/biology_part_1/f.png"
          href="/nextpage" />

          <Chp_Left
            name="7.The Kingdom Protista(or Protoctista)"
            src="/images/biology_part_1/g.png"
          href="/nextpage" />

          <Chp_Right name="8.Fungi" src="/images/biology_part_1/h.png" href="/nextpage" />

          <Chp_Left
            name="9.Kingdom Plantae"
            src="/images/biology_part_1/i.png"
          href="/nextpage" />

          <Chp_Right
            name="10.Kingdom Animalia"
            src="/images/biology_part_1/j.png"
          href="/nextpage" />

          <Chp_Left
            name="11.Bioenergetics"
            src="/images/biology_part_1/k.png"
          href="/nextpage" />

          <Chp_Right name="12.Nutrition" src="/images/biology_part_1/l.png" href="/nextpage" />

          <Chp_Left
            name="13.Gaseous Exchange"
            src="/images/biology_part_1/m.png"
          href="/nextpage" />

          <Chp_Right name="14.Transport" src="/images/biology_part_1/n.png" href="/nextpage" />

          <Chp_Left name="15.Homeotasis" src="/images/biology_part_2/a.png" href="/nextpage" />

          <Chp_Right
            name="16.Support and Movements"
            src="/images/biology_part_2/b.png"
          href="/nextpage" />

          <Chp_Left
            name="17.Coodination and Control"
            src="/images/biology_part_2/c.png"
          href="/nextpage" />

          <Chp_Right
            name="18.Reproduction"
            src="/images/biology_part_2/d.png"
          href="/nextpage" />

          <Chp_Left
            name="19.Growth and Development"
            src="/images/biology_part_2/e.png"
          href="/nextpage" />

          <Chp_Right
            name="20.Chromosomes and DNA"
            src="/images/biology_part_2/f.png"
            href="/nextpage"
           />

          <Chp_Left name="21.Cell Cycle" src="/images/biology_part_2/g.png" href="/nextpage"  />

          <Chp_Right
            name="22.Variations and Genetics"
            src="/images/biology_part_2/h.png"
            href="/nextpage"
          />

          <Chp_Left
            name="21.Biotechnology"
            src="/images/biology_part_2/i.png"
            href="/nextpage"
          />

          <Chp_Right name="24.Evolution" src="/images/biology_part_2/j.png" href="/nextpage" />

          <Chp_Left name="25.Ecosystem" src="/images/biology_part_2/k.png" href="/nextpage"/>
        </div>
      </React.Fragment>
    );
  }
}

export default Bio_Part1;
