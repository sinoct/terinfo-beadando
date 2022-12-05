import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { NextPage } from "next";
import Header from "../components/Header";

import dynamic from "next/dynamic";
import Head from "next/head";

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Térinformatika-I0U2ZO</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="w-full flex justify-center items-center flex-col">
        <div className="text-3xl font bold py-4">Térinformatika Beadandó</div>
        <div className="text-xl py-4">Erős Gergő, I0U2ZO</div>
        <div className="w-2/3 h-[600px] py-4">
          <MapWithNoSSR />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
