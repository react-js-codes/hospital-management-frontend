import React, { useState } from 'react';
import axios from 'axios';

const PatientForm = () => {
  const [form, setForm] = useState({ name: '', age: '', gender:'', condition: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://hospital-management-backend3.onrender.com/api/patients', form, {
      headers: { 'x-auth-token': localStorage.getItem('token') },
    });
    setForm({ name: '', age: '', gender:'', condition: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        className="border p-2 w-full"
      />
      <select 
       type="text"
       value={form.gender}
       onChange={(e) => setForm({ ...form, gender: e.target.value })}
       className="border p-2 w-full" 
      >
        <option>
            Male
        </option>
        <option>
            Female
        </option>
      </select>
      <input
        type="text"
        placeholder="Condition"
        value={form.condition}
        onChange={(e) => setForm({ ...form, condition: e.target.value })}
        className="border p-2 w-full"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Patient</button>
    </form>
  );
};

export default PatientForm;