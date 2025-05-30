import { useEffect, useState } from "react";
import ModernButton from "../Components/modern-button";

interface Category {
  id: number;
  tittle: string;
}

interface FilterProps {
  onSelectCategory: (category: string | null) => void;
}

const Filter = ({ onSelectCategory }: FilterProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data || []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleCategoryClick = (name: string | null) => {
    setSelectedCategory(name);
    onSelectCategory(name); // notify parent
  };

  return (
    <div className="flex gap-3 justify-center flex-wrap my-5">
      <ModernButton
        text="All"
        theme={selectedCategory === null ? "primary" : "secondary"}
        onClick={() => handleCategoryClick(null)}
        size="md"
      />
      {categories.map((cat) => (
        <ModernButton
          key={cat.id}
          text={cat.tittle}
          theme={selectedCategory === cat.tittle ? "primary" : "secondary"}
          onClick={() => handleCategoryClick(cat.tittle)}
          size="md"
        />
      ))}
    </div>
  );
};

export default Filter;
