import Logo from "../Logo/Logo";
import Nets from "../Nets/Nets";
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Logo />
  
          <Nets />
        </div>
      </div>
    </footer>
  );
};

export default Footer;