import "./NavSideBar.scss";
import type { IRecipe } from '../../@types/index';

interface NavSideBarProps {
  recipes: IRecipe[];
}

function NavSideBar({ recipes }: NavSideBarProps) {
    return (
        <nav className="nav-side-bar">
            <a className="nav-side-bar-item" href="/">Accueil</a>
            {
                recipes.map(recipe => {
                    return (
                        <a 
                            key={recipe.slug}  
                            className="nav-side-bar-item" 
                            href={`/${recipe.slug}`} 
                        >
                            {recipe.title}  
                        </a>
                    )
                })
            }
        </nav>
    )
}

export default NavSideBar;