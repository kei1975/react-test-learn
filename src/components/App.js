
import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import '../css/app.css'
import {v4 as uuid} from 'uuid'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipies'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipies, setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipies.find(recipe => recipe.id === selectedRecipeId)
  // console.log(selectedRecipe)

 useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    //console.log(recipeJSON);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, []) //empty array is called just once  

  useEffect(() => {
    console.log('Rendered')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipies))
    // return () => console.log('recipes set')
  }, [recipies])//everytime recipies is changed useEffect is called

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuid(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {id: uuid(), name: '', amounts: ''}
      ]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipies, newRecipe])
  }
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipies]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }


  function handleRecipeDelete(id) {
    setRecipes(recipies.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipies={recipies}/>
        {
          // { selectedRecipe ? <RecipeEdit recipe={selectedRecipe} /> : null } => { selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
        }
        { selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain chicken',
    servings: 3,
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
    servings: 5,
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
