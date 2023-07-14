import { AiOutlineArrowUp } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import { moveToTop } from '../../utils/moveToTop';
import './MoveTop.scss';

const MoveTop = () => {
  const {t} = useTranslation();

  return (
    <div className="move-top">
      {t('backToTop')}

      <button className="move-top__btn" onClick={moveToTop}>
        <AiOutlineArrowUp className="move-top__icon" size={15} />
      </button>
    </div>
  );
};

export default MoveTop;