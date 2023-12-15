import { useState } from 'react';
import axios from 'axios';
interface ErrorResponse {
    response: {
      data: {
        error: string;
      };
    };
  }
  
  const useSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
    const signup = async (email: string, password: string) => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
          email,
          password,
        });
  
        if (response.status === 200) {
          setSuccessMessage(response.data.message);
        } else {
          setError(response.data.error);
        }
      } catch (error) {
        console.error('Error occurred during signup:', error);
  
        // Check if the error response is available and contains an error message
        if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.error) {
          const axiosError = error as ErrorResponse;
          setError(axiosError.response.data.error);
        } else {
          setError('Error occurred. Please try again.');
        }
      }
    };
  
    return { email, setEmail, password, setPassword, error, successMessage, signup };
  };
  
  export default useSignUp;