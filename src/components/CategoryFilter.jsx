import React from "react";
import { Button } from "flowbite-react";

const CategoryFilter = ({categories, onSelectCategory}) => {
  return (
    <div className="container mx-auto my-4 p-4 flex flex-wrap gap-2 max-w-7xl">
      <Button className="bg-linear-to-br from-pink-500 to-orange-400 text-white hover:bg-linear-to-bl focus:ring-pink-200 dark:focus:ring-pink-800" onClick={() => onSelectCategory("")} >
        All
      </Button>
        {categories.map((category) => (
            <Button key={category.idCategory} className="bg-linear-to-br from-pink-500 to-orange-400 text-white hover:bg-linear-to-bl focus:ring-pink-200 dark:focus:ring-pink-800" onClick={() => onSelectCategory(category.strCategory)}>
                {category.strCategory}
            </Button>
        ))}
    </div>
  );
};

export default CategoryFilter;
