import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'
import Header from '../Header/Header'
import NavSideBar from '../NavSideBar/NavSideBar'
import Cards from '../cards/Cards'


import type { IRecipe, IIngredient } from '../../@types'
import Spinner from '../Spinner/Spinner'



function App() {

  

  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  // const [ingredients, setIngredients] = useState<IIngredient[]>([]);
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
  
    getRecipes();
  }, []);

  
 

  return (

    
    <>
      <div className="app">
        <NavSideBar />
        <Header />

        {
          isLoading ? ( <Spinner /> ) : (<Cards recipes={recipes}/>)
        }
        
      </div>
      
    </>
  )
}

export default App
