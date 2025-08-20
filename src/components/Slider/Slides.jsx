import React from "react";
import { Data } from "./Slider";
import SliderCard from "./SliderCard";

const Slides = ({ data = Data }) => {
  const convert = Object.keys(data).map((dt) => ({ name: dt, ...data[dt] }));

  return (
    <div className="flex w-full px-auto gap-4 justify-evenly">
      {convert?.map((data) => {
        console.log(data);
        return <SliderCard key={data?.img} data={data} />;
      })}
    </div>
  );
};

export default Slides;
