import React from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'

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
