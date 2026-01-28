import React from "react";
import { Button } from "flowbite-react";

const CategoryFilter = () => {
  return (
    <div className="container mx-auto my-4 px-4 py-12 flex flex-wrap gap-2 max-w-7xl">
      <Button className="bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800">
        All
      </Button>
    </div>
  );
};

export default CategoryFilter;
