import React from 'react'
import HomeNav from '../Navbar/HomeNav'
import '../css/HomeAndNav.css'
import im1 from '../../uniHomeImages/im1.jpg'
import im2 from '../../uniHomeImages/im2.jpg'
import im3 from '../../uniHomeImages/im3.png'

import im4 from '../../uniHomeImages/im4.jpg'
import im5 from '../../uniHomeImages/im5.jpg'
import im6 from '../../uniHomeImages/im6.png'
import im7 from '../../uniHomeImages/im7.png'
export default function Homepage() {
  return (
   

    <div className='container-fluid back' style={{fontFamily: "MyCustomFont" }}>
      <HomeNav />

      <div className="container my-4 py-1 ">
        <div className="row d-flex align-items-center">


          <div className="col-md-5 ">

            <h2><span style={{ color:'green'}}>Make </span> <span>Your</span></h2>
            <h2>Weakness be Your</h2>
            <h2>Strength</h2>
            <div>

              <span>T</span>here is nothing like a concrete life plan to weigh you down.Because if you always have one eye on some
              future goal, you stop paying attention to job at hand, miss opportunity that might arise, and stay
              on a fixed path, even when a better, newer course has opened up  <span>__Indra k Nooyi.</span>
            </div>

            <img className='mr-3 homeimg' src={im2} alt="" style={{
              height: 40, width: 40
            }} />
            <span className='ml-5'>Have a Short Tour</span>

          </div>
          <div className="offset-1 col-md-6 d-flex justify-content-center" >
            <img src={im1} className="img-fluid firstimage" alt="" />
          </div>
        </div>

      </div>


      <div className=" my-2">
        <div className="row">
          <div className="col-12 text-center">

            <h3 className="title">
              <span className="title-word title-word-1 ">How We </span>
              <span className="title-word title-word-2">Make </span>
              <span className="title-word title-word-3">it </span>
              <span className="title-word title-word-4">Happen</span>
            </h3>
          </div>
          <div className="col-12 ovf-hide">

            <h6 className="text-center animate-slide font-weight-bold">There are few steps to identify your problems and start for the solution
            </h6>
          </div>
        </div>
      </div>

      <div className="container py-1">
        <div className="row d-flex align-items-center">

          <div className="col-md-6 d-flex ">
            <img src={im3} className="img-fluid homeimg" alt="" />
          </div>
          <div className="offset-md-1 col-md-5 text-start">
            <h2>You can</h2>

            <h2>Learn Anything</h2>
            <div>
              Build a deep,solid understanding in maths,science and More.
              Maths and science are crucial for advancing technology,innovation, and
              understanding of natural world.


            </div>
          </div>

        </div>

      </div>


      <div className="container py-4">
        <div className="row d-flex align-items-center">


          <div className="col-md-6">
            <h2>TEST YOURSELF </h2>
            <h2>WITH THE HELP OF</h2>
            <h2>QUIZZES</h2>
            <p>Quizzes are a valuable tool used in career counselling to help students gain insight into their personality traits, strengths, and weaknesses.</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={im4} className="img-fluid homeimg" alt="" style={{
              height: 300, width: 300
            }} />
          </div>
        </div>

      </div>


      <div className="container py-4">
        <div className="row">

          <div className="col-md-6 d-flex justify-content-center">
            <img src={im7} className="img-fluid homeimg img-rounded oval" alt="" />
          </div>
          <div className="col-md-6">
            <h2>COMPETENT COUNSELLORS</h2>
            <p>Our counsellors are truly remarkable individuals
              who dedicate their lives to helping others.
              They possess a unique set of skills and qualities
              that make them exceptional in their field, including empathy,
              patience, and a deep understanding of human behaviour and emotions.</p>
            <br />
            <p>
              <strong style={{
                fontSize: 35
              }} className='font-wight-bold'>T</strong>hrough their work, they inspire hope and healing,
              and empower individuals to overcome obstacles and achieve their goals.
              Their compassion and dedication are truly awe- inspiring,
              and they serve as beacons of light for those navigating the complex and
              often challenging terrain of mental health.
              great video lectures and notes
            </p>
          </div>

        </div>

      </div>

      <div className="container py-4">
        <div className="row">


          <div className="col-md-6">
            <h2>TOP UNIVERSITIES</h2>
            <h2>OF PAKISTAN</h2>
            <p>
              By reading our material and seeking guidance from professional
              counsellors, you can increase your chances of securing admission
              to top universities in Pakistan. Our resources and the expertise
              of counsellors can help you craft a compelling application,
              navigate the admissions process, and address any personal or
              academic challenges that may affect your candidacy. With this support,
              you can confidently pursue your academic goals and realize your potential
              as a student at one of Pakistan&apos s premier universities.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={im5} className="img-fluid homeimg" alt="" />
          </div>
        </div>

      </div>
           
           <div className="container pink">
            <div className="row">
              <div className="col">
              <h2 className='text-center my-2 font-weight-bold'>We are pleased to offer great video lectures and notes to help you achieve academic succuess</h2>
    
              </div>
            </div>
           </div>
        
      <div className="container py-4">
      <div className="row makeLastImageAligned">
  <div className="col-md-6 d-flex align-items-center justify-content-center">
    <img src={im6} className="img-fluid img-rounded homeimg" alt="" />
  </div>
  <div className="col-md-6">
    <h2>VIDEO LECTURES</h2>
    <h2>AND NOTES</h2>
    <p>
      Our notes are meticulously crafted to provide concise summaries of each topic covered in our video lectures.
      They are designed to help you review and retain the information covered in class,
      making it easier for you to prepare for exams and complete assignments.
      We believe that our video lectures and notes can make a real difference in your academic performance,
      and we are committed to helping you achieve your goals.
      So, whether you are looking to improve your grades or expand your knowledge,
      we are here to help you every step of the way.
    </p>
  </div>
</div>


      </div>


    </div> 

  
  )
}
