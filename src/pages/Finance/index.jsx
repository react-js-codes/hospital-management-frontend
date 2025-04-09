import React, { useState } from 'react';
import axios from 'axios';

const Finance = () => {
  const [form, setForm] = useState({ type: 'revenue', amount: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://hospital-management-backend3.onrender.com/api/finance', { ...form, amount: Number(form.amount) }, {
      headers: { 'x-auth-token': localStorage.getItem('token') },
    });
    setForm({ type: 'revenue', amount: '' });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Finance Dashboard</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 w-full"
        >
          <option value="revenue">Revenue</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Transaction</button>
      </form>
    </div>
  );
};

export default Finance;