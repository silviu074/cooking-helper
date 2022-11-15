import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Test } from './components/Test';
import { MainPage } from './pages/MainPage';

function App() {


    // All recipes 

    const [recipes, setRecipes] = useState([])

  
    useEffect(() => {
      for(let i=52764; i < 53066; i++){
          axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`)
          .then(response => {
            const obj = Object.assign({}, response.data.meals); // converting array to object 
            setRecipes( current => [...current, obj[0] ] ) 
          })
          .catch(err => {
            setRecipes([])
            console.error(err);
        });
      }
    }, [])
  
    // Ingeredients
  
    const [ingredients, setIngredients] = useState([])
   
    useEffect( () => {
      axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(response => {
            setIngredients(response.data.meals)
        })
        .catch(err => {
            setIngredients([])
            console.log(err)
        })
    }, []) 
  
    // Categories
  
    const [categories, setCategories] = useState([])
  
    useEffect( () => {
      axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(response => {
            setCategories(response.data.meals)
        })
        .catch(err => {
            setCategories([])
            console.log(err)
        })
    }, []) 
  
    //  Area
  
    const [area, setArea] = useState([])
  
    useEffect( () => {
      axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then(response => {
            setArea(response.data.meals)
        })
        .catch(err => {
            setArea([])
            console.log(err)
        })
    }, []) 


  return (
    <div className="App">
      <Test recipes={recipes} ingredients={ingredients} categories={categories} area={area}/>
      <MainPage recipes={recipes}/>
    </div>
  );
}

export default App;
