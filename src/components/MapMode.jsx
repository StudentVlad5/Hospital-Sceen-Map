import { motion, AnimatePresence } from "framer-motion";

const MapMode = ({ imageData, timeArrive }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex-1 w-full">
        <AnimatePresence>
          <motion.img
            key={imageData}
            src={imageData}
            alt="Map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      <div className="p-4 bg-[#2F5597] text-white text-3xl text-center w-full">
        <h3>
          Приблизительное время прибытия бригады скорой помощи составляет{" "}
          {timeArrive} минут
        </h3>
      </div>
    </div>
  );
};

export default MapMode;
