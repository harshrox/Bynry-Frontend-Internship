import React, { useEffect, useRef } from 'react';
import { MapPin, Navigation, Maximize2 } from 'lucide-react';

const MapComponent = ({ profile }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  const safeProfile = profile || {
    name: "Sample Location",
    address: "New Delhi, India", 
    lat: 28.6139,
    lng: 77.2090
  };

  useEffect(() => {
    const loadLeaflet = async () => {
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(link);
      }

      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      const lat = parseFloat(safeProfile.lat);
      const lng = parseFloat(safeProfile.lng);


      const map = window.L.map(mapRef.current, {
        center: [lat, lng],
        zoom: 13,
        zoomControl: true,
        scrollWheelZoom: true
      });

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map);

      const customIcon = window.L.divIcon({
        html: `
          <div style="
            background: #ef4444;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            <div style="
              color: white;
              transform: rotate(45deg);
              font-size: 14px;
              font-weight: bold;
            ">📍</div>
          </div>
        `,
        className: 'custom-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      });

  
      const marker = window.L.marker([lat, lng], { icon: customIcon }).addTo(map);
      
   
      marker.bindPopup(`
        <div style="font-family: system-ui, -apple-system, sans-serif; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: 600;">
            ${safeProfile.name}
          </h3>
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; line-height: 1.4;">
            ${safeProfile.address}
          </p>
          <div style="background: #f9fafb; padding: 8px; border-radius: 4px; font-size: 12px; color: #6b7280;">
            <div><strong>Lat:</strong> ${lat.toFixed(6)}</div>
            <div><strong>Lng:</strong> ${lng.toFixed(6)}</div>
          </div>
        </div>
      `).openPopup();

      mapInstanceRef.current = map;
      markerRef.current = marker;

      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    };

    if (safeProfile && safeProfile.lat && safeProfile.lng) {
      loadLeaflet();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [safeProfile.lat, safeProfile.lng, safeProfile.name, safeProfile.address]);

  const centerMap = () => {
    if (mapInstanceRef.current && markerRef.current) {
      const lat = parseFloat(safeProfile.lat);
      const lng = parseFloat(safeProfile.lng);
      mapInstanceRef.current.setView([lat, lng], 15);
      markerRef.current.openPopup();
    }
  };

  const zoomToFit = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setZoom(10);
    }
  };

  if (!safeProfile || !safeProfile.lat || !safeProfile.lng) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
        <div className="text-gray-500">
          <MapPin size={48} className="mx-auto mb-4 opacity-50" />
          <p>No location data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-opacity-20 p-2 rounded-full">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{safeProfile.name}</h3>
              <p className="text-blue-100 text-sm">{safeProfile.address}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={centerMap}
              className="bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-colors"
              title="Center on location"
            >
              <Navigation size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        <div 
          ref={mapRef} 
          className="h-96 w-full"
          style={{ minHeight: '400px' }}
        />
      </div>

      {/* Info footer */}
      <div className="bg-gray-50 p-4 border-t">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Interactive map • Click marker for details</span>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;