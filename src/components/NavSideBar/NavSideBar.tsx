import "./NavSideBar.scss";
import type { IRecipe } from '../../@types/index';
import { NavLink } from "react-router-dom";

interface NavSideBarProps {
  recipes: IRecipe[];
}

function NavSideBar({ recipes }: NavSideBarProps) {
    return (
        <nav className="nav-side-bar">
            <NavLink  className={({ isActive }) => 
                    isActive ? "nav-side-bar-item active" : "nav-side-bar-item"
                }  to="/">Accueil</NavLink>
            {
                recipes.map(recipe => {
                    return (
                        <NavLink
                            key={recipe.slug}  
                            className={({ isActive }) => 
                                isActive ? "nav-side-bar-item active" : "nav-side-bar-item"
                            }
                            to={`/${recipe.slug}`} 
                        >
                            {recipe.title}  
                        </NavLink>
                    )
                })
            }
        </nav>
    )
}

export default NavSideBar;