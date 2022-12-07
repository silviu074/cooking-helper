import React, {  useState } from 'react'
import { Navbar } from '../components/Navbar'
import "../styles/MainPage.css"
import "../../src/App.css"
import { Recipe } from '../components/Recipe'

export const MainPage = ({recipes, areas, categories}) => {

  const [areaToRender, setAreaToRender] = useState([])
  const [categoryToRender, setCategoryToRender] = useState([])
  const [search, setSearch] = useState(' ')


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


  // Search

  
  let searchResults = recipes.map( (recipe, index) => {
    if(recipe?.strMeal.toLowerCase().includes(search?.toLowerCase()))
    return(
      <Recipe index={index} recipe={recipe}/>
  )
  })


  return (
    <React.Fragment>
      <Navbar/>
      <div className='mainpage-contianer'>
      <div className='filters'>


    {/* SEARCH */}
    
    <p>On this website you can find ~300 recipes. 
      Use the following filters if you are looking for something specific:</p>

    <div className='filterContent'>
    <input className='input'
      placeholder='Type recipe name' 
      type='search' 
      onChange={(e) => 
      setSearch(e.target.value)}/>
    </div>
   

    {/* AREA */}

      <div className='filterContent'>
      {/* <label className='label'>Recipe origin:</label> */}
        <select className='select' onChange={(e) => {
          const areaValue = e.target.value
          setAreaToRender(areaValue)
          setCategoryToRender(null)
          console.log(areaToRender)
          console.log(categoryToRender)
          if((areaToRender === null) && (categoryToRender === null) ){ 
            setSearch(' ') //if no filter is selected display all recipes
          }
          else setSearch(null)
        }}>
          <option value='null'>Country of Origin</option>
          {areaSelector}
        </select>
      </div>
 

    {/* CATEGORY */}

      <div className='filterContent'>
      {/* <label className='label'>Type of dish:</label> */}
        <select className='select' onChange={(e) => {
          const categoryValue = e.target.value
          setAreaToRender(null)
          setCategoryToRender(categoryValue)
          console.log(areaToRender)
          console.log(categoryToRender)
          if((areaToRender === null) && (categoryToRender === null) ){ 
            setSearch(' ') //if no filter is selected display all recipes
          }
          else setSearch(null)
        }}>
          <option value='null'>Type of dish</option>
          {categorySelector}
        </select>
      </div>
      </div> 


    <div className='recipesToRender'>
      {searchResults}
      {areaRecipesToRender}
      {categoryRecipesToRender}
    </div>

    </div>
    </React.Fragment>
  )
}
