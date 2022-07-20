
import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
import {v4 as uuid} from 'uuid'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipies'

function App() {
  const [recipies, setRecipes] = useState(sampleRecipes)
  console.log('localStorage.getItem')

 useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    console.log(recipeJSON);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, []) //empty array is called just once  

  useEffect(() => {
    console.log('Rendered')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipies))
  }, [recipies])//everytime recipies is changed useEffect is called

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd(){
    const newRecipe = {
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

  function handleRecipeDelete(id) {
    setRecipes(recipies.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList 
        recipies={recipies}
      />
    </RecipeContext.Provider>
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
