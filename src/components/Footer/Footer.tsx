import Logo from "../Logo/Logo";
import MoveTop from "../MoveTop/MoveTop";
import Nets from "../Nets/Nets";
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Logo />
  
          <Nets />

          <MoveTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;