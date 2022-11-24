import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import "../styles/MainPage.css"
import { Recipe } from '../components/Recipe'

export const MainPage = ({recipes, areas, categories}) => {

  const [areaToRender, setAreaToRender] = useState([])
  const [categoryToRender, setCategoryToRender] = useState([])


  // Area selection and render

  let areaSelector = areas.map( (area, index) => {
    return(
    <option key={index} value={area.strArea}>{area.strArea}</option>
    )
  })

  let areaRecipesToRender = recipes.map( (recipe, index) => {
    if((areaToRender === 'all') && (typeof(recipe) != 'undefined'))
    return(
      <Recipe index={index} recipe={recipe}/>
    )
    if(areaToRender === recipe?.strArea)
    return(
      <Recipe index={index} recipe={recipe}/>
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
        <Recipe index={index} recipe={recipe}/>
    )
  })



  return (
    <React.Fragment>
      <Navbar/>
      <div className='mainpage-contianer'>

    {/* AREA */}

      <div className='areaSelector'>
      <label className='label'>Recipe origin:</label>
        <select className='select' onChange={(e) => {
          const areaValue = e.target.value
          setAreaToRender(areaValue)
        }}>
          <option value='null'>Select here</option>
          <option value='all'>All recipes</option>
          {areaSelector}
        </select>
      </div>
      <div className='areaRecipesToRender'>
     {areaRecipesToRender}
     </div>

    {/* CATEGORY */}

      <div className='categorySelector'>
      <label className='label'>Type of dish:</label>
        <select className='select' onChange={(e) => {
          const categoryValue = e.target.value
          setCategoryToRender(categoryValue)
        }}>
          <option value='null'>Select here</option>
          {categorySelector}
        </select>
      </div>
    <div className='categoryRecipesToRender'>
      {categoryRecipesToRender}
    </div>

    </div>
    </React.Fragment>
  )
}
