import logo from "../assets/LogoCofilmo.png";

interface ISidebarHeaderProps {
  toggle: boolean;
}

const SidebarHeader: React.FC<ISidebarHeaderProps> = ({ toggle }) => {
  return (
    <header
      className={`flex gap-4 items-center py-2 ${
        toggle
          ? "bg-none transition-all duration-200 delay-150"
          : "bg-emerald-100 rounded-xl p-2 dark:bg-emerald-800"
      }`}
    >
      <div className="min-w-[3rem] flex items-center">
        <img
          src={logo}
          alt="Cofilmo's logo"
          className="w-full h-full rounded-lg object-cover"
          loading="lazy"
        />
      </div>

      <section
        className={`${
          toggle
            ? "opacity-0 delay-100"
            : "flex flex-col text-xl font-nunito text-emerald-700 dark:text-emerald-50"
        }`}
      >
        <span className="font-semibold">Cofilmo</span>
        <span className="font-medium">Movie Tracker</span>
      </section>
    </header>
  );
};

export default SidebarHeader;
