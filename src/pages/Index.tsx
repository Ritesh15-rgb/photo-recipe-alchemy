
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CategoryFilter from '@/components/CategoryFilter';
import RecipeGrid from '@/components/RecipeGrid';
import PopularRecipes from '@/components/PopularRecipes';
import CameraButton from '@/components/CameraButton';
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

type Category = 'Vegetable' | 'Rice' | 'Fruit';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Vegetable');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, we would fetch from an API
    setRecipes(mockRecipes);
    
    // Display welcome toast on initial load
    toast({
      title: "Welcome to Springy Salads!",
      description: "Discover healthy and delicious recipes",
      duration: 3000,
    });
  }, []);
  
  const featuredRecipes = recipes.filter(r => r.category === activeCategory);
  const popularRecipes = recipes.filter(r => r.id === '3');

  return (
    <div className="max-w-md mx-auto px-4 pb-20 bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="mb-6">
        <h1 className="text-4xl font-bold">Springy Salads</h1>
        <p className="text-gray-400">Healthy and nutritious food recipes</p>
      </div>
      
      <CategoryFilter 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      {featuredRecipes.length > 0 && (
        <RecipeGrid 
          recipes={featuredRecipes}
          category={activeCategory} 
        />
      )}
      
      <PopularRecipes recipes={popularRecipes} />
      
      <CameraButton />
    </div>
  );
};

export default Index;
