import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import Header from '../Header/Header'
import NavSideBar from '../NavSideBar/NavSideBar'
import Cards from '../cards/Cards'

import { IRecipe, IIngredient } from '../../@types'
import { get } from 'http'


function App() {

  

  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  // const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const loadRecipes = async () => {
  //   try{
  //     const response = await fetch('https://orecipesapi.onrender.com/api/recipes');
  //     const data = await response.json();
  //     setRecipes(data);

  //   } catch(error){
  //     console.error('Erreur lors du chargement des recettes',error);
  //   }
  // }

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const result = await axios.get("https://orecipesapi.onrender.com/api/recipes");
        setRecipes(result.data);
      } catch(e) {
        console.error('Erreur lors du chargement des recettes', e);
      }
    };
  
    getRecipes();
  }, []);

  
 

  return (

    
    <>
      <div className="app">
        <NavSideBar />
        <Header />
        <Cards recipes={recipes}/>
      </div>
      
    </>
  )
}

export default App
