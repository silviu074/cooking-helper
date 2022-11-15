import React from 'react'

export const MainPage = ({recipes}) => {

  let recipesToRender = recipes.map( (recipe, index) => {
    return(
        <div key={index}>
            <p>{recipe?.strMeal}</p>
            <p>{recipe?.strCategory}</p>
            <p>{recipe?.strArea}</p>
            <p>{recipe?.strInstructions}</p>
            <p>{recipe?.strMealThumb}</p>
            <p>{recipe?.strYoutube}</p><br/><br/><br/><br/><br/>
        </div>
    )
  })

  return (
    <div>
        {recipesToRender}
    </div>
  )
}
