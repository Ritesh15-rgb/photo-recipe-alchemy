
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Heart } from 'lucide-react';
import { Recipe } from '@/components/RecipeCard';
import { useToast } from '@/components/ui/use-toast';

const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Chicken Fried Rice',
    description: 'So irresistibly delicious',
    calories: 250,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    category: 'Vegetable',
  },
  {
    id: '2',
    title: 'Pasta Bolognese',
    description: 'True Italian classic',
    calories: 200,
    imageUrl: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
    category: 'Rice',
  },
  {
    id: '3',
    title: 'Garlic Potatoes',
    description: 'Crispy Garlic Roasted Potatoes',
    calories: 150,
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf',
    category: 'Vegetable',
  },
  {
    id: '4',
    title: 'Fruit Salad',
    description: 'Sweet and refreshing mix',
    calories: 120,
    imageUrl: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7',
    category: 'Fruit',
  }
];

// Mock recipe details data
const mockRecipeDetails: Record<string, {
  prepTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
}> = {
  '1': {
    prepTime: '30 minutes',
    servings: 2,
    ingredients: [
      '2 boneless chicken breasts',
      '2 cups cooked rice',
      '2 eggs',
      '1 cup mixed vegetables',
      '3 tbsp soy sauce',
      'Salt and pepper to taste',
    ],
    instructions: [
      'Dice chicken and season with salt and pepper.',
      'Cook chicken in a pan until golden brown.',
      'Add mixed vegetables and stir-fry for 3 minutes.',
      'Push contents to one side, scramble eggs on the other side.',
      'Add rice and soy sauce, mix everything together.',
      'Cook for another 3-5 minutes until heated through.',
    ],
  },
  '2': {
    prepTime: '45 minutes',
    servings: 4,
    ingredients: [
      '1 lb ground beef',
      '1 onion, diced',
      '2 cloves garlic, minced',
      '1 can crushed tomatoes',
      '1 tbsp tomato paste',
      '1 lb pasta',
      'Parmesan cheese for serving',
    ],
    instructions: [
      'Brown the ground beef in a large pot.',
      'Add onion and garlic, cook until softened.',
      'Add crushed tomatoes and tomato paste.',
      'Simmer for 30 minutes, stirring occasionally.',
      'Cook pasta according to package instructions.',
      'Serve sauce over pasta with grated parmesan.',
    ],
  },
  '3': {
    prepTime: '50 minutes',
    servings: 4,
    ingredients: [
      '2 lbs baby potatoes',
      '4 cloves garlic, minced',
      '3 tbsp olive oil',
      '1 tsp dried rosemary',
      'Salt and pepper to taste',
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Cut potatoes into halves or quarters depending on size.',
      'Mix potatoes with garlic, olive oil, and seasonings.',
      'Spread on a baking sheet in a single layer.',
      'Roast for 30-40 minutes, turning halfway through.',
      'Potatoes should be golden and crispy when done.',
    ],
  },
  '4': {
    prepTime: '15 minutes',
    servings: 4,
    ingredients: [
      '1 cup strawberries, sliced',
      '1 cup pineapple chunks',
      '2 bananas, sliced',
      '1 cup grapes',
      '2 tbsp honey',
      'Mint leaves for garnish',
    ],
    instructions: [
      'Wash all fruit thoroughly.',
      'Cut fruit into bite-sized pieces.',
      'Combine all fruit in a large bowl.',
      'Drizzle with honey and toss gently to coat.',
      'Chill in refrigerator for at least 30 minutes before serving.',
      'Garnish with mint leaves just before serving.',
    ],
  },
};

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [recipeDetails, setRecipeDetails] = useState<any>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      // In a real app, fetch from API
      const found = mockRecipes.find(r => r.id === id);
      if (found) {
        setRecipe(found);
        setRecipeDetails(mockRecipeDetails[id]);
      }
    }
  }, [id]);

  if (!recipe || !recipeDetails) {
    return (
      <div className="max-w-md mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <p>Loading recipe details...</p>
      </div>
    );
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      duration: 2000,
    });
  };

  return (
    <div className="max-w-md mx-auto px-4 pb-20 bg-gray-50 min-h-screen">
      <div className="py-4 flex items-center justify-between">
        <Link to="/" className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <button 
          onClick={toggleFavorite}
          className="p-2"
        >
          <Heart 
            className={`h-6 w-6 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
          />
        </button>
      </div>

      <div className="mb-6">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title} 
          className="w-full h-64 object-cover rounded-3xl mb-4"
        />
        
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
        <p className="text-gray-500 mb-4">{recipe.description}</p>
        
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>{recipeDetails.prepTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>{recipeDetails.servings} servings</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{recipe.calories} Kcal</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3">Ingredients</h2>
        <ul className="space-y-2">
          {recipeDetails.ingredients.map((ingredient: string, index: number) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3">Instructions</h2>
        <ol className="space-y-4">
          {recipeDetails.instructions.map((instruction: string, index: number) => (
            <li key={index} className="flex gap-3">
              <div className="bg-primary text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center">
                {index + 1}
              </div>
              <p>{instruction}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
