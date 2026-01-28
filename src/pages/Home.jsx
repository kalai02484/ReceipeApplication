import React, { useState } from "react";
import HomeBannerBg from "../assets/HomeBannerBg.jpg";
import logo from "../assets/logo.png";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [meals, setMeals] = useState([]);

  const handleSearch = async (query = "") => {
    try {
      const results = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
      );
      setMeals(results.data.meals || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      <div
        className="relative w-full flex justify-center items-center bg-cover h-96 flex-col"
        style={{ backgroundImage: `url(${HomeBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-xl md:text-5xl text-center mb-3 md:mb-4 relative text-white font-light flex flex-col items-center justify-center">
          <img src={logo} className=" h-40" alt="Logo" />   
        </div>

        <div className="max-w-5xl relative">
          <SearchBar handleSearch={handleSearch} />
        </div>
      </div>

      <CategoryFilter />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {meals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{meal.strMeal}</h3>
                  <p className="text-gray-600 text-sm">
                    {meal.strInstructions.length > 100
                      ? meal.strInstructions.substring(0, 100) + "..."
                      : meal.strInstructions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No meals found. Try searching for something else!
          </p>
        )}
      </div>
<div className="container mx-auto px-4 py-8 max-w-7xl">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">   
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />  
        <RecipeCard />  
    </div>
</div>
      
    </>
  );
};

export default Home;
