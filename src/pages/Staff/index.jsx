import React, { useState } from 'react';
import axios from 'axios';

const Staff = () => {
  const [form, setForm] = useState({ name: '', role: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://hospital-management-backend3.onrender.com/api/staff', form, {
      headers: { 'x-auth-token': localStorage.getItem('token') },
    });
    setForm({ name: '', role: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Staff Dashboard</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Staff</button>
      </form>
    </div>
  );
};

export default Staff;