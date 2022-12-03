import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { NextPage } from "next";
import Header from "../components/Header";

import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const HomePage: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-[300px]">
        <MapWithNoSSR />
      </div>
    </div>
  );
};
export default HomePage;
