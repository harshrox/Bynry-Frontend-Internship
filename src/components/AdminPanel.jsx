import React from 'react';
import { Plus } from 'lucide-react';

const AdminPanel = ({ onAddProfile }) => {
  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
        <button
          onClick={onAddProfile}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2 transition-colors"
        >
          <Plus size={20} />
          Add Profile
        </button>
      </div>
      <div className="text-sm text-gray-600">
        <p>From here you can add new profiles, edit existing ones, or delete profiles.</p>
        <p>Use the action buttons on each profile card to edit or delete.</p>
      </div>
    </div>
  );
};

export default AdminPanel;