import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-6">
        {user ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/patients">Patients</Link></li>
            <li><Link to="/staff">Staff</Link></li>
            <li><Link to="/finance">Finance</Link></li>
            <li><button onClick={handleLogout} className="bg-red-500 p-2 rounded">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;