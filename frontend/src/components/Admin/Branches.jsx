import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';

function Branches() {
  const [branches, setBranches] = useState([]);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    image: null,
  });
  const [isAddingBranch, setIsAddingBranch] = useState(false);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get('http://localhost:3000/branch/get-all-branches'); // Replace with your actual API endpoint
        setBranches(response.data);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchBranches();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/branch/delete-branch/${id}`); // Replace with your actual API endpoint
      setBranches(branches.filter(branch => branch._id !== id));
    } catch (error) {
      setError('Error deleting branch');
    }
  };

  const handleOpenAddBranch = () => {
    setIsAddingBranch(true);
  };

  const handleCloseAddBranch = () => {
    setIsAddingBranch(false);
    setFormData({
      name: '',
      address: '',
      phone: '',
      email: '',
      image: null,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('image', formData.image);

      const response = await axios.post('http://localhost:3000/branch/create-branch', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setBranches([...branches, response.data]);
      handleCloseAddBranch();
    } catch (error) {
      setError('Error creating new branch');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow ml-64 bg-gray-700 min-h-screen">
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Manage Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branches.map(branch => (
              <div key={branch._id} className="bg-gray-800 rounded-lg p-4 shadow-md">
                <h3 className="text-xl font-bold mb-2 text-white">{branch.name}</h3>
                <p className="text-gray-300 mb-4">{branch.address}</p>
                <p className="text-gray-300 mb-4">Phone: {branch.phone}</p>
                <p className="text-gray-300 mb-4">Email: {branch.email}</p>
                {branch.image && (
                  <img
                    src={branch.image} // Assuming image is a URL fetched from backend
                    alt={branch.name}
                    className="rounded-lg object-cover h-48 w-full mb-4"
                  />
                )}
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(branch._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Delete
                  </button>
                  {/* Update button functionality to be added */}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button
              onClick={handleOpenAddBranch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add New Branch
            </button>
          </div>
        </div>
      </div>

      {/* Add New Branch Dialog */}
      {isAddingBranch && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-100 w-3/4 md:max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4 text-black">Add New Branch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Branch Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseAddBranch}
                    className="mr-2 bg-gray-600 hover:bg-gray-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Branch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Branches;
