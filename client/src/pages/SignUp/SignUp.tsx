import React, { useEffect } from 'react';
import useSignUp from '../../hooks/useSignUp'; // Adjust the import path

const SignUp = () => {
  const { email, setEmail, password, setPassword, successMessage, error, signup } = useSignUp();
  const primaryColor = '#000'; // Change this to the actual primary color

  const handleSignUp = async () => {
    await signup(email, password);
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (successMessage) {
      alert(successMessage);
    }
  }, [successMessage]);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-8 text-center flex flex-col gap-10">
        <h2 className="text-3xl font-bold mb-4" style={{ color: primaryColor }}>
          Sign Up
        </h2>
        <div className="signup-box bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
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
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
