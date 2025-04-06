import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Page Not Found
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go back home
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            Or try these helpful links:
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link
              to="/help"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Help Center
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 