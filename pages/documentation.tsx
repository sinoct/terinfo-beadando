import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const DocumentaionPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Térinformatika-I0U2ZO</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="px-24 py-8 text-center">
        <div className="text-2xl font-bold container pb-8">
          A térinformatika című tárgy beadandóm témájául szülővárosomat,
          Nagyváradot választottam.
        </div>
        <div className="text-2xl font-bold">Használt technológiák:</div>
        <div className="text-xl pb-8">
          <p>
            Az alkalmazást Typescript nyelven írtam, React-en alapuló Next.js-t
            használva. <br /> A térkép megjelenítéséhez a React-hez íródott
            react-leaflet könyvtárat használtam.
          </p>
        </div>
        <div className="text-xl pb-8">
          A térképen GeoJSON-ből beolvasva rajzoltam meg, Nagyváradot szélén
          végighaladó sugárutat, különböző parkoknak a területét illetve a Sebes
          Körös partján található gyalogos részt, ahova futni jártam régen.{" "}
          <br />
          A parkokat egy park szimbólumú markerrel jelöltem a térképen, rájuk
          kattintva megjelenik a park neve, illetve egy kép is róla. <br />
          A parkok mellett Nagyvárad különböző nevezetességét is megjelöltem egy
          egyszerű markerrel a térképen, köztük a régi iskolámat is. Ezek is
          ugyanúgy kattinthatók. <br />
          Megjelöltem egy körrel Nagyvárad főterét, ahol számos rendezvény
          szokott megrendezésre kerülni, jelenleg is ott található az Adventi
          vásár. <br />
        </div>
        <div className="text-xl">
          A térkép jobb sarkában található menüben lehet kiválasztani, hogy az
          OSM, Street vagy a Sattelite térkép legyen megjelenítve.
        </div>
      </div>
    </div>
  );
};

export default DocumentaionPage;
