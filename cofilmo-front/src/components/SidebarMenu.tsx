// import { Link } from "react-router-dom";
import { options } from "../utils/Options";

interface ISidebarMenuProps {
  toggle: boolean;
}

const SidebarMenu: React.FC<ISidebarMenuProps> = ({ toggle }) => {
  return (
    <section className="flex flex-col justify-between whitespace-nowrap py-20">
      {options.map((option) => {
        return (
          <a href={`${option.to}`}
            className={`${
              toggle ? "" : ""
            } sidebar-menu shadow-lg shadow-emerald-400 bg-emerald-300 dark:bg-emerald-950 dark:shadow-zinc-900 items-center`}
          >
            <i
              className={`${option.icon} min-w-[2rem] text-3xl transition justify-center text-center`}
            />
            <span
              className={`${
                toggle ? "opacity-0 delay-200" : ""
              } text-xl whitespace-pre ml-14`}
            >
              {option.text}
            </span>
          </a>
        );
      })}
    </section>
  );
};

export default SidebarMenu;