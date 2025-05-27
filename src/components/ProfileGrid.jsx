import React from 'react';
import ProfileCard from './ProfileCard';
import { useProfiles } from '../context/ProfileContext';

const ProfileGrid = ({ 
  showAdmin, 
  onSummaryClick, 
  onProfileClick, 
  onEditProfile, 
  onDeleteProfile 
}) => {
  const { filteredProfiles } = useProfiles();

  if (filteredProfiles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No profiles found matching your search.</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your search terms.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProfiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          showAdmin={showAdmin}
          onSummaryClick={onSummaryClick}
          onProfileClick={onProfileClick}
          onEditProfile={onEditProfile}
          onDeleteProfile={onDeleteProfile}
        />
      ))}
    </div>
  );
};

export default ProfileGrid;