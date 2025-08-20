import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { Data, CurrentSliceData } from "./Slider";
const SlideInfo = ({
  transitionData = Data,
  currentSlideData = CurrentSliceData,
}) => {
  return (
    <>
      <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
    </>
  );
};

export default SlideInfo;
