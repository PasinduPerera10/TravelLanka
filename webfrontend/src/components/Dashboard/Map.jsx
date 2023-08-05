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
    // Fetch the location data from the server
    fetch('http://localhost:8060/beaches/location/view')
      .then((response) => response.json())
      .then((data) => setBeaches(data))
      .catch((error) => console.error('Error fetching location data:', error));
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
          {beaches.map((location) => (
  // Check if location.province exists and has lat and lng properties
  location.province && location.province.lat !== undefined && location.province.lng !== undefined ? (
    <Marker key={location._id} position={[location.province.lat, location.province.lng]}>
      <Popup>{location.title}</Popup>
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