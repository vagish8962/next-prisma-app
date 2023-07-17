import React from "react";

function InnerWidget({ title, desp }) {
  return (
    <div className="p-8 rounded-3xl bg-container-blue border-lighter-blue border m-10 flex items-center justify-center flex-col">
      <h3 className="text-yellow text-5xl font-bold tracking-wide">
        {title}
      </h3>
      <h5 className="text-white text-sm mt-5 font-bold">{desp}</h5>
    </div>
  );
}

export default InnerWidget;
