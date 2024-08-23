export interface IRecipe {
    
    id: number;
    title: string;
    slug: string;
    thumbnail: string;
    author: string;
    difficulty: string;
    description: string;
    instructions: string[];
    ingredients: IIngredient[];
}


export interface IIngredient {
    id: number;
    name: string;
    quantity: string;
    unit: string;
}