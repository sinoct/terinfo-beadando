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
  iconSize: [20, 38],
  iconAnchor: [20, 38],
});

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 64.536634, lng: 16.779852 });
  let oradeaJSON = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { name: "fortress" },
        geometry: {
          coordinates: [21.94275435824011, 47.051603987329884],
          type: "Point",
        },
      },
      {
        type: "Feature",
        properties: { name: "Ady Endre Liceum" },
        geometry: {
          coordinates: [21.93206962688606, 47.05832841451533],
          type: "Point",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [21.927724916089403, 47.05588864295024],
          type: "Point",
        },
      },
      {
        type: "Feature",
        properties: { name: "circuit" },
        geometry: {
          coordinates: [
            [21.919339287011127, 47.08263274232792],
            [21.915555249489785, 47.082564934036924],
            [21.91236869157845, 47.08107312979939],
            [21.91017793301438, 47.078970971109214],
            [21.90868423399263, 47.077139991122664],
            [21.907588854711435, 47.07551240053718],
            [21.907489274775884, 47.074156037073834],
            [21.906593055364112, 47.07279963908667],
            [21.904203136930647, 47.07096844704202],
            [21.901912798431027, 47.068730237985534],
            [21.899622459931464, 47.06642410610644],
            [21.897332121433493, 47.063507384666906],
            [21.895041782933873, 47.06065833989493],
            [21.890759845739694, 47.056045277935795],
            [21.887971607567266, 47.052788758613104],
            [21.886378328611585, 47.05061763525143],
            [21.886677068414997, 47.04932848893665],
            [21.889863626327923, 47.048853532439296],
            [21.89324934410874, 47.04803931146219],
            [21.896734641825105, 47.047089371279725],
            [21.902012378366578, 47.04647868651469],
            [21.905497676081296, 47.04593584974302],
            [21.91017793301438, 47.04491801590697],
            [21.911372892231157, 47.04383230507534],
            [21.912655494981124, 47.03795210704445],
            [21.91670225173661, 47.036624202896206],
            [21.92134852801138, 47.03601131291293],
            [21.92779336284542, 47.033866142535885],
            [21.932289759240433, 47.03212951287995],
            [21.939334113593787, 47.0299841864601],
            [21.94323099046943, 47.02691928484171],
            [21.94517942890849, 47.02548893719165],
            [21.94892642590429, 47.0245694077494],
            [21.95746957905601, 47.02589761185959],
          ],
          type: "LineString",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [
              [21.9333314639984, 47.05426332769542],
              [21.93257558957123, 47.052818499377935],
              [21.936103003562977, 47.052046000852016],
              [21.938244647770347, 47.05155960715106],
              [21.938391623353425, 47.05327627100192],
              [21.938034682652216, 47.05366251275336],
              [21.9333314639984, 47.05426332769542],
            ],
          ],
          type: "Polygon",
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [21.92213457147946, 47.05610628373975],
          type: "Point",
        },
      },
    ],
  } as GeoJsonObject;

  const center = [47.05589565435125, 21.927716398570823];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  return (
    <MapContainer
      center={center as LatLngExpression}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <LayersControl position="topright">
        <LayersControl.Overlay name="OSM">
          <LayerGroup>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <GeoJSON key={"geo"} data={oradeaJSON}></GeoJSON>
            <Marker position={center as LatLngExpression}>
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
                center={center as LatLngExpression}
                pathOptions={{ fillColor: "blue" }}
                radius={200}
              />
              <Circle
                center={center as LatLngExpression}
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
            <TileLayer
              url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
              id="mapbox/satellite-v9"
            />
            <FeatureGroup pathOptions={{ color: "purple" }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={center as LatLngExpression} radius={200} />
              <Rectangle bounds={rectangle as LatLngBoundsExpression} />
            </FeatureGroup>
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}
