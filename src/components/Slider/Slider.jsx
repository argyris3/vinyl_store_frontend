import React, { useState } from "react";
import slider1 from "../../assets/sliderImages/slider1.jpg";
import slider2 from "../../assets/sliderImages/slider2.jpg";
import slider3 from "../../assets/sliderImages/slider3.jpg";
import slider4 from "../../assets/sliderImages/slider4.jpg";
import { AnimatePresence } from "framer-motion";
import BackGroundImage from "./BackGroundImage";
import SlideInfo from "./SlideInfo";
import Slides from "./Slides";
import Controls from "./Controls";

const sliderData = [
  {
    img: slider1,
    band: "Iron Maiden",
    description: "Heavy Metal",
    title: "Book of Souls",
  },
  {
    img: slider2,
    band: "Miles Davis",
    description: "Jazz",
    title: "Kind of Blue",
  },
  {
    img: slider3,
    band: "Led Zeppelin",
    description: "Rock",
    title: "Physical Graffiti",
  },
  {
    img: slider4,
    band: "Thievery Corporation",
    description: "Electronic",
    title: "Symphonic",
  },
];

export const Data = {
  img: "",
  title: "",
  band: "",
  description: "",
};

export const CurrentSliceData = {
  data: Data,
  index: Number,
};

const initData = sliderData[0];

const Slider = () => {
  const [data, setData] = useState(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData,
    index: 0,
  });

  return (
    <section className="mt-5  relative  2xs:hidden xs:hidden sm:hidden  md:hidden lg:h-[500px]  xl:h-[500px] 2xl:h-[500px]   overflow-hidden antialiased">
      <AnimatePresence>
        <BackGroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 w-full">
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center mb:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Slider;
