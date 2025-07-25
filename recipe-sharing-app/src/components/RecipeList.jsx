import { Link } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes.length ? state.filteredRecipes : state.recipes);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  
  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>Favorite</button>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;