import React from 'react'
import '../css/fastUniHome.css'
import ituLogo from '../../uniHomeImages/itu/ituLogo.png'
import itu1 from '../../uniHomeImages/itu/Itu1.jpg'
import itu2 from '../../uniHomeImages/itu/Itu2.jpg'
import itu3 from '../../uniHomeImages/itu/Itu3.jpg'

import lhr from '../../uniHomeImages/itu/Itu3.jpg'


import adm from '../../uniHomeImages/comsat/adm.jpg'
import eli from '../../uniHomeImages/comsat/eli.jpg'
import fee from '../../uniHomeImages/comsat/fee.jpg'
import Card from './Card'

export default function ItuUniPage() {
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
                            <img src={ituLogo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>


                <div className="container pt-4">
                    <div className="row justify-content-evenly gy-4">
                        <div className="col-auto">
                            <img src={itu1} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                        <div className="col-auto">
                            <img src={itu2} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                        <div className="col-auto">
                            <img src={itu3} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                    </div>
                </div>

                <div className="container pt-4">
                    <div className="row">
                        <div className="col">
                            <h5 className="text-center">The Information Technology University (ITU)
                                (Urdu: جامعہ اطلاعیات) is a public
                                university in Lahore, Punjab, Pakistan.
                                Founded in 2012, the university was
                                founded and headed by Umar Saif and is modeled after the MIT.

                                The university is located within the high-rise Arfa Software Technology Park,
                                while its permanent 183 acre campus is under construction on Barki Road.
                                The university has varying degrees of partnerships with the Harvard University
                                and also publishes the MIT Technology Review, Pakistan edition.
                                The university is home to several tenured academics, Pakistan's
                                largest startup incubator and maintains partnerships with EdX,
                                IBM and the US State Department.
                                It hosted International Development Design Summit, organised by IDIN and United States Agency for International Development (USAID).</h5>
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
                        <Card title='Fee Structure' det="View Details"  link="https://itu.edu.pk/admissions/bs-economics-with-data-science/#fee-structure" btnColor={redbtn} imgPath={fee} />
                        <Card title='Eligibility Criteria' det="View Details" link="https://itu.edu.pk/admissions/eligibility-criteria/" btnColor={redbtn} imgPath={eli} />
                        <Card title='Admission Schedule' det="View Details" link="https://itu.edu.pk/admissions/"  btnColor={redbtn} imgPath={adm} />

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
                    <h3 className='text-center'>ITU (Information Technology University) in Pakistan has one main campus located in Lahore. </h3>
                    <div className='row justify-content-evenly gy-2 mt-4'>
                        <Card title='Lahore Campus' det="Learn More" btnColor={greenbtn} link="https://itu.edu.pk/" build="(Established in  2012)" imgPath={lhr}/>
                      
                    </div>
                </div>
              





            </div>

        </>

    )
}
