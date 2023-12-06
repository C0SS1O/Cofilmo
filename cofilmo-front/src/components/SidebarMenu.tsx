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
              className={`${option.icon} min-w-[2.2rem] text-3xl transition`}
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
//     <li
//       key={index}
//       className="h-10 m-5 list-none shadow-md shadow-emerald-400 bg-emerald-300 dark:bg-emerald-950 dark:shadow-zinc-900"
//     >
//       {option.to.startsWith("/") ? (
//         <Link to={option.to}>
//           <div className="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-300 dark:hover:text-emerald-900 dark:text-emerald-50 transition duration-300 font-medium font-dosis">
//             <i
//               className={`bx ${option.icon} min-w-[2.2rem] text-3xl transition`}
//             />
//             <span className="text ml-8 text-xl">
//               {option.text}
//             </span>
//           </div>
//         </Link>
//       ) : (
//         <a
//           href={option.to}
//           className="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-300 dark:hover:text-emerald-900 dark:text-emerald-50 transition duration-300 font-medium font-dosis"
//         >
//           <i
//             className={`bx ${option.icon} min-w-[2.2rem] text-3xl transition`}
//           />
//           <span
//             className="text ml-8 text-xl"
//           >
//             {option.text}
//           </span>
//         </a>
//       )}
//     </li>
// </ul>
