import React from "react";
import Widget from "../../Commons/Widget";
import InnerWidget from "../../Commons/InnerWidget";
import Image from "next/image";

const widgetData = [
  {
    title: 31440,
    description: "Manual Hour Saving",
  },
  {
    title: 20.56,
    description: "FTE Saving",
  },
  {
    title: "24/7",
    description: "availability Reduction of manual efforts ",
  },
];

function SmarterIntelligence() {
  return (
    <div className="flex max-w-[2520px] m-auto bg-medium-blue">
      <div className="mt-10 flex flex-col justify-between w-3/4">
        <div className="flex flex-col px-32 ">
          <h2 className="w-full font-bold text-5xl px-40  py-6 text-white">
            Smarter and Intelligence{" "}
            <b className="text-green font-extrabold">
              Digital Worker to carry out Business Processes
            </b>
          </h2>
        </div>
        <div className="p-20 w-auto flex flex-row justify-end items-end">
          <Widget>
            <div className="p-3 h-80 rounded-3xl overflow-hidden bg-container-blue border-lighter-blue border flex flex-row">
              <Image
                className="place-self-start"
                width="200"
                height="200"
                src="/images/PlanBot.svg"
              ></Image>
              <Image width="60" height="60" src="/images/Play.svg"></Image>
              <Image
                className="place-self-end mx-3"
                width="200"
                height="200"
                src="/images/girl.svg"
              ></Image>
            </div>
          </Widget>
          <Widget>
            <div className="p-10 translate-x-12 w-30 rounded-3xl overflow-hidden bg-container-blue border-lighter-blue border">
              <div className="text-white text-3xl">
                Workforce of the future =
              </div>
              <div className="text-yellow text-3xl">Human + </div>
              <div className="text-yellow text-3xl">Digital</div>
              <Image
                className="scale-125"
                width="400"
                height="500"
                src="/images/Man.svg"
              ></Image>
            </div>
          </Widget>
        </div>
      </div>
      <div>
        <div className="flex  h-full">
          <div className="m-4 place-self-end">
            {widgetData.map((eachWidget, key) => {
              return (
                <Widget>
                  <InnerWidget
                    title={eachWidget.title}
                    desp={eachWidget.description}
                    key={key}
                  />
                </Widget>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmarterIntelligence;
