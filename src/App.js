import React from 'react'
import RecipeList from './RecipeList'

function App() {
  return (
    <RecipeList recipies={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain chicken',
    serving: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat chicken"
  },
  {
    id: 2,
    name: 'Plain pork',
    serving: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on Pork\n2. Put Pork in oven\n3. Eat Pork"
  }

]

export default App;
