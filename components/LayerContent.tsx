/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from "react";

import oradeaJSON from "./OradeaJSON";
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
const parkIcon = L.icon({
  iconUrl: "park.png",
  iconSize: [40, 40],
  iconAnchor: [40, 40],
});

const LayerContent: FunctionComponent = () => {
  const geoJSON = oradeaJSON as GeoJsonObject;

  const center = [47.05589565435125, 21.927716398570823];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];
  return (
    <div>
      <GeoJSON key={"geo"} data={geoJSON}></GeoJSON>
      <Marker
        position={[47.05589565435125, 21.927716398570823] as LatLngExpression}
        icon={myIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/primaria.jpg" alt="" />
            Nagyvárad városháza
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.05328871074016, 21.934531314205373] as LatLngExpression}
        icon={parkIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/december1.jpg" alt="" />
            December 1 park
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.05159932896561, 21.942746717352122] as LatLngExpression}
        icon={myIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/cetate.jpg" alt="" />
            Nagyváradi vár
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.03910324758553, 21.94758685111077] as LatLngExpression}
        icon={parkIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/salca.jpg" alt="" />
            Salca park
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.05831149858045, 21.932049754525423] as LatLngExpression}
        icon={myIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/ady.jpg" alt="" />
            Ady Endre Liceum Nagyvárad. Ide jártam gimnáziumba.
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.06452906292873, 21.92295001055558] as LatLngExpression}
        icon={myIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/malul-crisului.jpg" alt="" />
            Ide jártam futni a Sebes Körös partján
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.06152331359215, 21.908579122694988] as LatLngExpression}
        icon={parkIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/barcaului.jpg" alt="" />
            Barcăului park
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.07219662205418, 21.923291181967272] as LatLngExpression}
        icon={parkIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/olosig.jpg" alt="" />
            Olaszi park
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.07487368477507, 21.91917486104819] as LatLngExpression}
        icon={parkIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/orasel.jpg" alt="" />
            Gyerek város
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.07830224766931, 21.917017479841206] as LatLngExpression}
        icon={parkIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/magnoliei.jpg" alt="" />
            Magnólia park
          </div>
        </Popup>
      </Marker>
      <Marker
        position={[47.058658407803904, 21.950689614243572] as LatLngExpression}
        icon={myIcon}
      >
        <Popup>
          <div className="h-64 w-64 flex flex-col items-center justify-center text-center">
            <img src="images/ciuperca.jpg" alt="" />
            Nagyváradi gomba
          </div>
        </Popup>
      </Marker>
    </div>
  );
};

export default LayerContent;
