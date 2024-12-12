import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import left from '../../assets/images/left.png';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleServer = async (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      toast.error('Please accept the terms and conditions');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if(response.ok){
        setUser({
          name: '',
          username: '',
          email: '',
          password: '',
        });
        setAcceptTerms(false);
        navigate('/login');
      }

      if (!response.ok) {
        throw new Error('Failed to register. Please try again.');
      }

      const data = await response.json();
      toast.success('Registration successful!');
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'An error occurred. Please try again.');
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <img src={left} alt="Illustration" className="max-w-xs md:max-w-md" />
      </div>
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="max-w-md w-full">
          <h2 className="mt-8 text-3xl font-bold">Sign up</h2>
          <Link to="/login" className="mt-2 text-gray-500 block">
            Already have an account?{' '}
            <span className="text-green-500 cursor-pointer text-lg">Sign in</span>
          </Link>
          <form className="mt-6 space-y-6" onSubmit={handleServer}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={user.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
                className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={user.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <EyeOff size={20} className="text-gray-500" />
                ) : (
                  <Eye size={20} className="text-gray-500" />
                )}
              </span>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-5 w-5 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree with{' '}
                <span className="text-green-500 cursor-pointer font-bold">Privacy Policy</span> and{' '}
                <span className="text-green-500 font-bold cursor-pointer">Terms of Use</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full mt-6 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
