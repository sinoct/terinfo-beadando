import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { NextPage } from "next";

import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const HomePage: NextPage = () => {
  return (
    <div>
      <div className="w-screen h-[300px]">
        <MapWithNoSSR />
      </div>
    </div>
  );
};
export default HomePage;
