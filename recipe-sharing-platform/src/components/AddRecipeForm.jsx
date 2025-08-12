import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !ingredients.trim() || !instructions.trim()) {
      setErrors("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split("\n").map((item) => item.trim()).filter(Boolean);
    const instructionList = instructions.split("\n").map((step) => step.trim()).filter(Boolean);
    
    if (ingredientList.length < 2) {
      setErrors("Please include at least two ingredients to validate your form.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredientList,
      instructions: instructionList,
    };
    
    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors("");
  };

  return (
    <div className="max-w-2xl md:mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      {errors && <p className="text-red-500 mb-4">{errors}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Recipe Title</label>
          <input 
            type="text" 
            className="w-full mt-1 p-2 border rounded" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Ingredients (one per line)</label>
          <textarea 
            className="w-full mt-1 p-2 border rounded h-24"
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Preparation steps (one per line)</label>
          <textarea 
            className="w-full mt-1 p-2 border rounded h-24"
            value={instructions} 
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
