import React, { useState, useEffect } from 'react';
import '../../ProfileCard.css'; // Import the CSS file for styling
import axios from 'axios';
import image from './Chemistry.jpg';
//import { GetCookies } from './cookieUtils'; // Import your GetCookies function

const CounsellorProfileCard = () => {
  const [counselors, setCounselors] = useState([]);
  const [requestedId, setRequestedId] = useState(null);

  useEffect(() => {
    fetchCounselors();
  }, []);

  const fetchCounselors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/counselors'); // Replace '/counselors' with your actual API endpoint for fetching all counselors
      const sortedCounselors = response.data.sort((a, b) => b.Rate - a.Rate); // Sort counselors based on rate in descending order
      setCounselors(sortedCounselors);
    } catch (error) {
      console.error('Error fetching counselors:', error);
    }
  };

  const handleRequest = async (id, counselorName) => {
    if (requestedId === null) {
      setRequestedId(id);
      //const studentName = GetCookies(); // Assuming GetCookies returns the student's name
      const studentName = "Sameer"
      const requestData = {
        studentName,
        counselorName,
        requestDate: new Date(),
        status: 'pending',
      };

      try {
        const response = await axios.post('http://localhost:5000/api/requests', requestData); // Replace '/requests' with your actual API endpoint for creating a request
        console.log('Request submitted:', response.data);
        // Perform any necessary actions after successful request submission
      } catch (error) {
        console.error('Error submitting request:', error);
        // Handle error case
      }
    }
  };

  const renderProfileCards = () => {
    return counselors.map((counselor, index) => (
      <div key={counselor._id} className={`profile-card animated-card-${index}`}>
        <div className="avatar">
          <img src={image} alt="Profile Avatar" />
        </div>
        <div className="counselor-name">
          {counselor.FirstName} {counselor.LastName}
        </div>
        <div className="counsellor-section">
          <div className="rate-row">
            <div className="rate-title">Rate:</div>
            <div className="rate-value">{counselor.Rate.toString()}</div>
          </div>
          <div className="experience-row">
            <span className="counselor-label">Experience:</span>
            <span className="counselor-value">{counselor.Experience}</span>
          </div>
          <div className="counselor-row">
            <span className="counselor-label">Education:</span>
            <span className="counselor-value">{counselor.Education}</span>
          </div>
          <div className="request-row">
            <button
              type="button"
              className={`request-link${requestedId === counselor._id ? ' requested' : ''}`}
              onClick={() => handleRequest(counselor._id, `${counselor.FirstName} ${counselor.LastName}`)}
              disabled={requestedId !== null && requestedId !== counselor._id}
            >
              {requestedId === counselor._id ? 'Requested' : 'Request for Tie Up'}
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="profile-cards-container">
      <h2 className="page-title">Available Counselors</h2>
      <div className="profile-cards-grid">{renderProfileCards()}</div>
    </div>
  );
};

export default CounsellorProfileCard;
