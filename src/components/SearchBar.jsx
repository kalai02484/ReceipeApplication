import React, { useState } from "react";
import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";


const SearchBar = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    handleSearch(e.target.value); // Use handleSearch (camelCase)
  };

  return (
    <div>
      <input
        type="text"
        id="search"
        placeholder="Search Receipes..."
        required
        className="w-full md:w-96 lg:w-4xl rounded-full mx-auto py-4 bg-amber-50 px-6 text-gray-900 focus:ring-2 focus:ring-amber-400 focus:outline-none"
        onChange={(e) => handleChange(e)}
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 bg-amber-400 rounded-full p-3 transform -translate-y-1/2 text-2xl text-gray-500 hover:text-gray-700"
      >
        <HiSearch className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
