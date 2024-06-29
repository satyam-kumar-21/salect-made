import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admin from "./components/Admin/Admin.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import AdminLogin from "./components/Admin/AdminLogin.jsx";
import About from "./components/Admin/About.jsx";
import NewUpdates from "./components/Admin/NewUpdates.jsx";
import Gallery from "./components/Admin/Gallery.jsx";
import Review from "./components/Admin/Review.jsx";
import Services from "./components/Admin/Services.jsx";
import Branches from "./components/Admin/Branches.jsx";
import Contact from "./components/Admin/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />


        <Route path="/admin/about" element={<About />} />
            <Route path="/admin/new-updates" element={<NewUpdates />} />
            <Route path="/admin/gallery" element={<Gallery />} />
            <Route path="/admin/review" element={<Review />} />
            <Route path="/admin/services" element={<Services />} />
            <Route path="/admin/branches" element={<Branches />} />
            <Route path="/admin/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
