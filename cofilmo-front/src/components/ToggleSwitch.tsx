const ToggleSwitch = () => {
  return (
    <div className="flex justify-center">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
