import QRCode from "react-qr-code";
import logo from "../assets/images/logo512.png";
import data from "../assets/constants/CONST.json"

const LogoMode = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white text-black">
      <img src={logo} alt="Logo" className="w-96 h-auto mb-10" />
      <div className="mb-10">
        <QRCode value={data.url} size={256} />
        <p className="mt-4 text-xl text-center">{data.url}</p>
      </div>
      <div className="text-lg text-center">
        <p>Телефон: {data.tel}</p>
        <p>Email: {data.email}</p>
        <p>Адрес: {data.address}</p>
      </div>
    </div>
  );
};

export default LogoMode;
