import ActionBar from "../ActionBar/ActionBar";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__top">
            <Logo />
    
            <div className="header__top__navbar"><Navbar /></div>
  
            <ActionBar />
          </div>

          <div className="header__bottom">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;