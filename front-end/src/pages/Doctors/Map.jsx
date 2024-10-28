import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const location = useLocation();
  const { latitude, longitude } = location.state ? location.state : { latitude: 0, longitude: 0 };
  console.log('Map location:', location.state);

  if (!location.state) {
    console.error('Map component requires latitude and longitude in location.state');
    return <div>Location information is missing</div>;
  }

  return (
    <div>
      <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}>
          <Popup>Doctor's position</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;