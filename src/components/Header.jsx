import React from 'react';
import { User, Shield } from 'lucide-react';

const Header = ({ showAdmin, setShowAdmin }) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Profile Explorer
              </h1>
              <p className="text-purple-300/70 text-sm font-medium">
                Discover and manage user profiles
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className={`
              group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 
              flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
              ${showAdmin 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600' 
                : 'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600'
              }
            `}
          >
            <div className="relative">
              {showAdmin ? (
                <User size={20} className="transition-transform group-hover:scale-110" />
              ) : (
                <Shield size={20} className="transition-transform group-hover:scale-110" />
              )}
            </div>
            <span className="relative">
              {showAdmin ? 'User View' : 'Admin Panel'}
            </span>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
        </div>
      </div>
      
      {/* Decorative gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </header>
  );
};

export default Header;