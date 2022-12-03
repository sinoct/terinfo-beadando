import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
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
} from "react-leaflet";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

const myIcon = L.icon({
  iconUrl: "marker.png",
  iconSize: [20, 38],
  iconAnchor: [20, 38],
});

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });

  //const center = [geoData.lat, geoData.lng];

  const googleStreets = L.tileLayer(
    "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  );

  const googleHybrid = L.tileLayer(
    "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  );

  const googleSat = L.tileLayer(
    "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  );

  const center = [47.05589565435125, 21.927716398570823];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100vw" }}
    >
      <LayersControl position="topright">
        <LayersControl.Overlay name="OSM">
          <LayerGroup>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={center}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Street">
          <LayerGroup>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
              id="mapbox/streets-v11"
            />
            <LayerGroup>
              <Circle
                center={center}
                pathOptions={{ fillColor: "blue" }}
                radius={200}
              />
              <Circle
                center={center}
                pathOptions={{ fillColor: "red" }}
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  pathOptions={{ color: "green", fillColor: "green" }}
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Satellite">
          <LayerGroup>
            <TileLayer url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" id="mapbox/satellite-v9" />
            <FeatureGroup pathOptions={{ color: "purple" }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={center} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}
