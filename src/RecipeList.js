import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({recipies}) {
  return (
    <div>
        {recipies.map(recipe => {
            return (
            <Recipe 
                key={recipe.id} 
                {...recipe} 
            />
            )
        })}
    </div>
  )
}
