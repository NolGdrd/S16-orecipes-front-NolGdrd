import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import Header from '../Header/Header'
import NavSideBar from '../NavSideBar/NavSideBar'
import Cards from '../cards/Cards'
import CardDetails from '../Card-details/Card-details'


import type { IRecipe, IIngredient } from '../../@types'
import Spinner from '../Spinner/Spinner'
import NotFound from "../NotFound/NotFound";



function App() {

  

  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const getRecipes = async () => {
      try {
        const result = await axios.get("https://orecipesapi.onrender.com/api/recipes");
        setRecipes(result.data);
      } catch(e) {
        console.error('Erreur lors du chargement des recettes', e);
      }
      setIsLoading(false);
    };

    const getIngredients = async () => {
      try {
        const result = await axios.get("https://orecipesapi.onrender.com/api/ingredients");
        setIngredients(result.data);
      } catch(e) {
        console.error('Erreur lors du chargement des ingrédients', e);
      }
    };
  
    getRecipes();
    getIngredients();
  }, []);

  
 

  return (

    
    <>
      <div className="app">
        <NavSideBar recipes={recipes} />
        <Header  />

        {
          isLoading ? ( <Spinner /> ) : (
            <Routes>
            <Route 
              path='/'
              element={<Cards recipes={recipes}/>} 
            />
            {recipes.map(recipe => (
              <Route key={recipe.id} path={`/${recipe.slug}`} element={<CardDetails recipe={recipe} />}
              />
            ))}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          )
        }
        
      </div>
      
    </>
  )
}

export default App
