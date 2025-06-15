// src/components/RGPVLogin.jsx
import React, { useState } from 'react';
import { User, Lock, RefreshCw } from 'lucide-react';

const RGPVLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaText, setCaptchaText] = useState('152.43');

  const refreshCaptcha = () => {
    const newCaptcha = Math.floor(Math.random() * 900 + 100) + '.' + Math.floor(Math.random() * 100);
    setCaptchaText(newCaptcha);
  };

  const handleSignIn = () => {
    console.log('Login attempt:', { username, password, captcha });
    // Add your login logic here
    alert('Login functionality to be implemented');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Add forgot password logic here
    alert('Forgot password functionality to be implemented');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl overflow-hidden">
        {/* Header */}
        <div className="bg-white px-8 py-6 border-b">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-2xl">🎓</div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-700">RGPV</h1>
              <h2 className="text-lg text-gray-600">Rajiv Gandhi Proudyogiki Vishwavidyalaya</h2>
              <p className="text-sm text-gray-500">(State Technological University of M.P.)</p>
              <p className="text-xs text-red-600">An ISO 9001:2015 Certified Organization</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Instructions */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-8">
            <div className="bg-gray-800 text-white p-4 rounded-t-md">
              <h3 className="text-lg font-semibold text-yellow-400">Important Instructions</h3>
            </div>
            <div className="bg-white p-6 rounded-b-md border border-gray-200">
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  All the passwords are in encrypted format and cannot be read by any other user.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  If you are not a registered user then please register through the portal.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Please register your authentic Email-ID on the portal used for sending the verification Email, in case you have forgotten your Password or you want to reset your Password.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  The user cannot reset the Password of another user.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  The user himself needs to reset his password in case he/she has forgotten the Password. Click on the "Forgot Password" tab and enter the registered Email-ID. The reset link will be sent on the registered Email for resetting the Password.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="w-full lg:w-1/2 bg-white p-8">
            <div className="bg-gray-800 text-white p-4 rounded-t-md">
              <h3 className="text-lg font-semibold text-blue-400">Sign In to Your Account</h3>
            </div>
            <div className="bg-white p-6 rounded-b-md border border-gray-200">
              <div className="space-y-6">
                {/* Username Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Username"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <p className="text-xs text-red-500 mt-1">Password Case-Sensitive</p>
                </div>

                {/* Captcha */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type the characters you see in the picture below
                  </label>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gray-200 border-2 border-gray-300 px-4 py-2 rounded font-mono text-lg font-bold select-none">
                      {captchaText}
                    </div>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="p-2 text-blue-600 hover:text-blue-800 transition-colors rounded-md hover:bg-blue-50"
                      title="Refresh Captcha"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Enter captcha"
                    required
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    Forgot Password?
                  </button>
                  <button
                    type="button"
                    onClick={handleSignIn}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Button */}
        <div className="fixed bottom-6 right-6">
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium shadow-lg transition-colors"
            onClick={() => alert('Help functionality to be implemented')}
          >
            Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default RGPVLogin;