import React from 'react'
import '../css/fastUniHome.css' 
import fim1 from '../../uniHomeImages/pu/pu1.jpg'
import fim2 from '../../uniHomeImages/pu/pu2.jpg'
import fim3 from '../../uniHomeImages/pu/pu3.jpg'

import pucitLogo from '../../uniHomeImages/pu/pucitLogo.png'

import oc from '../../uniHomeImages/pu/oc.jpg'
import nc from '../../uniHomeImages/pu/nc.jpg'
import jlm from '../../uniHomeImages/pu/jlm.jpg'
import gjr from '../../uniHomeImages/pu/gjr.jpg'
import kpr from '../../uniHomeImages/pu/kpr.jpg'


import adm from '../../uniHomeImages/comsat/adm.jpg'
import eli from '../../uniHomeImages/comsat/eli.jpg'
import fee from '../../uniHomeImages/comsat/fee.jpg'
import Card from './Card'


export default function FcitUni() {
    const greenbtn = `btn btn-success`;
    const redbtn = `btn btn-danger`;
    let imgStyle = {
        width: "350px",
        height: "200px"
    }

    return (

        <div className="container-fluid back" style={{ fontFamily: "MyCustomFont" }}>

            <div className="container pt-4">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <img src={pucitLogo} className="img-fluid" alt="" />
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
                        <h5 className="text-center">The University of the Punjab (Urdu, Punjabi: جامعہ پنجاب), also referred to as Punjab University, is a public, research, coeducational higher education institution located in Lahore, Pakistan. Punjab University is the oldest public university in Pakistan.[1]

With multiple campuses in Gujranwala, Jhelum, and Khanspur, the university was formally established by the British Government after convening the first meeting for establishing higher education institutions in October 1882 at Simla.[5] Punjab University was the fourth university to be established by the British colonial authorities in the Indian subcontinent; the first three universities were established in other parts of British India.[6][7]</h5>
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
                        <Card title='Fee Structure' det="View Detail" link="http://pu.edu.pk/fee" btnColor={redbtn} imgPath={fee} />
                        <Card title='Eligibility Criteria' det="View Detail"  link="http://pu.edu.pk/regulations/contents/Admission-criteria.html" btnColor={redbtn} imgPath={eli} />
                        <Card title='Admission Schedule' det="View Detail" link="http://pu.edu.pk/home/admission_notices"  btnColor={redbtn} imgPath={adm} />

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
                        <Card title='Allama Iqbal Campus' det="Learn More"  btnColor={greenbtn} link="http://pu.edu.pk/home/campus/2" build="Established in 1882" imgPath={oc}/>
                        <Card title='Quaid e Azam Campus' det="Learn More"  btnColor={greenbtn} build="Established in 1882" link='http://pu.edu.pk/home/campus/1' imgPath={nc} />
                        <Card title='Jhelum Campus' det="Learn More"  btnColor={greenbtn} build="Established in 2012" link='http://pu.edu.pk/home/campus/5' imgPath={jlm} />
                     
                    </div>
                </div>
                <div className='container mt-5 pb-4'>
                    <div className='row justify-content-evenly gy-2'>
                        <Card title='Gujranwala Campus' det="Learn More" btnColor={greenbtn} link="http://pu.edu.pk/home/campus/3" build="(Established in August 1900)" imgPath={gjr} />
                        <Card title='Khanspur Campus' det="Learn More" btnColor={greenbtn} link="http://pu.edu.pk/home/campus/4" build="(Established in 2006)" imgPath={kpr} />
                      
                   
                    </div>
                </div>

        </div>
    )
}
