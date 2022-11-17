import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import axios from 'axios';
import './App.css';
import { MainPage } from './pages/MainPage';
import { EasyRecipes } from './pages/EasyRecipes';
import { Leftovers } from './pages/Leftovers';

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
  
    const [areas, setAreas] = useState([])
  
    useEffect( () => {
      axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then(response => {
            setAreas(response.data.meals)
        })
        .catch(err => {
            setAreas([])
            console.log(err)
        })
    }, []) 


  return (
    <React.Fragment>
      <BrowserRouter>
       <Routes>
        <Route path="/" exact element={<MainPage recipes={recipes} areas={areas} categories={categories}/>} />
        <Route path="/leftovers" exact element={ <Leftovers/> }/>
        <Route path="/easy-recipes" exact element={ <EasyRecipes/> }/>
       </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
