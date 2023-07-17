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
        <div className="flex max-w-[2520px] m-auto bg-medium-blue before:content-rightCurve before:w-50px before:h-50px  before:absolute before:left-[calc(100%-200px)] before:-top-48  relative after:content-leftCurve after:w-50px after:h-50px after:left-0 after:bottom-[calc(-200px)] after:absolute">
            <div className="mt-10 flex flex-col justify-between w-3/4 px-20">
                <div className="flex flex-col px-12">
                    <h2 className="w-full font-bold text-5xl px-12  py-6 text-white leading-normal">
                        Smarter and Intelligence{" "}
                        <b className="text-green font-extrabold">
                            Digital Worker to carry out Business Processes
                        </b>
                    </h2>
                </div>
                <div className="p-12 w-auto flex flex-row justify-between">
                    <Widget>
                        <div className="p-3 h-80 rounded-3xl overflow-hidden bg-container-blue border-lighter-blue border flex flex-row">
                            <Image
                                alt="PlanBot"
                                className="place-self-start"
                                width="200"
                                height="200"
                                src="/images/PlanBot.svg"
                            ></Image>
                            <Image
                                alt="Play"
                                width="60"
                                height="60"
                                src="/images/Play.svg"
                            ></Image>
                            <Image
                                alt="Girl"
                                className="place-self-end mx-3"
                                width="200"
                                height="200"
                                src="/images/girl.svg"
                            ></Image>
                        </div>
                    </Widget>
                    <Widget>
                        <div className="p-10 w-30 rounded-3xl overflow-hidden bg-container-blue border-lighter-blue border">
                            <div className="text-white text-3xl">
                                Workforce of the future =
                            </div>
                            <div className="text-yellow text-3xl">Human + </div>
                            <div className="text-yellow text-3xl">Digital</div>
                            <Image
                                alt="Man"
                                className="scale-125"
                                width="400"
                                height="500"
                                src="/images/Man.svg"
                            ></Image>
                        </div>
                    </Widget>
                </div>
            </div>
            <div className="flex flex-col justify-around mt-20 mb-10">
                {widgetData.map((eachWidget, key) => {
                    return (
                        <Widget key={key}>
                            <InnerWidget
                                title={eachWidget.title}
                                desp={eachWidget.description}
                            />
                        </Widget>
                    );
                })}
            </div>
        </div>
    );
}

export default SmarterIntelligence;
