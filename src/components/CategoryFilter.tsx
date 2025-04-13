
import { useState } from 'react';
import { Salad, UtensilsCrossed, Apple, FilterX, Egg, Fish, Pizza, Cookie, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = 'All' | 'Vegetable' | 'Rice' | 'Fruit' | 'Breakfast' | 'Seafood' | 'Fast Food' | 'Dessert' | 'Beverages';

interface CategoryFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  const categories: { name: Category; icon: JSX.Element }[] = [
    { name: 'All', icon: <FilterX className="w-5 h-5" /> },
    { name: 'Vegetable', icon: <Salad className="w-5 h-5" /> },
    { name: 'Rice', icon: <UtensilsCrossed className="w-5 h-5" /> },
    { name: 'Fruit', icon: <Apple className="w-5 h-5" /> },
    { name: 'Breakfast', icon: <Egg className="w-5 h-5" /> },
    { name: 'Seafood', icon: <Fish className="w-5 h-5" /> },
    { name: 'Fast Food', icon: <Pizza className="w-5 h-5" /> },
    { name: 'Dessert', icon: <Cookie className="w-5 h-5" /> },
    { name: 'Beverages', icon: <Coffee className="w-5 h-5" /> },
  ];

  return (
    <div className="py-5">
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={cn(
              "category-chip snap-start min-w-[120px] shadow-sm transition-all duration-200 flex-shrink-0",
              activeCategory === category.name 
                ? "category-chip-active scale-105 shadow-md" 
                : "category-chip-inactive hover:bg-gray-50"
            )}
          >
            <div className={cn(
              "flex items-center justify-center rounded-full p-2 mr-2",
              activeCategory === category.name ? "bg-white/30" : "bg-primary/10"
            )}>
              {category.icon}
            </div>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
