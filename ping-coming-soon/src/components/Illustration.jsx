import React from "react";
import illustration from "../assets/illustration-dashboard.png";

const Illustration = () => {
  return (
    <div className="flex justify-center items-center pt-16">
      <img src={illustration} alt="" className="sm:w-[620px] w-[90%] "/>
    </div>
  );
};

export default Illustration;
