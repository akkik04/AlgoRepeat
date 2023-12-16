import React, { useEffect } from 'react';
import useLogIn from '../../hooks/useLogIn';
import { useNavigate } from 'react-router-dom';


const LogIn = () => {
  const { email, setEmail, password, setPassword, successMessage, error, login } = useLogIn();
  const navigate = useNavigate();
  const primaryColor = '#000';

  const handleLogIn = async () => {
    await login(email, password);
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (successMessage) {
      alert(successMessage);
      navigate('/dashboard')
    }
  }, [successMessage]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-8 text-center flex flex-col gap-10">
        <h2 className="text-3xl font-bold mb-4" style={{ color: primaryColor }}>
          Log In
        </h2>
        <div className="login-box bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
          <label className="block text-lg font-semibold mb-2" style={{ color: primaryColor }}>
            Email
          </label>
          <input
            type="email"
            className="border rounded p-3 mb-4 w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block text-lg font-semibold mb-2" style={{ color: primaryColor }}>
            Password
          </label>
          <input
            type="password"
            className="border rounded p-3 mb-4 w-full"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700 transition duration-300"
            onClick={handleLogIn}
          >
            Log In
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
