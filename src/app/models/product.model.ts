// Images (if we have few of them). Use a slider component for that.
// Categories (look as labels)
// Ingredients list (on a specific language)
// Stores it is sold in
// Volume

export interface Product {
  name: string;
  images: string[];
  categories: string[];
  ingredients: string
  stores: string;
  volume: string;
}
