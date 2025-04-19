
import { Salad, UtensilsCrossed, Apple, Filter, EggFried, Soup, Sandwich } from 'lucide-react';

type Category = 'All' | 'Vegetable' | 'Rice' | 'Fruit' | 'Eggs' | 'Snacks' | 'Soups';

interface CategoryFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  const categories: { name: Category; icon: JSX.Element }[] = [
    {
      name: 'All',
      icon: <Filter className="w-5 h-5" />,
    },
    {
      name: 'Vegetable',
      icon: <Salad className="w-5 h-5" />,
    },
    {
      name: 'Rice',
      icon: <UtensilsCrossed className="w-5 h-5" />,
    },
    {
      name: 'Fruit',
      icon: <Apple className="w-5 h-5" />,
    },
    {
      name: 'Eggs',
      icon: <EggFried className="w-5 h-5" />,
    },
    {
      name: 'Snacks',
      icon: <Sandwich className="w-5 h-5" />,
    },
    {
      name: 'Soups',
      icon: <Soup className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex gap-3 py-4 overflow-x-auto no-scrollbar">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setActiveCategory(category.name)}
          className={`category-chip ${activeCategory === category.name ? 'category-chip-active' : 'category-chip-inactive'}`}
        >
          {category.icon}
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

