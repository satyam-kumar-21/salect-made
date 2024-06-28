import React from 'react';
import BranchCard from './BranchCard'; // Adjust the import path based on your project structure

const branches = [
  {
    name: 'Branch 1',
    address: '123 Main St, City, Country',
    phone: '123-456-7890',
    email: 'branch1@example.com',
    image: 'https://via.placeholder.com/400x300', // Example image URL
  },
  {
    name: 'Branch 2',
    address: '456 Elm St, City, Country',
    phone: '987-654-3210',
    email: 'branch2@example.com',
    image: 'https://via.placeholder.com/400x300', // Example image URL
  },
  {
    name: 'Branch 3',
    address: '789 Oak St, City, Country',
    phone: '456-789-1234',
    email: 'branch3@example.com',
    image: 'https://via.placeholder.com/400x300', // Example image URL
  },
 
 
];

const Branches = () => {
  return (
    <section id='branches' className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Our Branches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <BranchCard
                key={index}
                name={branch.name}
                address={branch.address}
                phone={branch.phone}
                email={branch.email}
                image={branch.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
