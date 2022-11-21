import React, { useState } from 'react'
import "../styles/Recipe.css"

export const Recipe = ({index,recipe}) => {

    // Enable/Disable pop-up for each recipe

    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(!popup)
    }

    // Returning the image for an ingredient

    function ingredientImageRender(ingredientsImage, i){
        let j = eval(`recipe.strIngredient${i}`)
        if((j !== "") && (j !== 'null')) {
            let textToSrc = j.replace(" ","%20")
            ingredientsImage[i] = `https://www.themealdb.com/images/ingredients/${textToSrc}.png`
            console.log(ingredientsImage[i])
            return (<img 
                        className='ingredientImage' 
                        src={ingredientsImage[i]} 
                        alt={ingredientsImage[i]}></img>)
        }
    }

    // Returning the string value for an ingredient

    function ingredientTextRender(ingredientsText, i){
        let ingredientText = eval(`recipe.strIngredient${i}`)
            if((ingredientText !== "") && (ingredientText !== 'null')) {
                ingredientsText[i] = ingredientText
                console.log(ingredientsText[i])
                return (<p>{ingredientsText[i]}</p>)
            }
    }

    // Returning the quantity needed for an ingredient

    function measureTextRender(measuresText, i){
        let measureText = eval(`recipe.strMeasure${i}`)
        if((measureText !== "") && (measureText !== 'null')){
            measuresText[i] = measureText
            console.log(measuresText[i])
            return (<p>{measuresText[i]}</p>)
        }
    }

    // Generating all the ingredients data

    const ingredientsText = []
    const measuresText = []
    const ingredientsImage = []
    const generateIngredients = []

    for(let i=1;i<=20;i++){
        generateIngredients[i] =
            <div key={i} className='generatedIngredients'>
            {ingredientImageRender(ingredientsImage, i)}
            {ingredientTextRender(ingredientsText, i)}
            {measureTextRender(measuresText, i)}
            </div>
    }

    

  return (
    <div key={index} className='render'>
            <h2>{recipe?.strMeal}</h2>
            <p>Type of dish: {recipe?.strCategory}</p>
            <p>Recipe origin: {recipe?.strArea}</p>
            {/* <p>{recipe?.strInstructions}</p> */}
            <img 
                className='img' 
                src={recipe?.strMealThumb} 
                alt={recipe?.strMealThumb}></img>
            {/* <p>{recipe?.strYoutube}</p> */}
            <button className='popup-button' onClick={togglePopup}>See recipe</button>
            {popup && (
                <div className='popup' >
                    <div onClick={togglePopup} className='overlay'></div>
                    <div className='popup-content'>
                        <h2>{recipe?.strMeal}</h2>
                        <p>Type of dish: {recipe?.strCategory}</p>
                        <p>Recipe origin: {recipe?.strArea}</p>
                        <img 
                            className='img' 
                            src={recipe?.strMealThumb} 
                            alt="{recipe?.strMealThumb}"></img>
                        <p>Ingredients:</p>

                        <div className='ingredients'>
                        {generateIngredients} <br/>
                        </div>
                    </div>
                </div>
            ) }
        </div>
  )
}
