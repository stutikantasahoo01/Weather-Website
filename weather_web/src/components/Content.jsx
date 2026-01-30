import React from "react";
import LeftContent from "./LeftContent";
import CenterContent from "./CenterContent";
import RightContent from "./RightContent";

const Content = () => {
  return (
    <div className="flex text-white justify-between mt-4 h-[75%] w-full">
      <LeftContent />
      <CenterContent />
      <RightContent />
    </div>
  );
};

export default Content;
