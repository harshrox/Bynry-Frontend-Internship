import React from 'react';
import { MapPin, Eye, Edit2, Trash2 } from 'lucide-react';

const ProfileCard = ({ 
  profile, 
  showAdmin, 
  onSummaryClick, 
  onProfileClick, 
  onEditProfile, 
  onDeleteProfile 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => onProfileClick(profile)}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{profile.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{profile.description}</p>
        <p className="text-gray-500 text-xs mb-4 flex items-center gap-1">
          <MapPin size={12} />
          {profile.address}
        </p>
        
        <div className="flex gap-2">
          <button
            onClick={() => onSummaryClick(profile)}
            className="flex-1 bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600 flex items-center justify-center gap-1 transition-colors"
          >
            <MapPin size={16} />
            Summary
          </button>
          <button
            onClick={() => onProfileClick(profile)}
            className="bg-gray-500 text-white py-2 px-3 rounded text-sm hover:bg-gray-600 transition-colors"
          >
            <Eye size={16} />
          </button>
          
          {showAdmin && (
            <>
              <button
                onClick={() => onEditProfile(profile)}
                className="bg-yellow-500 text-white py-2 px-3 rounded text-sm hover:bg-yellow-600 transition-colors"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => onDeleteProfile(profile.id)}
                className="bg-red-500 text-white py-2 px-3 rounded text-sm hover:bg-red-600 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;