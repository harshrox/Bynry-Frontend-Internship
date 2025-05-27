import React from 'react';
import { Search } from 'lucide-react';
import { useProfiles } from '../context/ProfileContext';

const SearchBar = () => {
  const { searchTerm, dispatch } = useProfiles();

  const handleSearchChange = (e) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search profiles by name, description, or location..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;