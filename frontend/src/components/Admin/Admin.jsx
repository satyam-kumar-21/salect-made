// src/components/admin/Admin.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import About from './About';
import NewUpdates from './NewUpdates';
import Gallery from './Gallery';
import Review from './Review';
import Services from './Services';
import Branches from './Branches';
import Contact from './Contact';

const Admin = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow ml-64">
        <AdminHeader />
        <main className="p-4 mt-16">
          
        </main>
      </div>
    </div>
  );
};

export default Admin;
