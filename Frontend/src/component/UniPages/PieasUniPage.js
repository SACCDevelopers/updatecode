import React from 'react'

import '../css/fastUniHome.css'
import pieasLogo from '../../uniHomeImages/pieas/pieasLogo.png'
import pieas1 from '../../uniHomeImages/pieas/pieas1.jpg'
import pieas2 from '../../uniHomeImages/pieas/pieas2.jpg'
import pieas3 from '../../uniHomeImages/pieas/pieas3.jpg'


import isl from '../../uniHomeImages/pieas/pieas3.jpg'


import adm from '../../uniHomeImages/comsat/adm.jpg'

import eli from '../../uniHomeImages/comsat/eli.jpg'
import fee from '../../uniHomeImages/comsat/fee.jpg'
import Card from './Card'

export default function PieasUniPage() {
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
                            <img src={pieasLogo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>


                <div className="container pt-4">
                    <div className="row justify-content-evenly gy-4">
                        <div className="col-auto">
                            <img src={pieas1} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                        <div className="col-auto">
                            <img src={pieas2} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                        <div className="col-auto">
                            <img src={pieas3} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                    </div>
                </div>

                <div className="container pt-4">
                    <div className="row">
                        <div className="col">
                            <h5 className="text-center">The Pakistan Institute of Engineering and Applied Sciences
                                (PIEAS), (پاکستان انسٹی ٹیوٹ آف انجینئرنگ اینڈ اپلائیڈ سائنسز)
                                is a public research university located in Islamabad, Pakistan.
                                The university is modelled on international standards with a
                                strong focus on the scientific advancement of the nuclear
                                science-related STEM fields.[1]

                                Founded in 1967 as Reactor School from the sponsorship of the Pakistan Atomic
                                Energy Commission in response to support and manage the nuclear energy infrastructure in
                                the country, the institute started its educational activities with the affiliation of
                                Quaid-e-Azam University, and became Centre for Nuclear Studies (CNS)
                                in 1976— the center gained its new name and became independent as
                                public university in 1997. In 2000, the PIEAS was granted the status of
                                a doctorate degree awarding institute. PIEAS is based on a 150 acres
                                (0.61 km2; 0.23 sq mi) campus and has around 135 full-time faculty members.[2]

                                As of 2017, Higher Education Commission rated PIEAS as the 1st leading engineering
                                university in Pakistan.[3] The QS World University Rankings ranked it as 390th
                                worldwide while QS Asia University Rankings ranked it as 3rd in Pakistan, 189th
                                overall in Asia in 2022.[4] It is ranked 47th in QS top 50 under 50.</h5>
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
                        <Card title='Fee Structure' det="View Details" link="http://admissions.pieas.edu.pk/Academic_Rules/fee_structure.html" btnColor={redbtn} imgPath={fee} />
                        <Card title='Eligibility Criteria' det="View Details" link="http://admissions.pieas.edu.pk/FAQs.html#:~:text=Students%20will%20be%20expected%20to,semester%20(September)%20every%20year." btnColor={redbtn} imgPath={eli} />
                        <Card title='Admission Schedule' det="View Details" link="http://admissions.pieas.edu.pk/Admissions/schedule.html"  btnColor={redbtn} imgPath={adm} />

                    </div>
                </div>

                <div className="container my-5">
                    <div className="row">
                        <div className="col">

                            <h2 className="text-center pb-1 borders ">Campuses</h2>

                        </div>
                    </div>
                </div>

          
                <div className='container pb-4'>
                    <div className='row justify-content-evenly gy-2'>
                        <h3 className='text-center'> PIEAS (Pakistan Institute of Engineering and Applied Sciences) has one main campus located in Islamabad, Pakistan.</h3>
                        <Card title='Islamabad Campus ' det="Learn More" btnColor={greenbtn} build="Established in September 1967" link='http://www.pieas.edu.pk/' imgPath={isl} />
                     
                    </div>
                </div>
               





            </div>

        </>

    )
}
