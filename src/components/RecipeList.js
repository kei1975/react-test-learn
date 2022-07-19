import React from 'react'
import Recipe from './Recipe'

export default function RecipeList(props) {
  const {
    recipies, 
    handleRecipeAdd,
    handleRecipeDelete
  } = props

  return (
    <div className="recipe-list">
        <div>
            {recipies.map(recipe => {
                return (
                <Recipe 
                    key={recipe.id} 
                    {...recipe} 
                    handleRecipeDelete={handleRecipeDelete}
                />
                )
            })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
          <button 
          className="btn btn--primary"
          onClick={handleRecipeAdd}
          >Add Recipe
          </button>
        </div>
    </div>
  )
}
