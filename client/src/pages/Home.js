import React, { useState, useEffect } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="RecipeList">
      <h1 className="RecipeList-heading">Recipes</h1>
      <div>
        {recipes.map(recipe => (
          <div className="RecipeList-recipe" key={recipe.id}>
            <h3 className="RecipeList-title">{recipe.title}</h3>
            <p className="RecipeList-instructions">{recipe.instructions}</p>
            <small className="RecipeList-time">{recipe.minutes_to_complete} minutes</small>
          </div>
        ))}
      </div>
    </div>
  );  
}

function Recipe(props) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/recipes/${props.id}`)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [props.id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className='newrecipe'>
      <h1 className='newtitle'>{recipe.title}</h1>
      <p className='newinfo'>{recipe.instructions}</p>
      <small className='newtime'>Time to complete: {recipe.minutes_to_complete} minutes</small>
    </div>
  );
}

function NewRecipeForm(props) {
  const [title, setTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [minutesToComplete, setMinutesToComplete] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('http://127.0.0.1:3000/recipes/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        instructions: instructions,
        minutes_to_complete: minutesToComplete,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors.join('\n'));
        } else {
          props.onSuccess(data);
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Instructions:
        <textarea value={instructions} onChange={event => setInstructions(event.target.value)} />
      </label>
      <br />
      <label>
        Minutes to complete:
        <input type="number" value={minutesToComplete} onChange={event => setMinutesToComplete(event.target.value)} />
      </label>
      <br />
      <button type="submit">Create Recipe</button>
    </form>
  );
}

export default function Recipes() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [showNewRecipeForm, setShowNewRecipeForm] = useState(false);

  const handleRecipeClick = (id) => {
    setSelectedRecipeId(id);
  };

  const handleNewRecipeSuccess = (recipe) => {
    setSelectedRecipeId(recipe.id);
    setShowNewRecipeForm(false);
  };

  return (
    <div className='home'>
      {showNewRecipeForm ? (
        <NewRecipeForm onSuccess={handleNewRecipeSuccess} />
      ) : (
        <>
          <button onClick={() => setShowNewRecipeForm(true)}>New Recipe</button>
          {selectedRecipeId ? (
            <Recipe id={selectedRecipeId} />
          ) : (
            <RecipeList onRecipeClick={handleRecipeClick} />
          )}
        </>
      )}
    </div>
  );
}

