import React, { useState, useEffect } from 'react';
import '../ProfileCard.css'; // Import the CSS file for styling
import axios from 'axios';
import image from './Chemistry.jpg';

const ProfileCard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students'); // Replace '/students' with your actual API endpoint for fetching all students
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const renderProfileCards = () => {
    return students.map((student, index) => (
      <div
        key={student._id}
        className={`profile-card animated-card-${index}`}
      >
        <div className="avatar">
          <img src={image} alt="Profile Avatar" />
        </div>
        <div className="student-name">{student.FirstName}</div>
        <div className="marks-section">
          <div className="marks-row">
            <div className="marks">
              <p className="mark-title">Matric Marks:</p>
              <span className="mark-value">{student.ObtainedMatricMarks}</span>
            </div>
            <div className="marks">
              <p className="mark-title">Inter Marks:</p>
              <span className="mark-value">{student.ObtainedInterMarks}</span>
            </div>
            <div className="marks">
              <p className="mark-title">Quizzes Percentage:</p>
              <span className="mark-value">{student.quizzesPercentage}%</span>
            </div>
          </div>
          <div className="counselor-row">
            <span className="counselor-label">Counselor:</span>
            <span className="counselor-name">{student.CounsellorName}</span>
          </div>
        </div>
      </div>
    ));
  };


  return (
    <div className="profile-cards-container">
      <h2 className="page-title">All Students</h2>
      <div className="profile-cards-grid">{renderProfileCards()}</div>
    </div>
  );
};

export default ProfileCard;
