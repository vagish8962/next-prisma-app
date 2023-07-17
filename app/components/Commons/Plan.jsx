import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Button from "../Commons/Button";

function Plan({
  imgSrc,
  title,
  description,
  priceDetail,
  active: isActive,
  buyNow,
}) {
  return (
    <div
      className={classNames(
        "flex justify-center flex-col rounded-3xl p-16 w-96",
        isActive
          ? "bg-hard-blue text-white shadow-2xl"
          : "bg-light-blue border-light-blue"
      )}
    >
      <Image
        className="max-w-md mx-auto"
        src={imgSrc}
        height="130"
        width="130"
        alt={title}
      />
      <h3
        className={`my-4 text-3xl font-extrabold ${
          isActive ? "text-white" : "text-hard-blue"
        }`}
      >
        {title}
      </h3>
      <p className="my-4 font-bold">{description}</p>
      <h2
        className={`my-4 text-4xl font-bold  ${
          isActive ? "text-white" : "text-hard-blue"
        }`}
      >
        {priceDetail?.price}
      </h2>
      <p className="my-4 font-extrabold">{priceDetail.content}</p>
      {isActive ? (
        <Button variant="secondary" size="large">
          {buyNow}
        </Button>
      ) : (
        <Button variant="secondary" size="large">
          {buyNow}
        </Button>
      )}
    </div>
  );
}
export default Plan;
