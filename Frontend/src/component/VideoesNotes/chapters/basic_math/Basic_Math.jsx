import React, { Component } from 'react'

//import Basic_Chp from '../../common/basic_maths';
import Basic_Chp from '../../../common/basic_maths';

class Basic_Maths extends Component {
    state = {  } 
    render() { 
        return (<React.Fragment>
            <div className='container-fluid container-flu g-3'>
                <div className='row basicrow'>
                    <Basic_Chp
                         src='/images/basic_maths/Number.jpg'
                        name="1.Number System"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Number System")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Decimals.jpg'
                        name="2.Decimals and Fractions"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Decimals and Fractions")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Algebra.jpg'
                        name="3.Basic Algebra"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Basic Algebra")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                </div>
                <div className='row'>
                    <Basic_Chp
                         src='/images/basic_maths/Percentage.jpg'
                        name="4.Percentage and Interest"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Percentage and Interest")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Ratio.png'
                        name="5.Ratio,Proportion & Rates"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Ratio,Proportion & Rates")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Men.jpg'
                        name="6.Men,Food,Work Problem"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Men,Food,Work Problem")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                </div>

                <div className='row basicrow'>
                    <Basic_Chp
                         src='/images/basic_maths/Mensuration.jpg'
                        name="7.Mensuration"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Mensuration")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Mean.jpg'
                        name="8.Mean,Median & Mode"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Mean,Median & Mode")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Age.jpg'
                        name="9.Age Problems"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Age Problems")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                </div>

                <div className='row basicrow'>
                    <Basic_Chp
                         src='/images/basic_maths/Probability.jpg'
                        name="10.Permutations,Combinations and Probability"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Permutations,Combinations and Probability")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Power.jpg'
                         name="11.Power and Roots"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Power and Roots")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Geometry.png'
                        name="12.Coordinate Geometry"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Coordinate Geometry")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                </div>
                <div className='row basicrow'>
                    <Basic_Chp
                         src='/images/basic_maths/Angel.jpg'
                        name="13.Geometry Lines and Angles"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Geometry Lines and Angles")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Polygons.jpg'
                        name="14.Quadrilaterals & Polygons"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Quadrilaterals & Polygons")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Circle.png'
                        name="15.Circles and their Properties"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Circles and their Properties")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                </div>
                <div className='row basicrow'>
                    <Basic_Chp
                         src='/images/basic_maths/Trignometry.png'
                        name="16.Trignometry"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Trignometry")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Logarithm.jpg'
                        name="17.Logarithms"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Logarithms")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                    <Basic_Chp
                         src='/images/basic_maths/Sets.png'
                        name="18.Sets & Venn Diagrams"
                    class="col-4"
                    href={`/videonotes/chapter/nextpage/?chapter=${encodeURIComponent("Sets & Venn Diagrams")}&link=${encodeURIComponent("https://youtu.be/_m01nAh0w4Y")}`}
                   />
                </div>
            </div>
        </React.Fragment>);
    }
}
 
export default Basic_Maths;