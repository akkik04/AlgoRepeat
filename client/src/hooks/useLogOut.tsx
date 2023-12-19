import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useLogOut = () => {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/logout`);
      
      if (response.status === 200) {
        setSuccessMessage(response.data.message);

        // Remove the access token from local storage
        localStorage.removeItem('accessToken');

        // Redirect to the main page after successful logout
        navigate('/');
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      console.error('Error occurred during logout:', error);
      setError('Error occurred. Please try again.');
    }
  };

  return { error, successMessage, logout };
};

export default useLogOut;
