import NavLinks from "./NavLinks";
import logo from "../images/profile-pic.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Michael Yeates' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
