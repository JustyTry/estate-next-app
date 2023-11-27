"use client"
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // Create a map instance
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Add a marker to the map
    L.marker([51.5, -0.09]).addTo(map);
  }, []);

  return <div id="map" style={{ height: '100vh', width: '100%' }} />;
};

export default Map;