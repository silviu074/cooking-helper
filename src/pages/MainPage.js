import React from 'react'
import { Navbar } from '../components/Navbar'

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
    <React.Fragment>
      <Navbar/>
      <label for="area">Choose area</label>
  <select name="area" id="area">
    <option value="mexican">Mexican</option>
    <option value="mexican">Mexican</option>
    <option value="mexican">Mexican</option>
    <option value="mexican">Mexican</option>
    <option value="mexican">Mexican</option>
    <option value="mexican">Mexican</option>
  </select>

    <div>
        {recipesToRender}
    </div>
    </React.Fragment>
  )
}
