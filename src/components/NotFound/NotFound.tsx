import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './NotFound.scss';

const NotFound = () => {
  const {t} = useTranslation();

  return (
    <div className="not-found">
      <h1 className="not-found__title">
        {t('404')}
      </h1>

      <Link to="/" className="not-found__link">
        {t('goHome')}
      </Link>
    </div>
  );
};

export default NotFound;