import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ErrorPages = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Log the missing path to console (can be sent to a backend)
    console.error(`404: Page not found - ${location.pathname}`);

    // Optional: Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, [location, navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Main content */}
      <div className="relative z-10 text-center p-8 bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full animate-slideUp">
        {/* Big 404 Text */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-lg">
          404
        </h1>
        <p className="mt-4 text-2xl font-bold text-white drop-shadow-sm">
          Oops! Page not found
        </p>
        <p className="mt-2 text-gray-100">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        {/* Redirect notice */}
        <p className="mt-4 text-sm text-gray-200">
          Redirecting you to the homepage in 5 seconds...
        </p>

        {/* Go Home Button */}
        <Link
          to="/"
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg transform hover:scale-110 hover:shadow-pink-500/50 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPages;
