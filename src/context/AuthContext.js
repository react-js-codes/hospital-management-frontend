import axios from 'axios';
import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const res = await axios.post('https://hospital-management-backend3.onrender.com/api/auth/login', { email, password });
      console.log('Login success:', res.data);
      localStorage.setItem('token', res.data.token); // Store token
      setUser({ email }); // Update auth state
      navigate('/dashboard'); // Redirect to dashboard
      return res.data;
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);