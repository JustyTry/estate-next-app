"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const MapComponent = () => {
  return (
    <MapContainer
      center={[56.00875, 92.86606]}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
      preferCanvas
      attributionControl={false}
      zoomAnimation
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default MapComponent;
