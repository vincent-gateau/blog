import React from 'react';
import LoginComponent from '../components/LoginComponent';
import CreateAccountForm from '../components/CreateAccountForm';

const Login = () => {
  return (
    <div className="flex min-h-screen bg-base-200">
      <div className="w-1/2 flex items-center justify-center p-10">
        <LoginComponent />
      </div>
      <div className="w-1/2 bg-base-300 flex items-center justify-center">
        <CreateAccountForm />
      </div>
    </div>
  );
};

export default Login;
