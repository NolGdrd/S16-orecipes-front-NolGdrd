// objet qui correspond à une recette
export interface IRecipe {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  author : string;
  difficulty : string;
  description : string
  ingredients : TIngredients[];
  instructions : TInstructionss[];
}

// objet qui correspond à un Ingredient
export interface IIngredient{
  id: number;
  quantity: number;
  unit : string;
  name : string;
}

// objet qui correspond à un Ingredient
export interface IIstruction{
  instuctions :string ;
}