import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import "../styles/MainPage.css"

export const MainPage = ({recipes, areas, categories}) => {

  const [areaToRender, setAreaToRender] = useState()
  const [categoryToRender, setCategoryToRender] = useState()


  // Area selection and render

  let areaSelector = areas.map( (area, index) => {
    return(
    <option key={index} value={area.strArea}>{area.strArea}</option>
    )
  })

  let areaRecipesToRender = recipes.map( (recipe, index) => {
    if(areaToRender === recipe?.strArea)
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


  // Category selection and render

  let categorySelector = categories.map( (category, index) => {
    return(
    <option key={index} value={category.strCategory}>{category.strCategory}</option>
    )
  })

  let categoryRecipesToRender = recipes.map( (recipe, index) => {
    if(categoryToRender === recipe?.strCategory)
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
      <div className='areaSelector'>
      <label>Choose area:</label>
        <select onChange={(e) => {
          const areaValue = e.target.value
          setAreaToRender(areaValue)
        }}>
          <option value='null'>Select here</option>
          {areaSelector}
        </select>
      </div>

      <div className='categorySelector'>
      <label>Choose category:</label>
        <select onChange={(e) => {
          const categoryValue = e.target.value
          setCategoryToRender(categoryValue)
        }}>
          <option value='null'>Select here</option>
          {categorySelector}
        </select>
      </div>
  

    <div>
        {areaRecipesToRender}
        {categoryRecipesToRender}
    </div>
    </React.Fragment>
  )
}
