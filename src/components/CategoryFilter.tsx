
import { useState } from 'react';
import { Salad, UtensilsCrossed, Apple } from 'lucide-react';

type Category = 'Vegetable' | 'Rice' | 'Fruit';

interface CategoryFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  const categories: { name: Category; icon: JSX.Element }[] = [
    { name: 'Vegetable', icon: <Salad className="w-5 h-5" /> },
    { name: 'Rice', icon: <UtensilsCrossed className="w-5 h-5" /> },
    { name: 'Fruit', icon: <Apple className="w-5 h-5" /> },
  ];

  return (
    <div className="flex gap-3 py-4 overflow-x-auto no-scrollbar">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setActiveCategory(category.name)}
          className={`category-chip ${
            activeCategory === category.name ? 'category-chip-active' : 'category-chip-inactive'
          }`}
        >
          {category.icon}
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
