import { motion } from "framer-motion";
import React from "react";

const SliderCard = ({ data }) => {
  return (
    <motion.div
      className="relative h-[230px] min-w-[200px] rounded-2xl shadow-md md:h-[300px] md:min-w-[220px] 
  "
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
    >
      <motion.img
        layoutId={data?.img}
        alt="Transition Image"
        src={data?.img}
        className="absolute h-full w-full rounded-2xl object-cover brightness-75 z-10 "
      />
      <motion.div className="absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div
            layout
            className="mb-2 h-[2px] w-3 rounded-full bg-white"
          ></motion.div>
          <motion.p layoutId={data?.band} className="text-xs text-slate-200">
            {data?.band}
          </motion.p>
          <motion.h1
            layoutId={data?.title}
            className="text-xl leading-6 text-red-600"
          >
            {data?.title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SliderCard;
