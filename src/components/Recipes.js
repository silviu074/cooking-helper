import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Recipes = () => {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    for(let i=52764; i < 53066; i++){
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`)
        .then(response => {
          const obj = Object.assign({}, response.data.meals);
          setRecipes( current => [...current, obj[0] ] )
        })
        .catch(err => {
          console.error(err);
      });
    }
  }, [])

  console.log(recipes)

  return (
    <div></div>
  )
}
