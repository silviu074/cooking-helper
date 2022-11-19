import React, { useState } from 'react'
import "../styles/Recipe.css"

export const Recipe = ({index,recipe}) => {

    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(!popup)
    }


  return (
    <div key={index} className='render'>
            <h2>{recipe?.strMeal}</h2>
            <p>Type of dish: {recipe?.strCategory}</p>
            <p>Recipe origin: {recipe?.strArea}</p>
            {/* <p>{recipe?.strInstructions}</p> */}
            <img src={recipe?.strMealThumb} className='img'></img>
            {/* <p>{recipe?.strYoutube}</p> */}
            <button className='popup-button' onClick={togglePopup}>See recipe</button>
            {popup && (
                <div className='popup' >
                    <div onClick={togglePopup} className='overlay'></div>
                    <div className='popup-content'>
                        <h2>{recipe?.strMeal}</h2>
                        <p>Type of dish: {recipe?.strCategory}</p>
                        <p>Recipe origin: {recipe?.strArea}</p>
                        <img src={recipe?.strMealThumb} className='img'></img>
                        <p>Ingredients:</p>
                        {recipe.strIngredient1} {recipe.strMeasure1} <br/>
                        
                    </div>
                </div>
            ) }
        </div>
  )
}
