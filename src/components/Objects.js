import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Objects = () => {

    
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [ingredients, setIngredients] = useState()
    let ingredientsURL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list' // idIngredient, strIngredient, strDescription, strType
    let categoriesURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list' // strCategory
    let areaURL = 'www.themealdb.com/api/json/v1/1/list.php?a=list' // strArea

    // Filter by main ingredient: "www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    // "strMeal", "strMealThumb", "idMeal"

    // Filter by category: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    // "strMeal", "strMealThumb", "idMeal"
    
    // Filter by area: "www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
    // "strMeal", "strMealThumb", "idMeal"

    useEffect( () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
          .then(response => {
              setLoading(false)
              setIngredients(response.data.meals)
              setError(false)
          })
          .catch(err => {
              setLoading(false)
              setIngredients({})
              setError(true)
              console.log(err)
          })
      }, [])

      console.log(ingredients)

      let allIngredients =  ingredients?.map( (ingredient,index) => {
        return(
                <div key={index} >
                    <p>{ingredient.idIngredient}</p>
                    <p>{ingredient.strIngredient}</p>
                    <p>{ingredient.strDescription}</p>
                    <p>{ingredient.strType}</p>
                    <br/>
                </div>)
      })

  return (
    <React.Fragment>
    {loading ? 'Loading' : null}
    {error ? 'Something went wrong' : null}
    {
        allIngredients
    }
    </React.Fragment>
  )
}
