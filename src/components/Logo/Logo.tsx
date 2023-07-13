import { Link } from "react-router-dom";
import {PiBeerBottleFill} from 'react-icons/pi'
import './Logo.scss';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <PiBeerBottleFill size={24} />
      BR
    </Link>
  );
};

export default Logo;