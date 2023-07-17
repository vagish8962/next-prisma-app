"use client";
import Avatar from "../Avatar";

function UserMenu({ currentUser }) {
  return (
    <div className="relative mx-3 rounded-3xl bg-pin-blue border-pin-blue border">
      <div className="flex flex-row items-center gap-3 ">
        <div
          className="
            hidden
            md:block
            text-sm 
            py-3 
            px-2
            rounded-full
            font-semibold
            hover:bg-neutral-100 
            transition 
            cursor-pointer
            text-hard-blue
          "
        >
          Hi Gopi,
        </div>
        <div
          className="
          md:py-1
          md:px-1
          flex 
          flex-row 
          items-center 
          gap-3 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <div className="hidden md:block text-hard-blue">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
