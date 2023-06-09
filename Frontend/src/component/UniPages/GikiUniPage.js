import React from 'react'
import '../css/fastUniHome.css'
import gikiLogo from '../../uniHomeImages/giki/gikiLogo.png'
import giki1 from '../../uniHomeImages/giki/giki1.jpg'
import giki2 from '../../uniHomeImages/giki/giki2.jpg'
import giki3 from '../../uniHomeImages/giki/giki3.jpg'

import topi from '../../uniHomeImages/giki/giki2.jpg'


import adm from '../../uniHomeImages/comsat/adm.jpg'
import eli from '../../uniHomeImages/comsat/eli.jpg'
import fee from '../../uniHomeImages/comsat/fee.jpg'
import Card from './Card'

export default function GikiUniPage() {
    const greenbtn = `btn btn-success`;
    const redbtn = `btn btn-danger`;
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
                            <img src={gikiLogo} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>


                <div className="container pt-4">
                    <div className="row justify-content-evenly gy-4">
                        <div className="col-auto">
                            <img src={giki1} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                        <div className="col-auto">
                            <img src={giki2} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                        <div className="col-auto">
                            <img src={giki3} alt="" className="img-fluid" style={imgStyle} />
                        </div>
                    </div>
                </div>

                <div className="container pt-4">
                    <div className="row">
                        <div className="col">
                            <h5 className="text-center">The Ghulam Ishaq Khan Institute of Engineering Sciences
                                and Technology (Urdu: غلام اسحاق خان انسٹیٹیوٹ; commonly referred as GIKI),
                                is a private research university located in Topi, Khyber Pakhtunkhwa in Pakistan.
                                The institute has a 400-acre (1.6 km2) campus that is located in the vicinity of
                                Swabi District.

                                It was founded by the former President of Pakistan,
                                Ghulam Ishaq Khan, in 1993. Since its establishment,
                                the institute has consistently attracted the country's most
                                influential scientists such as Abdul Qadeer Khan, Asghar Qadir,
                                and Shaukat Hameed Khan, who played a role in elevating
                                the institute as one of world's finest science and engineering college.
                                GIKI is known to be a competitive institution with a low acceptance rate
                                requiring students to show extraordinary academic excellence and capabilities with
                                strong financial footing to be accommodated.</h5>
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
                        <Card title='Fee Structure' det="View Detail" link="https://giki.edu.pk/admissions/admissions-undergraduates/ugrad-fees-and-expenses/" btnColor={redbtn} imgPath={fee} />
                        <Card title='Eligibility Criteria' det="View Detail" link="https://giki.edu.pk/admissions/admissions-undergraduates/eligibility-criteria/" btnColor={redbtn} imgPath={eli} />
                        <Card title='Admission Schedule' det="View Detail" link="https://giki.edu.pk/admissions/admissions-undergraduates/"  btnColor={redbtn} imgPath={adm} />

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
                    <h3 className='text-center'>GIKI (Ghulam Ishaq Khan Institute of Engineering Sciences and Technology) in Pakistan has one main campus located in Topi, Khyber Pakhtunkhwa province.</h3>
                    <div className='row justify-content-evenly gy-2 mt-4 pb-4'>
                        <Card title='KPK Campus' det="Learn More" btnColor={greenbtn} link="https://giki.edu.pk/" build="(Established in 1993)" imgPath={topi}/>
                     
                    </div>
                </div>
              



            </div>
        </>


    )
}
