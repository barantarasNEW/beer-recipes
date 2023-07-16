import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Recipe as RecipeType } from "../../types/Recipe";
import './Recipe.scss';

type Props = {
  recipe: RecipeType;
  toggleSelectedCard: (id: number) => void;
};

const Recipe: React.FC<Props> = ({ recipe: { image_url, name, id }, toggleSelectedCard }) => {
  const [isSelected, setIsSelected] = useState(false);
  const {t} = useTranslation();
  
  const onChange = () => {
    toggleSelectedCard(id);
    setIsSelected(prev => !prev);
  };

  return (
    <div className="recipe">
      <input
        className="recipe__checkbox"
        type="checkbox"
        checked={isSelected}
        onChange={onChange}
      />

      <img className="recipe__img" src={image_url} alt="" />

      <h3 className="recipe__name">{name}</h3>

      <Link to={`./${id}`} className="recipe__btn">
        {t('seeRecipe')}
      </Link>
    </div>
  );
};

export default Recipe;