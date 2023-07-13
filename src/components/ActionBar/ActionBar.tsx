import { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import { useLocaleStorage } from '../../hooks/useLocaleStorage';
import './ActionBar.scss';

const ActionBar = () => {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useLocaleStorage(false, 'darkMode');

  const onChangeLanguage = () => {
    if (i18n.language === 'ua') {
      changeLanguage('en');
    } else {
      changeLanguage('ua');
    }
  };

  const onChangeTheme = () => setIsDarkMode((prev: boolean) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="action-bar">
      <ul className="action-bar__list">
        <li className="action-bar__item">
            <button className="action-bar__btn" onClick={onChangeTheme}>
              {isDarkMode
                ? <FaMoon size={22} />
                : <FaSun size={23} />
              }
            </button>
        </li>

        <li className="action-bar__item">
            <button className="action-bar__btn" onClick={onChangeLanguage}>
              <MdLanguage size={25} />
            </button>
        </li>
      </ul>
    </nav>
  );
};

export default ActionBar;