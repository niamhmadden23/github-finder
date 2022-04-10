import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-6xl mb-5">404 - Page Not found</h1>
      <p className="text-3xl mb-5">The page you're looking for doesn't exist</p>
      <Link to="/" className="btn btn-secondary">
        <FaHome className="mr-2" />
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
