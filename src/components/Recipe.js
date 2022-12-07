import React, { useState } from 'react'
import YouTube from 'react-youtube'
import "../styles/Recipe.css"

export const Recipe = ({index,recipe}) => {

    // Enable/Disable pop-up for each recipe

    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(!popup)
    }

    // Returning the image for an ingredient

    function ingredientImageRender(ingredientsImage, i){
        let ingredientText = eval(`recipe.strIngredient${i}`)
        if((ingredientText !== "") && (ingredientText !== " ") && (ingredientText !== null) ) {
            // console.log(ingredientText)
            let textToSrc = ingredientText.replace(" ","%20")
            ingredientsImage[i] = `https://www.themealdb.com/images/ingredients/${textToSrc}.png`
            // console.log(ingredientsImage[i])
            return (<img 
                        className='ingredientImage' 
                        src={ingredientsImage[i]} 
                        alt={ingredientsImage[i]}></img>)
        }
    }

    // Returning the string value for an ingredient

    function ingredientTextRender(ingredientsText, i){
        let ingredientText = eval(`recipe.strIngredient${i}`)
            if((ingredientText !== "") && (ingredientText !== " ") && (ingredientText !== null)) {
                ingredientsText[i] = ingredientText
                // console.log(ingredientsText[i])
                return (<p>{ingredientsText[i]}</p>)
            }
    }

    // Returning the quantity needed for an ingredient

    function measureTextRender(measuresText, i){
        let measureText = eval(`recipe.strMeasure${i}`)
        if((measureText !== "") && (measureText !== " ") && (measureText !== null)){
            measuresText[i] = measureText
            // console.log(measuresText[i])
            return (<p>{measuresText[i]} of</p>)
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
            {measureTextRender(measuresText, i)}
            {ingredientTextRender(ingredientsText, i)}
            </div>
    }

    // Extracting the ID from a youtube link and preparing the youtube-react component to render

    const youtubeID = recipe?.strYoutube.split("=")[1]
    // console.log(recipe?.strYoutube)
    // console.log(youtubeID)

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    // Preparing the description of the recipe

    const description = recipe?.strInstructions
    // console.log(recipe?.idMeal)

    // Page rendering

  return (
    <div key={index} className='render'>
        <div className='recipe-preview'>
            <h3 className='title'>{recipe?.strMeal}</h3>
            <p className='subtitle'>Type of dish: {recipe?.strCategory}</p>
            <p className='subtitle'>Recipe origin: {recipe?.strArea}</p>
            <img 
                className='img' 
                src={recipe?.strMealThumb} 
                alt={recipe?.strMealThumb}></img>
            <button className='popup-button' onClick={togglePopup}>See recipe</button>
        </div>   
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
                            alt={recipe?.strMealThumb}>
                        </img>
                        <h3 className='padding-top-bot-5'>Ingredients:</h3>
                        <div className='popup-part2'>
                        <div className='ingredients'>
                        {generateIngredients}
                        </div>
                    </div>
                    <h3>Instructions:</h3>
                    <p style={{whiteSpace: "pre-wrap"}} className='description'>{description}</p> 
                    <h3 className='padding-top-bot-5'>Youtube tutorial:</h3>
                    <div className='padding-top-bot-5'>
                    <YouTube videoId ={youtubeID} opts={opts}/>
                    </div>
                    </div>
                </div>
            ) }
        </div>
  )
}
