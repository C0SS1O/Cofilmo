import logo from "../assets/LogoCofilmo.png";

interface ISidebarHeaderProps {
  toggle: boolean;
}

const SidebarHeader: React.FC<ISidebarHeaderProps> = ({ toggle }) => {
  return (
    <header
      className={`flex gap-4 items-center ${
        toggle
          ? "bg-none transition-all duration-200 delay-150"
          : "bg-emerald-100 rounded-xl p-2"
      }`}
    >
      <div className="min-w-[2.5rem] h-[2.5rem] ml-2">
        <img
          src={logo}
          alt="Cofilmo's logo"
          className="w-full h-full rounded-lg object-cover"
          loading="lazy"
        />
      </div>

      <div
        className={`${
          toggle
            ? "opacity-0 delay-100"
            : "flex flex-col text-xl font-nunito text-emerald-900 dark:text-emerald-50"
        }`}
      >
        <span className="font-semibold">Cofilmo</span>
        <span className="font-medium">Movie Tracker</span>
      </div>
    </header>
  );
};

export default SidebarHeader;
