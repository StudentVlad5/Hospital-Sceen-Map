export const Footer = ({ successfulData }) => {
  return (
    !successfulData && (
      <footer className="flex f-row p-[15px] items-center justify-center gap-[10px] w-[100%] h-[100px] p-[17px] bg-[#2F5597] text-2xl text-red-300">
        <p>Сбой связи, данные будут обновлены в ближайшее время</p>
      </footer>
    )
  );
};
