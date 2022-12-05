import "leaflet/dist/leaflet.css";
import LayerContent from "./LayerContent";

import {
  MapContainer,
  TileLayer,
  LayerGroup,
  LayersControl,
} from "react-leaflet";
import L, { LatLngExpression } from "leaflet";

export default function Map() {
  const center = [47.05589565435125, 21.927716398570823];

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
