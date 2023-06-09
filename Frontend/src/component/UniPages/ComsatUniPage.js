import React from 'react'
import '../css/fastUniHome.css'
import comsatLogo from '../../uniHomeImages/comsat/comsatLogo.png'
import comsat1 from '../../uniHomeImages/comsat/comsat1.jpg'
import comsat2 from '../../uniHomeImages/comsat/comsat2.jpg'
import comsat3 from '../../uniHomeImages/comsat/comsat3.jpg'

import lhr from '../../uniHomeImages/comsat/lhr.jpg'
import isl from '../../uniHomeImages/comsat/isl.jpg'
import swl from '../../uniHomeImages/comsat/sahiwal.jpg'
import atk from '../../uniHomeImages/comsat/attock.jpg'
import vhri from '../../uniHomeImages/comsat/vehari.jpg'
import abd from '../../uniHomeImages/comsat/abd.jpg'

import adm from '../../uniHomeImages/comsat/adm.jpg'
import eli from '../../uniHomeImages/comsat/eli.jpg'
import fee from '../../uniHomeImages/comsat/fee.jpg'
import Card from './Card'

export default function ComsatUniPage() {
     
    const greenbtn=`btn btn-success`;
    const redbtn=`btn btn-danger`;
    let imgStyle = {
        width: "350px",
        height: "200px"
    }
    return (
        <>

            <div className="container-fluid back" style={{ fontFamily: "MyCustomFont" }}>

                <div className="container pt-4">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <img src={comsatLogo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>


                <div className="container pt-4">
                    <div className="row justify-content-evenly gy-4">
                        <div className="col-auto">
                            <img src={comsat1} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                        <div className="col-auto">
                            <img src={comsat2} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                        <div className="col-auto">
                            <img src={comsat3} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                    </div>
                </div>

                <div className="container pt-4">
                    <div className="row">
                        <div className="col">
                            <h5 className="text-center">The origins of the COMSATS University Islamabad
                                (CUI) date back to 1998. The university is one of the leading
                                universities of Pakistan with five (05) broad faculties including Engineering,
                                Information Science and Technology, Business Administration and Architecture
                                and Design with more than 36,000 students and offering 100-degree programs.
                                The CUI is well-known for its trend-setting pedagogical approach,
                                allowing for interdisciplinary methodologies to learning and problem solving,
                                experimentation, and insight. It is ranked among top 3 universities of Pakistan
                                and world’s best 800 universities...</h5>
                        </div>
                    </div>
                </div>







                <div className="container my-5">
                    <div className="row">
                        <div className="col">

                            <h2 className="text-center pb-1 borders ">Fundamental Information</h2>

                        </div>
                    </div>
                </div>
            
                <div className='container'>
                    <div className='row justify-content-evenly gy-2'>
                        <Card title='Fee Structure' det="View Detail" link="https://www.eduvision.edu.pk/comsats-university-comsats-islamabad-ins-9" btnColor={redbtn} imgPath={fee} />
                        <Card title='Eligibility Criteria' det="View Detail"  link="https://admissions.comsats.edu.pk/Home/EligibilityCriteria?pt=BS" btnColor={redbtn} imgPath={eli} />
                        <Card title='Admission Schedule' det="View Detail" link="https://admissions.comsats.edu.pk/"  btnColor={redbtn} imgPath={adm} />

                    </div>
                </div>

                <div className="container my-5">
                    <div className="row">
                        <div className="col">

                            <h2 className="text-center pb-1 borders ">Campuses</h2>

                        </div>
                    </div>
                </div>

          
                <div className='container'>
                    <div className='row justify-content-evenly gy-2'>
                        <Card title='Lahore Campus' det="Learn More"  btnColor={greenbtn} link="http://lahore.comsats.edu.pk/" build="(Established in March 2002)" imgPath={lhr}/>
                        <Card title='Islamabad Campus' det="Learn More" btnColor={greenbtn} build="Established in September 1998" link='http://islamabad.comsats.edu.pk/' imgPath={isl} />
                        <Card title='Attock Campus' det="Learn More" btnColor={greenbtn} build="(Established in April 2004)" link="http://attock.comsats.edu.pk/" imgPath={atk} />

                    </div>
                </div>
                <div className='container mt-5 pb-4'>
                    <div className='row justify-content-evenly gy-2'>
                        <Card title='Vehari Campus' det="Learn More" btnColor={greenbtn} link="http://vehari.comsats.edu.pk/" build="(Established in August 2008)" imgPath={vhri} />
                        <Card title='Sahiwal Campus' det="Learn More" btnColor={greenbtn} link="http://sahiwal.comsats.edu.pk/" build="(Established in December 2006)" imgPath={swl} />
                        <Card title='Abbotabad Campus' det="Learn More" btnColor={greenbtn} link="http://abbotabad.comsats.edu.pk/" build="(Established in September 2001)"  imgPath={abd} />
                      
                   
                    </div>
                </div>









            </div>

        </>

    )
}
