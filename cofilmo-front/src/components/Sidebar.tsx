import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`${
        toggle ? "w-[4.4rem]" : ""
      } sidebar-container shadow-md shadow-stone-800 dark:shadow-stone-500`}
    >
      <SidebarHeader toggle={toggle} />
      <SidebarMenu toggle={toggle} />
      <div
        className="absolute top-[2.8rem] flex justify-center items-center rounded-md bg-emerald-600 left-1 w-8 h-8"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <i
          className={`${
            toggle ? "rotate-180" : ""
          } bx bxs-right-arrow cursor-pointer text-lg text-emerald-200 transition-all duration-200`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
