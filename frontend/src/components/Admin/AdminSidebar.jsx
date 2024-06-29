// src/components/admin/AdminSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed shadow-lg">
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Admin Panel</h2>
        <nav>
          <ul className="space-y-6">
            <li className="text-center">
              <Link to="/admin/about" className="hover:bg-gray-700 py-2 px-4 block rounded transition duration-300">About</Link>
            </li>
            <li className="text-center">
              <Link to="/admin/new-updates" className="hover:bg-gray-700 py-2 px-4 block rounded transition duration-300">New Updates</Link>
            </li>
            <li className="text-center">
              <Link to="/admin/gallery" className="hover:bg-gray-700 py-2 px-4 block rounded transition duration-300">Gallery</Link>
            </li>
            <li className="text-center">
              <Link to="/admin/review" className="hover:bg-gray-700 py-2 px-4 block rounded transition duration-300">Review</Link>
            </li>
            <li className="text-center">
              <Link to="/admin/services" className="hover:bg-gray-700 py-2 px-4 block rounded transition duration-300">Services</Link>
            </li>
            <li className="text-center">
              <Link to="/admin/branches" className="hover:bg-gray-700 py-2 px-4 block rounded transition duration-300">Branches</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
