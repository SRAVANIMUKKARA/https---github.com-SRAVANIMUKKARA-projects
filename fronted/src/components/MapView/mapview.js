import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const MapView = () => {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[20.5937, 78.9629]}>
        <Popup>India</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;