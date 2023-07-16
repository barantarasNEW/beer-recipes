import {useEffect, useMemo, useState } from "react";
import {AiFillDelete} from 'react-icons/ai'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useRecipeStore from "../../stores/recipes";
import Loader from "../../components/Loader/Loader";
import Recipe from "../../components/Recipe/Recipe";
import './Recipes.scss';

const Recipes = () => {
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const { loading, recipes, filterRecipes, addNewRecipes } = useRecipeStore(state => state);
  const visibleRecipes = useMemo(() => {
    const result = recipes.slice(0, 15);

    if (result.length !== 15 && recipes.length !== 15) {
      setPage(curr => curr + 1);

      return recipes.slice(0, 15);
    }

    return result;
  }, [recipes]);

  const toggleSelectedCard = (id: number) => {
    setSelectedCards(prev => {
      if (prev.includes(id)) {
        return prev.filter(currId => currId !== id);
      }

      return ([...prev, id]);
    });
  };

  const onRemoveCards = () => {
    filterRecipes(selectedCards);

    setSelectedCards([]);
  };

  useEffect(() => {
    addNewRecipes(page);
  }, [page, addNewRecipes]);

  if (loading) {
    return <Loader />
  }

  return (
    <section className="recipes">
      <div className="container">
        {!!selectedCards.length && (
          <button className="recipes__remove" onClick={onRemoveCards}>
            <AiFillDelete size={30} />
          </button>
        )}

        <ul>
          <TransitionGroup className="recipes__list">
            {visibleRecipes.map((recipe) => (
              <CSSTransition
                key={recipe.id}
                timeout={500}
                classNames="item"
              >
                <li key={recipe.id} className="recipes__item">
                  <Recipe recipe={recipe} toggleSelectedCard={toggleSelectedCard} />
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </div>
    </section>
  );
};

export default Recipes;