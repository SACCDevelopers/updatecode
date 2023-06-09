import React, { useEffect, useState } from 'react';
import './SubjectMarks.css';

const SubjectMarks = () => {
  const [chemistryMarks, setChemistryMarks] = useState({});
  const [physicsMarks, setPhysicsMarks] = useState({});
  const [mathsMarks, setMathsMarks] = useState({});
  const [englishMarks, setEnglishMarks] = useState({});
  const [iqMarks, setIqMarks] = useState({});
  const [computerMarks, setComputerMarks] = useState({});

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const chemistryResponse = await fetch('http://localhost:5000/api/ChemistryGraphs/Progress');
        const chemistryData = await chemistryResponse.json();
        setChemistryMarks(chemistryData);

        const physicsResponse = await fetch('http://localhost:5000/api/PhysicsGraphs/Progress');
        const physicsData = await physicsResponse.json();
        setPhysicsMarks(physicsData);

        const mathsResponse = await fetch('http://localhost:5000/api/BasicMathsGraphs/Progress');
        const mathsData = await mathsResponse.json();
        setMathsMarks(mathsData);

        const englishResponse = await fetch('http://localhost:5000/api/EnglishGraphs/Progress');
        const englishData = await englishResponse.json();
        setEnglishMarks(englishData);

        const iqResponse = await fetch('http://localhost:5000/api/IQGraphs/Progress');
        const iqData = await iqResponse.json();
        setIqMarks(iqData);

        const computerResponse = await fetch('http://localhost:5000/api/ComputerGraphs/Progress');
        const computerData = await computerResponse.json();
        setComputerMarks(computerData);
      } catch (error) {
        console.error('Error fetching subject marks:', error);
      }
    };

    fetchMarks();
  }, []);

  return (
    <div className="subject-marks-container">
      <div className="subject-bar">
        <div className="bar" style={{ width: `${(chemistryMarks.obtainedMarks / chemistryMarks.totalMarks) * 100}%` }}>
          Chemistry: {chemistryMarks.obtainedMarks}/{chemistryMarks.totalMarks}
        </div>
        <div className="bar" style={{ width: `${(physicsMarks.obtainedMarks / physicsMarks.totalMarks) * 100}%` }}>
          Physics: {physicsMarks.obtainedMarks}/{physicsMarks.totalMarks}
        </div>
        <div className="bar" style={{ width: `${(mathsMarks.obtainedMarks / mathsMarks.totalMarks) * 100}%` }}>
          Maths: {mathsMarks.obtainedMarks}/{mathsMarks.totalMarks}
        </div>
        <div className="bar" style={{ width: `${(englishMarks.obtainedMarks / englishMarks.totalMarks) * 100}%` }}>
          English: {englishMarks.obtainedMarks}/{englishMarks.totalMarks}
        </div>
        <div className="bar" style={{ width: `${(iqMarks.obtainedMarks / iqMarks.totalMarks) * 100}%` }}>
          IQ: {iqMarks.obtainedMarks}/{iqMarks.totalMarks}
        </div>
        <div className="bar" style={{ width: `${(computerMarks.obtainedMarks / computerMarks.totalMarks) * 100}%` }}>
          Computer: {computerMarks.obtainedMarks}/{computerMarks.totalMarks}
        </div>
      </div>
    </div>
  );
};

export default SubjectMarks;
