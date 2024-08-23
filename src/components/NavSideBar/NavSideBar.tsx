import "./NavSideBar.scss";
import type { IRecipe } from '../../@types/index';
import { Link, NavLink } from "react-router-dom";

interface NavSideBarProps {
  recipes: IRecipe[];
}

function NavSideBar({ recipes }: NavSideBarProps) {
    return (
        <nav className="nav-side-bar">
            <Link className="nav-side-bar-item" href="/">Accueil</Link>
            {
                recipes.map(recipe => {
                    return (
                        <Link
                            key={recipe.slug}  
                            className="nav-side-bar-item" 
                            to={`/${recipe.slug}`} 
                        >
                            {recipe.title}  
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default NavSideBar;