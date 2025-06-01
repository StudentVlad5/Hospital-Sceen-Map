import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import LogoMode from "./components/LogoMode";
import MapMode from "./components/MapMode";
import mapImage from "./assets/forTests/map_test.jpg";
import { Footer } from "./components/Footer";
import dates from "./assets/constants/CONST.json";

const App = () => {
  const [mode, setMode] = useState("map");
  const [imageVersion, setImageVersion] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [successfulData, setLastSuccessfulData] = useState(true);
  const [timeArrive, settimeArrive] = useState("00");
  const [displayType, setDisplayType] = useState(true);

  const fetchData = async () => {
    let res;
    try {
      displayType
        ? (res = await axios.get(dates.FETCH_URL_fghdjs))
        : (res = await axios.get(dates.FETCH_URL_eksvjs));
      const data = res.data;

      if (data.mode === "map") {
        setMode("map");
        if (data.imageVersion !== imageVersion) {
          setImageVersion(data.imageVersion);
          setImageData(data.imageName);
          settimeArrive(data.timeArrive);

          if (!successfulData) setLastSuccessfulData(true);
        }
      } else if (data.mode === "logo") {
        setMode("logo");
      }
    } catch (err) {
      setLastSuccessfulData(false);
      console.warn("Fetch error, keeping previous data");
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, dates.POLLING_INTERVAL);
    return () => clearInterval(interval);
  }, [displayType]);

  return (
    <div className="max-w-[1920px] h-full overflow-hidden text-white relative flex flex-col w-[100%] p-[15px] mx-[0] my-[auto] text-base">
      <Header displayType={displayType} setDisplayType={setDisplayType} />
      {mode === "map" ? (
        <MapMode
          imageData={
            imageData ? `${dates.FETCH_URL_image}${imageData}` : mapImage
          }
          timeArrive={timeArrive}
        />
      ) : (
        <LogoMode />
      )}
      <Footer successfulData={successfulData} />
    </div>
  );
};

export default App;
