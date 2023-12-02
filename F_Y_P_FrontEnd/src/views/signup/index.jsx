import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  // State variables for form fields and error messages
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigator = useNavigate();
  // Validation functions for each form field
  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = () => {
    if (!phone) {
      setPhoneError("Phone number is required");
    } else {
      setPhoneError("");
    }
  };

  const validateFullName = () => {
    if (!fullName) {
      setFullNameError("Full name is required");
    } else {
      setFullNameError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all form fields
    validateEmail();
    validatePhone();
    validateFullName();
    validatePassword();
    validateConfirmPassword();

    // Check if there are any validation errors before submitting the form
    if (
      !emailError &&
      !phoneError &&
      !fullNameError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          phoneNo:phone,
          fullName:fullName
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status) {
            setEmail("");
            setPhone("");
            setFullName("");
            setPassword("");
            setConfirmPassword("");
            setEmailError("");
            setPhoneError("");
            setFullNameError("");
            setPasswordError("");
            setConfirmPasswordError("");
            navigator("/");
            localStorage.setItem('_id',response.result._id)
          } else {
            alert(response.message)
          }
        });
      // Reset the form fields and error messages
    }
  };

  // Render the form with input fields and error messages
  return (
    <div className="h-screen w-full">
      <div className="bg-gray-800 flex flex-col justify-center h-full">
        <form
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl text-white font-bold text-center">
            Sign Up
          </h2>
    <br/>
          {/* Email input field */}
          <div className="flex flex-col text-gray-400 py-2">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              id="email"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            <span className="text-red-500">{emailError}</span>
          </div>

          {/* Phone input field */}
          <div className="flex flex-col text-gray-400 py-2">
            {/* <label htmlFor="phone">Phone No:</label> */}
            <input
              id="phone"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              placeholder="Enter your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={validatePhone}
            />
            <span className="text-red-500">{phoneError}</span>
          </div>

          {/* Full Name input field */}
          <div className="flex flex-col text-gray-400 py-2">
            {/* <label htmlFor="fullName">Full Name:</label> */}
            <input
              id="fullName"
              type="text"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              placeholder="Enter your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={validateFullName}
            />
            <span className="text-red-500">{fullNameError}</span>
          </div>

          {/* Password input field */}
          <div className="flex flex-col text-gray-400 py-2">
            {/* <label htmlFor="password">Password:</label> */}
            <input
              id="password"
              type="password"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
            <span className="text-red-500">{passwordError}</span>
          </div>

          {/* Confirm Password input field */}
          <div className="flex flex-col text-gray-400 py-2">
            {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
            <input
              id="confirmPassword"
              type="password"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateConfirmPassword}
            />
            <span className="text-red-500">{confirmPasswordError}</span>
          </div>

          {/* Submit button */}
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
