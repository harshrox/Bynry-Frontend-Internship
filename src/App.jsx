// src/App.jsx
import React, { useState } from 'react';
import { ProfileProvider, useProfiles } from './context/ProfileContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AdminPanel from './components/AdminPanel';
import ProfileGrid from './components/ProfileGrid';
import Modal from './components/Modal';
import MapComponent from './components/MapComponent';
import ProfileDetails from './components/ProfileDetails';
import ProfileForm from './components/ProfileForm';
import LoadingSpinner from './components/LoadingSpinner';

const AppContent = () => {
  const { selectedProfile, loading, dispatch } = useProfiles();
  const [showAdmin, setShowAdmin] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    setTimeout(() => {
      dispatch({ type: 'SET_SELECTED_PROFILE', payload: profile });
      setShowMap(true);
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 1000);
  };

  const handleProfileClick = (profile) => {
    dispatch({ type: 'SET_SELECTED_PROFILE', payload: profile });
    setShowProfileDetails(true);
  };

  const handleAddProfile = () => {
    setEditingProfile({
      id: null,
      name: '',
      photo: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=150&h=150&fit=crop&crop=face',
      description: '',
      address: '',
      lat: 0,
      lng: 0,
      email: '',
      phone: '',
      interests: []
    });
  };

  const handleEditProfile = (profile) => {
    setEditingProfile({ ...profile });
  };

  const handleDeleteProfile = (id) => {
    if (window.confirm('Are you sure you want to delete this profile?')) {
      dispatch({ type: 'DELETE_PROFILE', payload: id });
    }
  };

  const handleSaveProfile = (profile) => {
    if (profile.id) {
      dispatch({ type: 'UPDATE_PROFILE', payload: profile });
    } else {
      dispatch({ type: 'ADD_PROFILE', payload: profile });
    }
    setEditingProfile(null);
  };

  const handleViewMapFromDetails = () => {
    setShowProfileDetails(false);
    handleSummaryClick(selectedProfile);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showAdmin={showAdmin} setShowAdmin={setShowAdmin} />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchBar />
        
        {showAdmin && (
          <AdminPanel onAddProfile={handleAddProfile} />
        )}
        
        <ProfileGrid
          showAdmin={showAdmin}
          onSummaryClick={handleSummaryClick}
          onProfileClick={handleProfileClick}
          onEditProfile={handleEditProfile}
          onDeleteProfile={handleDeleteProfile}
        />
      </div>

      {/* Loading Spinner */}
      {loading && <LoadingSpinner message="Loading map..." />}

      {/* Map Modal */}
      <Modal
        isOpen={showMap}
        onClose={() => setShowMap(false)}
        title="Location Summary"
        size="lg"
      >
        {selectedProfile && <MapComponent profile={selectedProfile} />}
      </Modal>

      {/* Profile Details Modal */}
      <Modal
        isOpen={showProfileDetails}
        onClose={() => setShowProfileDetails(false)}
        title="Profile Details"
        size="lg"
      >
        {selectedProfile && (
          <ProfileDetails
            profile={selectedProfile}
            onViewMap={handleViewMapFromDetails}
          />
        )}
      </Modal>

      {/* Profile Form Modal */}
      {editingProfile && (
        <ProfileForm
          profile={editingProfile}
          onSave={handleSaveProfile}
          onCancel={() => setEditingProfile(null)}
        />
      )}
    </div>
  );
};

const App = () => {
  return (
    <ProfileProvider>
      <AppContent />
    </ProfileProvider>
  );
};

export default App;