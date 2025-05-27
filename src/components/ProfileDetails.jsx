import React from 'react';
import { MapPin, Mail, Phone, User } from 'lucide-react';

const ProfileDetails = ({ profile, onViewMap }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-64 md:h-auto object-cover rounded-2xl shadow-lg border-4 border-white"
        />
      </div>
      
      <div className="md:w-2/3">
        <h3 className="text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">{profile.name}</h3>
        <p className="text-slate-600 mb-8 text-lg leading-relaxed font-medium">{profile.description}</p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
            <MapPin className="text-orange-600 mt-1 flex-shrink-0" size={22} />
            <div>
              <p className="font-bold text-slate-800 text-sm uppercase tracking-wide">Location</p>
              <p className="text-slate-700 mt-1 font-medium">{profile.address}</p>
            </div>
          </div>
          
          {profile.email && (
            <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-xl border-l-4 border-teal-400">
              <Mail className="text-teal-600 flex-shrink-0" size={22} />
              <div>
                <p className="font-bold text-slate-800 text-sm uppercase tracking-wide">Email</p>
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-teal-700 hover:text-teal-900 transition-colors font-medium mt-1 block"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          )}
          
          {profile.phone && (
            <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-400">
              <Phone className="text-emerald-600 flex-shrink-0" size={22} />
              <div>
                <p className="font-bold text-slate-800 text-sm uppercase tracking-wide">Phone</p>
                <a 
                  href={`tel:${profile.phone}`}
                  className="text-emerald-700 hover:text-emerald-900 transition-colors font-medium mt-1 block"
                >
                  {profile.phone}
                </a>
              </div>
            </div>
          )}
          
          {profile.interests && profile.interests.length > 0 && (
            <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-xl border-l-4 border-rose-400">
              <User className="text-rose-600 mt-1 flex-shrink-0" size={22} />
              <div className="w-full">
                <p className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-3">Interests & Skills</p>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-amber-200 to-orange-300 text-amber-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm border border-amber-300 hover:shadow-md transition-shadow"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <button
          onClick={onViewMap}
          className="mt-8 bg-gradient-to-r from-slate-700 to-slate-900 text-white py-4 px-8 rounded-xl hover:from-slate-800 hover:to-black flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg font-semibold text-lg"
        >
          <MapPin size={22} />
          Explore Location
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;