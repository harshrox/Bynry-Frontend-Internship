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
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 border border-purple-500/20 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-full h-48 object-cover rounded-t-xl cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => onProfileClick(profile)}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{profile.name}</h3>
        <p className="text-purple-200/80 text-sm mb-3 line-clamp-2">{profile.description}</p>
        <p className="text-purple-300/70 text-xs mb-4 flex items-center gap-1">
          <MapPin size={12} />
          {profile.address}
        </p>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => onSummaryClick(profile)}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-3 rounded-lg text-sm hover:from-indigo-600 hover:to-purple-600 flex items-center justify-center gap-1 transition-colors"
          >
            <MapPin size={16} />
            Summary
          </button>
          <button
            onClick={() => onProfileClick(profile)}
            className="bg-gray-700 text-white py-2 px-3 rounded-lg text-sm hover:bg-gray-600 transition-colors"
          >
            <Eye size={16} />
          </button>

          {showAdmin && (
            <>
              <button
                onClick={() => onEditProfile(profile)}
                className="bg-yellow-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-yellow-500 transition-colors"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => onDeleteProfile(profile.id)}
                className="bg-red-600 text-white py-2 px-3 rounded-lg text-sm hover:bg-red-500 transition-colors"
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
