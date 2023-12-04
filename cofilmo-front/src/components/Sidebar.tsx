import logo from '../assets/LogoCofilmo.png';

const Sidebar = () => {
  return (
    <div className={`sidebar-container`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className="options">
        <li className="option">add</li>
        <li className="option">random</li>
        <li className="option">watch</li>
      </ul>
    </div>
  );
};

export default Sidebar;
