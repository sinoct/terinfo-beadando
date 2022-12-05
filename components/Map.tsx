import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import oradeaJSON from "./OradeaJSON";
import LayerContent from "./LayerContent";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  LayerGroup,
  LayersControl,
  Circle,
  FeatureGroup,
  Rectangle,
  GeoJSON,
} from "react-leaflet";
import L, {
  LatLngBoundsExpression,
  LatLngExpression,
  LatLngLiteral,
} from "leaflet";
import { GeoJsonObject } from "geojson";

const myIcon = L.icon({
  iconUrl: "marker.png",
  iconSize: [24, 38],
  iconAnchor: [24, 38],
});

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });
  const geoJSON = oradeaJSON as GeoJsonObject;

  const center = [47.05589565435125, 21.927716398570823];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  return (
    <MapContainer
      center={center as LatLngExpression}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OSM">
          <LayerGroup>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LayerContent></LayerContent>
          </LayerGroup>
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="Street">
          <LayerGroup>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
              id="mapbox/streets-v11"
            />
            <LayerContent></LayerContent>
          </LayerGroup>
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satellite">
          <LayerGroup>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
              id="mapbox/satellite-v9"
            />
            <LayerContent></LayerContent>
          </LayerGroup>
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainer>
  );
}
