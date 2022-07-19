
import React, { useState } from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
import {v4 as uuid} from 'uuid'

function App() {
  const [recipies, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd(){
    const newRecipe = {
      // id: Date.now().toString()
      id: uuid(),
      name: 'New',
      serving: 1,
      cookTime: '1:00',
      instructions: 'Instr',
      ingredients: [
        {id: uuid(), name: 'Name', amounts: '1 Tbs'}
      ]
    }
    setRecipes([...recipies, newRecipe])
  }
  
  return (
    <RecipeList 
      recipies={recipies}
      handleRecipeAdd={handleRecipeAdd}
    />
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain chicken',
    serving: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
            {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain pork',
    serving: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on Pork\n2. Put Pork in oven\n3. Eat Pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
            {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }

]

export default App;
