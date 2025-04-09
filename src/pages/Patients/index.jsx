import React from 'react';
import PatientForm from './PatientForm';
import { Link } from 'react-router-dom';

const Patients = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Patients Dashboard</h2>
      <PatientForm />
      <Link to="/patient-list" className="text-blue-500 underline">View Patient List</Link>
    </div>
  );
};

export default Patients;