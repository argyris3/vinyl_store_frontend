import { motion } from "framer-motion";
import { Data } from "./Slider";

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const OtherInfo = ({ data = Data }) => {
  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      className="flex flex-col z-[30]"
    >
      <AnimatedText
        className="spacing overflow-hidden text-red-600  text-6xl"
        data={data?.band}
      />
      <AnimatedText
        className="my-1 text-4xl text-purple-400 font-semibold md:my-3 md:text-5xl md:leading-[100px]"
        data={data?.title}
      />
      <AnimatedText className="text-lg text-white" data={data?.description} />
    </motion.div>
  );
};

export default OtherInfo;

const AnimatedText = ({ data, className }) => {
  return (
    <span style={{ overflow: "hidden", display: "inline-block" }}>
      <motion.p className={`${className}`} variants={item} key={data}>
        {data}
      </motion.p>
    </span>
  );
};
