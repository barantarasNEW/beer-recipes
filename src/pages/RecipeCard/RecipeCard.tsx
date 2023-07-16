import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import useRecipesStore from "../../stores/recipes";
import NotFound from "../../components/NotFound/NotFound";
import { Recipe } from "../../types/Recipe";
import './RecipeCard.scss';

const formatTime = (time: string) => {
  return time.split('/').join('-')
};

const RecipeCard = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const {recipes} = useRecipesStore(state => state);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setRecipe(recipes.find(currRecipe => currRecipe.id === +id) || null);
    }
  }, [id, recipes]);

  if (!recipe) {
    return <NotFound />;
  }

  return (
    <section>
     <div className="container">
        <button
          className="recipe-card__btn"
          onClick={() => navigate(-1)}
        >
          <BsFillArrowLeftCircleFill size={30} />
        </button>

        <div className="recipe-card">
          <img
            className="recipe-card__img"
            src={recipe?.image_url}
            alt="beer"
          />
    
          <h2 className="recipe-card__title">
            {recipe?.name}
          </h2>
  
          <p className="recipe-card__subtitle">
            {recipe?.tagline}
          </p>
  
          <time
            dateTime={formatTime(recipe?.first_brewed || '')}
          >
            {recipe?.first_brewed}
          </time>
  
          <i className="recipe-card__description">
            {recipe?.description}
          </i>

          <hr className="recipe-card__line" />
  
          <ul className="recipe-card__list">
            <li className="recipe-card__item">
              <h3 className="recipe-card__item-title">Ingredients:</h3>

              <ul className="recipe-card__list">
                <li className="recipe-card__item">
                  <h4>Malt:</h4>
  
                  <ul className="recipe-card__list">
                    {recipe?.ingredients.malt.map((value: any, index: number)=> (
                      <li key={index} className="recipe-card__item">
                        {value.name} - {value.amount.value} {value.amount.unit}
                      </li>
                    ))}
                  </ul>
                </li>
  
                <li className="recipe-card__item">
                  <h4>Hops:</h4>
  
                  <ul className="recipe-card__list">
                    {recipe?.ingredients.hops.map((value: any, index: number)=> (
                      <li key={index} className="recipe-card__item">
                        {value.name} - {value.amount.value} {value.amount.unit}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>

            </li>
  
            <li className="recipe-card__item">
              <h3 className="recipe-card__item-title">Food pairing:</h3>
              
              <ul className="recipe-card__list">
                {recipe?.food_pairing.map(value => (
                  <li key={value} className="recipe-card__item">
                    {value}
                  </li>
                ))}
              </ul>
            </li>
  
            <li className="recipe-card__item">
              <h3 className="recipe-card__item-title">Tips:</h3>

              {recipe?.brewers_tips}
            </li>
          </ul>

          <hr className="recipe-card__line" />
  
          <i className="recipe-card__contributor">
            {recipe?.contributed_by}
          </i>
        </div>
     </div>
    </section>
  );
};

export default RecipeCard;