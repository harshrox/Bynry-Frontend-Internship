import React from 'react';
import { User } from 'lucide-react';

const Header = ({ showAdmin, setShowAdmin }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Profile Explorer</h1>
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2 transition-colors"
          >
            <User size={20} />
            {showAdmin ? 'User View' : 'Admin Panel'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;