import { useDarkMode } from "../utils/Darkmode";
import "../styles/ToggleStyle.css";

const ToggleSwitch = () => {
  const [{ isDark }, toggleDarkMode] = useDarkMode();
  const handleToggleChange = () => {
    toggleDarkMode();
  }

  return (
    <div className="flex justify-center">
      <label className="switch">
        <input type="checkbox" checked={isDark} onChange={handleToggleChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
