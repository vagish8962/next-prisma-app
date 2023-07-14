import React from "react";
import Image from "next/image";
import Button from "./Button";

const EmployeeTwin = () => {
  return (
    <>
      <div className="p-10 flex flex-col w-1/2 justify-evenly ">
        <div className=" w-full h-full justify-evenly p-10">
          <Image
            className="m-10"
            width="500"
            height="100"
            src="/images/ET.png"
            alt="Employee Twin"
          ></Image>
          <p className="font-bold text-xl m-10">
            Get your digital coworker activated today. Up Skill anytime.
          </p>
          <div className="flex space-x-2 m-10">
            <Button
              text={"Get your Employee Twin"}
              buttonClass="first"
            ></Button>
            <Button
              text={"Explore all the Skills"}
              buttonClass="second"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeTwin;
