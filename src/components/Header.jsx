import Logo from "../assets/images/logo512.png";
import LogoMedCenter from "../assets/images/logo.jpg";

export const Header = () => {
  return (
    <header className="flex f-row p-[15px] items-center justify-between gap-[10px] w-[100%] h-[100px] p-[17px] bg-[#2F5597] text-2xl">
      <div className="relative inline overflow-hidden w-[167px] h-[100%]">
        <img
          src={LogoMedCenter}
          alt="Логотип"
          className="absolute w-[100%] h-[100%] object-contain"
        />
      </div>
      <div className="flex flex-row gap-[20px] w-[400px] h-[100%] items-center justify-center">
        <div className="relative flex overflow-hidden w-[300px] h-[100%] items-center justify-end gap-[10px]">
          <img
            src={Logo}
            alt="Логотип"
            className="h-[70%] object-contain rounded-[50%] "
          />
          <h1 className="font-bold">Medical System SOS</h1>
        </div>
      </div>
      <div className="relative flex flex-col overflow-hidden w-[300px] h-[100%] items-center justify-end gap-[10px]">
        <h3 className="font-bold">Сервис центр</h3>
        <a className="font-bold hover:point" href="tel:+87711279090">
          8771 127 90 90
        </a>
      </div>
    </header>
  );
};
