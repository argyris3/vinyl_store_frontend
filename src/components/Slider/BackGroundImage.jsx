import { motion } from "framer-motion";
import { Data, CurrentSliceData } from "./Slider";

const BackGroundImage = ({
  transitionData = Data,
  currentSlideData = CurrentSliceData,
}) => {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-0 top-0 z-10 h-[500px]   w-full object-cover brightness-[40%]"
          src={transitionData.img}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
        className="absolute left-0 top-0 h-[500px] w-full object-cover  brightness-[40%]  "
      />
    </>
  );
};

export default BackGroundImage;
