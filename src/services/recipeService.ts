
import axios from 'axios';
import { Recipe } from '@/components/RecipeCard';

// This would be stored securely in environment variables in a real app
const API_KEY = 'demo-api-key';

export async function uploadFoodImage(imageFile: File): Promise<string> {
  // In a real app, this would upload to a server or cloud storage
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(imageFile);
  });
}

export async function generateRecipeFromImage(imageUrl: string): Promise<Recipe> {
  // In a real app, this would call a backend API or AI service
  // This is mocked for demo purposes
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return a fake recipe
  return {
    id: 'generated-' + Date.now(),
    title: 'AI Generated Recipe',
    description: 'Created from your food photo',
    calories: 180,
    imageUrl: imageUrl,
    category: 'Vegetable',
  };
}

export async function fetchRecipes(): Promise<Recipe[]> {
  // In a real app, this would fetch from a backend API
  // For now, return mock data
  
  return [
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
}

export async function fetchRecipeById(id: string): Promise<Recipe | null> {
  // In a real app, this would fetch from a backend API
  const recipes = await fetchRecipes();
  return recipes.find(recipe => recipe.id === id) || null;
}
