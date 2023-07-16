export type Recipe = {
  id: number;
  name: string,
  tagline: string,
  first_brewed: string,
  description: string,
  image_url: string,
  ingredients: any;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};  