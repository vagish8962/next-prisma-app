import React from "react";
import EmployeeTwin from "./EmployeeTwin";
import Bot from "./Bot";
import UnderBar from "./Underbar";

const Banner = () => {
  return (
    <div className="m-0 -translate-y-6 flex flex-col bg-[url('/images/BannerBg.png')] bg-contain">
      <div className="flex flex-row">
        <EmployeeTwin></EmployeeTwin>
        <Bot></Bot>
      </div>
      <div>
        <UnderBar></UnderBar>
      </div>
    </div>
  );
};
export default Banner;
