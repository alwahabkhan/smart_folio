import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigator = useNavigate()
  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    validateEmail();
    validatePassword();

    // Check if there are any validation errors before submitting the form
    if (!emailError && !passwordError) {
      // Create a data object to hold the form field values
      const formData = {
        email,
        password,
      };
      await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status) {
            setEmail("");
            setPassword("");

            
            console.log(response)
            localStorage.setItem('_id',response.result._id)
            localStorage.setItem('name',response.result.fullName)
            localStorage.setItem('email',response.result.email)
            localStorage.setItem('phoneNo',response.result.phoneNo)
            navigator("/");
          } else {
            alert(response.message)
          }
        });
      // Reset the form fields if needed
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
    }
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-800'>
      <form className='bg-gray-900 p-8 rounded-lg shadow-lg' onSubmit={handleSubmit}>
        <h2 className='text-4xl text-white font-bold text-center mb-6'>Login</h2>

        {/* Email input field */}
        <div className='mb-4'>
          <label htmlFor="email" className='block text-gray-400'>Email:</label>
          <input
            id="email"
            type="text"
            className='w-full rounded-lg bg-gray-700 py-2 px-3 text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          <span className='text-red-500'>{emailError}</span>
        </div>

        {/* Password input field */}
        <div className='mb-4'>
          <label htmlFor="password" className='block text-gray-400'>Password:</label>
          <input
            id="password"
            type="password"
            className='w-full rounded-lg bg-gray-700 py-2 px-3 text-gray-300 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          <span className='text-red-500'>{passwordError}</span>
        </div>

        {/* Submit button */}
        <button className='w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg' type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
