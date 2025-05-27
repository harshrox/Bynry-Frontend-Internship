import React from 'react';
import { Search } from 'lucide-react';
import { useProfiles } from '../context/ProfileContext';

const SearchBar = () => {
  const { searchTerm, dispatch } = useProfiles();

  const handleSearchChange = (e) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
  };

  return (
    <div className="mb-6 px-6">
      <div className="relative">
        <Search className="absolute left-4 top-3 text-purple-300" size={20} />
        <input
          type="text"
          placeholder="Search profiles by name, description, or location..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-12 pr-4 py-2 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-white placeholder-purple-300/60 
                     border border-purple-500/20 shadow-inner focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
        />
      </div>
    </div>
  );
};

export default SearchBar;
