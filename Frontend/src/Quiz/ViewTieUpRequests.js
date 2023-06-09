import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = ({ counselorName = "Michael Brown" }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/requestsOfStudents/${counselorName}`);
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchData();
  }, [counselorName]);

  return (
    <div>
      <h2>Students of {counselorName}</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <h3>{student.FirstName} {student.LastName}</h3>
            <p>Email: {student.Email}</p>
            <p>Phone Number: {student.PhoneNo}</p>
            {/* Display other student information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
