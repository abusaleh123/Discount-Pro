import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div>
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 btn border-orange-400 hover:border-orange-400"
        >
          Go Back Home
        </button>
      </div>
    </div>
        </div>
    );
};

export default ErrorPage;