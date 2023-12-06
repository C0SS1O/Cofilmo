import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import ToggleSwitch from "./ToggleSwitch";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${
        toggle ? "w-[4.5rem]" : ""
      } sidebar-container shadow-md shadow-stone-800 dark:shadow-stone-500 whitespace-nowrap`}
    >
      <SidebarHeader toggle={toggle} />
      <SidebarMenu toggle={toggle} />
      <ToggleSwitch />
      <div
        className="absolute cursor-pointer top-[20%] h-6 w-6 bg-emerald-700 flex items-center justify-center rounded-md text-lg text-emerald-200 "
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
    </nav>
  );
};

export default Sidebar;
