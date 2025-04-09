import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

   

const login = async (email, password) => {
  try {
    const res = await axios.post('https://hospital-management-backend3.onrender.com/api/auth/login', { email, password });
    console.log('Login success:', res.data); // Should log the token
    // Store token (e.g., localStorage)
    localStorage.setItem('token', res.data.token);
    return res.data;
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    throw error;
  }
};

  const register = async (email, password, role) => {
    const res = await axios.post('https://hospital-management-backend3.onrender.com/api/auth/register', { email, password, role });
    localStorage.setItem('token', res.data.token);
    console.log("suresh");
    setUser({ token: res.data.token });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);