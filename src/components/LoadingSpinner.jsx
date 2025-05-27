import React from 'react';

const LoadingSpinner = ({ message = 'Loading...', overlay = true }) => {
  const spinnerContent = (
    <div className="flex items-center justify-center gap-3">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <span className="text-gray-700 font-medium">{message}</span>
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {spinnerContent}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-8">
      {spinnerContent}
    </div>
  );
};

export default LoadingSpinner;