import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import LogoMode from "./components/LogoMode";
import MapMode from "./components/MapMode";
import mapImage from "./assets/forTests/map_test.jpg";
import { Footer } from "./components/Footer";

const POLLING_INTERVAL = 60000; // 1 minute
const FETCH_URL = "/api/status";

const App = () => {
  const [mode, setMode] = useState("map");
  const [imageVersion, setImageVersion] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [successfulData, setLastSuccessfulData] = useState(false);
  const [timeArrive, settimeArrive] = useState("00");

  const fetchData = async () => {
    try {
      const res = await axios.get(FETCH_URL);
      const data = res.data;

      if (data.mode === "map") {
        setMode("map");
        if (data.imageVersion !== imageVersion) {
          setImageVersion(data.imageVersion);
          setImageData(data.imageBase64);
          settimeArrive(data.timeArrive);
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
    const interval = setInterval(fetchData, POLLING_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1920px] h-full overflow-hidden text-white relative flex flex-col w-[100%] p-[15px] mx-[0] my-[auto] text-base">
      <Header />
      {mode === "map" ? (
        <MapMode
          imageData={imageData ? imageData : mapImage}
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
