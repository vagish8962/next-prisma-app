"use client";

function MenuItem({ onClick, label }) {
  return (
    <div
      onClick={onClick}
      className="
        px-2 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold
        text-black
      "
    >
      {label}
    </div>
  );
}

export default MenuItem;
