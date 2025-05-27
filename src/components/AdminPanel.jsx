import React from 'react';
import { Plus } from 'lucide-react';

const AdminPanel = ({ onAddProfile }) => {
  return (
    <div className="mb-6 bg-slate-700 p-5 rounded-xl shadow-md border border-slate-600">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Admin Panel</h2>
        <button
          onClick={onAddProfile}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 flex items-center gap-2 transition-all"
        >
          <Plus size={20} />
          Add Profile
        </button>
      </div>
      <div className="text-sm text-slate-200">
        <p>You can add new profiles, edit existing ones or delete them from the profile cards.</p>
        <p className="mt-1">Use the action buttons on each card to manage profiles.</p>
      </div>
    </div>
  );
};

export default AdminPanel;