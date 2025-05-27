import React, { useState } from 'react';
import { X } from 'lucide-react';

const ProfileForm = ({ profile, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    ...profile,
    interests: profile.interests ? profile.interests.join(', ') : ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.lat || isNaN(formData.lat)) newErrors.lat = 'Valid latitude is required';
    if (!formData.lng || isNaN(formData.lng)) newErrors.lng = 'Valid longitude is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const profileData = {
        ...formData,
        lat: parseFloat(formData.lat),
        lng: parseFloat(formData.lng),
        interests: formData.interests 
          ? formData.interests.split(',').map(interest => interest.trim())
          : []
      };
      onSave(profileData);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {profile.name ? 'Edit Profile' : 'Add New Profile'}
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="url"
              value={formData.photo}
              onChange={(e) => handleInputChange('photo', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none resize-none ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              rows="3"
              placeholder="Brief description about the person"
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address *</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="123 Main St, City, State ZIP"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium mb-1">Latitude *</label>
              <input
                type="number"
                step="any"
                value={formData.lat}
                onChange={(e) => handleInputChange('lat', e.target.value)}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.lat ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="40.7128"
              />
              {errors.lat && <p className="text-red-500 text-xs mt-1">{errors.lat}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Longitude *</label>
              <input
                type="number"
                step="any"
                value={formData.lng}
                onChange={(e) => handleInputChange('lng', e.target.value)}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.lng ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="-74.0060"
              />
              {errors.lng && <p className="text-red-500 text-xs mt-1">{errors.lng}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="email@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Interests</label>
            <input
              type="text"
              value={formData.interests}
              onChange={(e) => handleInputChange('interests', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Web Development, Photography, Travel (comma separated)"
            />
            <p className="text-xs text-gray-500 mt-1">Separate multiple interests with commas</p>
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Save Profile
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;