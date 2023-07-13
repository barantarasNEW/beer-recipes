import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';

import { nets } from "./constants";
import { NetIcons } from "../../types/NetIcons";
import './Nets.scss';

const getIcon = (name: NetIcons) => {
  switch (name) {
    case NetIcons.TELEGRAM:
      return <BsTelegram size={29} />
    case NetIcons.GITHUB:
      return <AiFillGithub size={29} />
    case NetIcons.LINKEDIN:
      return <AiFillLinkedin size={30} />
    default:
      return null;
  }
};

const Nets = () => {
  return (
    <nav className="nets">
      <ul className="nets__list">
        {nets.map(({ href, name }) => (
          <li key={href} className="nets__item">
            <Link
              to={href as string}
              className="nets__link"
              target="_blank"
            >
              {getIcon(name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nets;