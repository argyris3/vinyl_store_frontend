import React from "react";
import { CurrentSliceData, Data } from "./Slider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";

const Controls = ({
  currentSlideData = CurrentSliceData,
  sliderData = Data,
  data = Data,
  transitionData = Data,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData = Data,
}) => {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.img === data[data.length - 1].img
      ),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <>
      <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
        <SliderButton handleClick={handlePrev}>
          <IoIosArrowBack className="text-lg" />
        </SliderButton>
        <SliderButton handleClick={handleNext}>
          <IoIosArrowForward className="text-lg" />
        </SliderButton>
        <Progress
          curIndex={currentSlideData.index}
          length={sliderData.length}
        />
      </div>
    </>
  );
};

export default Controls;

const SliderButton = ({ children, handleClick }) => {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition-all ease-in-out hover:bg-white hover:text-black"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
