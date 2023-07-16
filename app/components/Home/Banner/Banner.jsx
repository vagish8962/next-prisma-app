import Image from "next/image";
import EmployeeTwin from "./EmployeeTwin";
import Bot from "./Bot";
import UnderBar from "./Underbar";

function Banner() {

  return (
    <div className="flex flex-col bg-white bg-[url('/images/BannerBg.png')] bg-contain">
      <div className="flex flex-row px-28 pt-20 pb-0">
        <EmployeeTwin />
        <Bot />
      </div>
    </div>
  );
};

export default Banner;
