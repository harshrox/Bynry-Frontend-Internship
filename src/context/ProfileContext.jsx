import React, { createContext, useContext, useReducer } from 'react';
import { initialProfiles } from '../data/mockData';

const ProfileContext = createContext();

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profiles: [...state.profiles, { ...action.payload, id: Date.now() }]
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        profiles: state.profiles.map(profile =>
          profile.id === action.payload.id ? action.payload : profile
        )
      };
    case 'DELETE_PROFILE':
      return {
        ...state,
        profiles: state.profiles.filter(profile => profile.id !== action.payload)
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      };
    case 'SET_SELECTED_PROFILE':
      return {
        ...state,
        selectedProfile: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  profiles: initialProfiles,
  searchTerm: '',
  selectedProfile: null,
  loading: false
};

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const filteredProfiles = state.profiles.filter(profile =>
    profile.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
    profile.description.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
    profile.address.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  const value = {
    ...state,
    filteredProfiles,
    dispatch
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfiles = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfiles must be used within a ProfileProvider');
  }
  return context;
};