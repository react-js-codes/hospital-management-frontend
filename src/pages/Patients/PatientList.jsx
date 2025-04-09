import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PatientList.css';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('https://hospital-management-backend3.onrender.com/api/patients', {
      headers: { 'x-auth-token': localStorage.getItem('token') },
    }).then((res) => setPatients(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Patient List</h2>
      <ul className="space-y-2">
      <table className="patient-table">
      <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Condition</th>
    </tr>
  </thead>
        {patients.map((patient) => (
           

            // In your component file
   
  <tbody>
    {patients.map((patient) => (
      <tr key={patient.id}>
        <td>{patient.name}</td>
        <td>{patient.age}</td>
        <td>{patient.condition}</td>
      </tr>
    ))}
  </tbody>
 
          
        ))}
</table>
      </ul>
    </div>
  );
};

export default PatientList;