import React from 'react'
import '../css/fastUniHome.css'
import fast from '../../uniHomeImages/fast/fast.png'
import fim1 from '../../uniHomeImages/fast/fim1.jpeg'
import fim2 from '../../uniHomeImages/fast/fim2.jpeg'
import fim3 from '../../uniHomeImages/fast/fim3.jpeg'
import lhr from '../../uniHomeImages/fast/lhr.jpg'
import isl from '../../uniHomeImages/fast/isl.jpg'
import Karachi from '../../uniHomeImages/fast/karachi.jpg'
import Peshawar from '../../uniHomeImages/fast/pshwr.jpg'
import Chiniot from '../../uniHomeImages/fast/chiniot.jpg'

import adm from '../../uniHomeImages/comsat/adm.jpg'
import eli from '../../uniHomeImages/comsat/eli.jpg'
import fee from '../../uniHomeImages/comsat/fee.jpg'
import Card from './Card'
export default function FastUniPage() {
    const greenbtn=`btn btn-success`;
    const redbtn=`btn btn-danger`;
    let imgStyle = {
        width: "350px",
        height: "200px"
    }
    return (

        <div className="container-fluid back" style={{ fontFamily: "MyCustomFont" }}>

            <div className="container pt-4">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <img src={fast} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>


            <div className="container pt-4">
                <div className="row justify-content-evenly gy-4">
                    <div className="col-auto">
                        <img src={fim1} alt="" className="img-fluid" style={imgStyle} />
                    </div>
                    <div className="col-auto">
                        <img src={fim2} alt="" className="img-fluid" style={imgStyle} />
                    </div>
                    <div className="col-auto">
                        <img src={fim3} alt="" className="img-fluid" style={imgStyle} />
                    </div>
                </div>
            </div>

            <div className="container pt-4">
                <div className="row">
                    <div className="col">
                        <h5 className="text-center">Founded as a Federally Chartered University in July 2000, the National
                            University of Computer and Emerging Sciences is a premiere University of Pakistan, renowned for
                            quality and impact of its students in the development of local software and other industries.
                            The university has five modern campuses at Karachi, Lahore, Islamabad, Peshawar and Chiniot
                            Faisalabad. These campuses provide world className educational environment and recreational
                            facilities to about over 11,000 students, around one quarter are female and over 500 skilled
                            faculty members.
                            Research wings of the university are well recognized, nationally and internationally. They are
                            embarked upon cutting edge research having direct impact on the social, economic and
                            technological needs of Pakistan. Our vision is to become a globally recognized research
                            university of Pakistan within the next decade.</h5>
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
                    <Card title='Fee Structure' det="View Details" link="https://www.nu.edu.pk/Admissions/FeeStructure" btnColor={redbtn} imgPath={fee} />
                    <Card title='Eligibility Criteria' det="View Details" link="https://www.nu.edu.pk/Admissions/EligibilityCriteria" btnColor={redbtn} imgPath={eli} />
                    <Card title='Admission Schedule' det="View Details" link="https://www.nu.edu.pk/Admissions/Schedule" btnColor={redbtn} imgPath={adm} />

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
                    <Card title='Lahore Campus' det="Learn More" btnColor={greenbtn} link="https://lhr.nu.edu.pk/" build="(Established in March 2002)" imgPath={lhr} />
                    <Card title='Islamabad Campus' det="Learn More" btnColor={greenbtn} build="Established in September 1998" link='http://isb.nu.edu.pk/' imgPath={isl} />
                    <Card title='Karachi Campus' det="Learn More" btnColor={greenbtn} build="(Established in April 2004)" link="https://khi.nu.edu.pk/" imgPath={Karachi} />

                </div>
            </div>
            <div className='container mt-5 pb-4'>
                <div className='row justify-content-evenly gy-2'>
                    <Card title='Faislabad Campus' det="Learn More" btnColor={greenbtn} link="https://cfd.nu.edu.pk/" build="(Established in August 2008)" imgPath={Chiniot} />
                    <Card title='Peshawar Campus' det="Learn More" btnColor={greenbtn} link="http://pwr.nu.edu.pk/" build="(Established in December 2006)" imgPath={Peshawar} />
                  

                </div>
            </div>







        </div>



    )
}

