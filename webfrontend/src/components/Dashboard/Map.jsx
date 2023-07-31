import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const bounds = [
    [5.9184, 79.6517], // Southwestern corner
    [9.8241, 81.8718], // Northeastern corner
  ];

  const [beaches, setBeaches] = useState([]);

  useEffect(() => {
    // Fetch the beach data from the server
    fetch('http://localhost:8060/beaches/beach/view')
      .then((response) => response.json())
      .then((data) => setBeaches(data))
      .catch((error) => console.error('Error fetching beach data:', error));
  }, []);

  return (
    <div>
      <h2>Welcome to Sri Lanka</h2>
      <a href='/addbeach'>Add Beach</a>
      <a href='/viewbeaches'>View Beaches</a>
      <div className="map-container">
        <MapContainer bounds={bounds} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {beaches.map((beach) => (
  // Check if beach.province exists and has lat and lng properties
  beach.province && beach.province.lat !== undefined && beach.province.lng !== undefined ? (
    <Marker key={beach._id} position={[beach.province.lat, beach.province.lng]}>
      <Popup>{beach.title}</Popup>
    </Marker>
  ) : null
))}
          {/* Add other map components, markers, polygons, etc. here */}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;