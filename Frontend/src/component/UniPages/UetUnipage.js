import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../css/fastUniHome.css';
import uetLogo from '../../uniHomeImages/uet/uetLogo.png';
import uet1 from '../../uniHomeImages/uet/uet1.jpg';
import uet2 from '../../uniHomeImages/uet/uet2.jpg';
import uet3 from '../../uniHomeImages/uet/uet3.jpg';

import lhr from '../../uniHomeImages/uet/lhr.jpg';
import ksk from '../../uniHomeImages/uet/ksk.jpg';
import nwl from '../../uniHomeImages/uet/nwl.jpg';
import rcet from '../../uniHomeImages/uet/rcet.jpg';
import fsd from '../../uniHomeImages/uet/fsd.jpg';

import adm from '../../uniHomeImages/comsat/adm.jpg';
import eli from '../../uniHomeImages/comsat/eli.jpg';
import fee from '../../uniHomeImages/comsat/fee.jpg';

import Card from './Card';

export default function UetUniPage() {
  const [chemistryResult, setChemistryResult] = useState(null);

  const greenbtn = `btn btn-success`;
  const redbtn = `btn btn-danger`;

  let imgStyle = {
    width: '350px',
    height: '200px',
  };

  useEffect(() => {
    const fetchChemistryResult = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/ChemistryGraphs/Progress');
        setChemistryResult(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChemistryResult();
  }, []);

  return (
    <>
      <div className="container-fluid back" style={{ fontFamily: 'MyCustomFont' }}>
        <div className="container pt-4">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <img src={uetLogo} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div className="container pt-4">
          <div className="row justify-content-evenly gy-4">
            <div className="col-auto">
              <img src={uet1} alt="" className="img-fluid" style={imgStyle} />
            </div>
            <div className="col-auto">
              <img src={uet2} alt="" className="img-fluid" style={imgStyle} />
            </div>
            <div className="col-auto">
              <img src={uet3} alt="" className="img-fluid" style={imgStyle} />
            </div>
          </div>
        </div>

        {chemistryResult && (
  <div className="container my-5">
    <div className="row">
      <div className="col">
        <h2 className="text-center pb-1 borders">Chemistry Result</h2>
        <p>Total Marks: {chemistryResult.totalMarks}</p>
        <p>Obtained Marks: {chemistryResult.obtainedMarks}</p>
        <p>Percentage: {chemistryResult.percentage}%</p>
      </div>
    </div>
  </div>
)}

        <div className="container pt-4">
          <div className="row">
            <div className="col">
              <h5 className="text-center">
                Founded in 1st January 1900 in Mughalpura, a suburban area of Lahore, as Mughalpura Technical College, it later became the 'MacLagan Engineering College', a name given to it in 1913 after Sir Edward Douglas MacLagan, the then Governor of Punjab, who laid the foundation stone of the main building, now called the Main Block. In 1929, it was affiliated with the University of Punjab for the award of Bachelor's Degrees in Electrical and Mechanical Engineering. In 1939, the name was again changed to Punjab College of Engineering and Technology, and a Civil Engineering degree was also started in the college. At the time of partition, part of the college relocated to India, called East Punjab College of Engineering.[4] In 1954, a bachelor's degree program in mining engineering was started. In 1962, it was granted charter and was named the West Pakistan University of Engineering and Technology, Lahore.
              </h5>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h2 className="text-center pb-1 borders">Fundamental Information</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-evenly gy-2">
            <Card title="Fee Structure" det="View Details" link="https://www.uet.edu.pk/admission/admissioninfo/index.html?RID=fee_structure" btnColor={redbtn} imgPath={fee} />
            <Card title="Eligibility Criteria" det="View Details" link="https://www.uet.edu.pk/newsannouncement/newssection/uet_news.html?id=2146#:~:text=MERIT%3A,%25%20marks%20in%20F.Sc." btnColor={redbtn} imgPath={eli} />
            <Card title="Admission Schedule" det="View Details" link="https://www.uet.edu.pk/faculties/facultiesinfo/index.html?RID=academic_calendar" btnColor={redbtn} imgPath={adm} />
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h2 className="text-center pb-1 borders">Campuses</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-evenly gy-2">
            <Card title="Lahore Campus" det="View Details" btnColor={greenbtn} link="https://www.uet.edu.pk/" build="(Established in 1900)" imgPath={lhr} />
            <Card title="Faisalabad Campus" det="View Details" btnColor={greenbtn} build="Established in September 2004" link="https://fsd.uet.edu.pk/" imgPath={fsd} />
            <Card title="NWL Campus" det="View Details" btnColor={greenbtn} build="(Established in 2012)" link="https://nwl.uet.edu.pk/" imgPath={nwl} />
          </div>
        </div>

        <div className="container mt-5 pb-4">
          <div className="row justify-content-evenly gy-2">
            <Card title="RCET Campus" det="View Details" btnColor={greenbtn} link="https://rcet.uet.edu.pk/" build="(Established in 2003)" imgPath={rcet} />
            <Card title="KSK Campus" det="View Details" btnColor={greenbtn} link="https://newcampus.uet.edu.pk/" build="(Established in 2006)" imgPath={ksk} />
          </div>
        </div>
      </div>
    </>
  );
}
