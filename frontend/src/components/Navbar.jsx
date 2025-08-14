import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4 sticky top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">KPA Engineer</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-200 transition-colors">Portfolio</Link>
          <Link to="/blog" className="hover:text-blue-200 transition-colors">Blog</Link>
          <Link to="/trends" className="hover:text-blue-200 transition-colors">Trends</Link>
          <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;