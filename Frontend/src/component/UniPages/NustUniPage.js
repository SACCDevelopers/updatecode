import React from 'react'
import '../css/fastUniHome.css'
import nustLogo from '../../uniHomeImages/nust/nustLogo.png'
import nust1 from '../../uniHomeImages/nust/nust1.jpg'
import nust2 from '../../uniHomeImages/nust/nust2.jpg'
import nust3 from '../../uniHomeImages/nust/nust3.jpg'

import karachi from '../../uniHomeImages/nust/karachi.jpg'
import isl from '../../uniHomeImages/nust/isl.jpg'
import rwl from '../../uniHomeImages/nust/rwl.jpg'
import rslpr from '../../uniHomeImages/nust/rslpr.jpg'
import Quetta from '../../uniHomeImages/nust/qta.jpg'



import adm from '../../uniHomeImages/comsat/adm.jpg'

import eli from '../../uniHomeImages/comsat/eli.jpg'
import fee from '../../uniHomeImages/comsat/fee.jpg'
import Card from './Card'


export default function NustUniPage() {
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
                        <img src={nustLogo} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>


            <div className="container pt-4">
                <div className="row justify-content-evenly gy-4">
                    <div className="col-auto">
                        <img src={nust1} alt="" className="img-fluid" style={imgStyle} />
                    </div>
                    <div className="col-auto">
                        <img src={nust2} alt="" className="img-fluid" style={imgStyle} />
                    </div>
                    <div className="col-auto">
                        <img src={nust3} alt="" className="img-fluid" style={imgStyle} />
                    </div>
                </div>
            </div>

            <div className="container pt-4">
                <div className="row">
                    <div className="col">
                        <h5 className="text-center">The National University of Sciences & Technology (NUST) (Urdu: قومی جامعہ برائے سائنس و ٹیکنالوجی, romanized: Qaumī Jāmi'ā barā'e Sāins va Ṭaiknālōjī) is a multi-campus public research university with its main campus in Islamabad, Pakistan.

                            The university offers undergraduate and graduate degrees, including doctoral and professional degrees. Founded in 1990, it was initially formed for the need of commissioned officers by combining engineering colleges and schools. Later, it was converted into a public research university with the main campus setup in Islamabad to promote science and technology in Pakistan.[2]

                            Founded to provide quality technical education to support rapid industrialization in Pakistan, NUST adopted an American university model and stressed laboratory instruction in applied science and engineering</h5>
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
                        <Card title='Fee Structure' det="View Details" link="https://nust.edu.pk/admissions/fee-structure/" btnColor={redbtn} imgPath={fee} />
                        <Card title='Eligibility Criteria' det="View Details"  link="https://nust.edu.pk/admissions/undergraduates/eligibility-criteria-for-ug-programmes/" btnColor={redbtn} imgPath={eli} />
                        <Card title='Admission Schedule' det="View Details" link="https://ugadmissions.nust.edu.pk/"  btnColor={redbtn} imgPath={adm} />

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
                        <Card title='Quetta Campus' det="Learn More" btnColor={greenbtn} link="https://nbc.nust.edu.pk/" build="(Established in 2019)" imgPath={Quetta}/>
                        <Card title='Islamabad Campus' det="Learn More" btnColor={greenbtn} build="Established in 2008" link='https://nust.edu.pk/' imgPath={isl} />
                        <Card title='Karachi Campus' det="Learn More" btnColor={greenbtn} build="Established in  1962" link='https://pnec.nust.edu.pk/' imgPath={karachi} />
                       
                    </div>
                </div>
                <div className='container mt-5 pb-4'>
                    <div className='row justify-content-evenly gy-2'>
                        <Card title='Rawalpindi Campus' det="Learn More" btnColor={greenbtn} link="https://ceme.nust.edu.pk/" build="(Established in August 1947)" imgPath={rwl} />
                        <Card title='Risalpur Campus' det="Learn More" btnColor={greenbtn} link="https://mce.nust.edu.pk/" build="(Established in 1952)" imgPath={rslpr} />
                     
                   
                    </div>
                </div>


        </div>



    )
}
