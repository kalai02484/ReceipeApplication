import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const RecipeCard = () => {
  return (
    <div class="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div
        class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          class="object-cover"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
      </div>
      <div class="mt-4 px-4 pb-5">
        <h6 class="text-xl tracking-tight text-slate-900 font-bold">
          Nike Air MX Super 2500 - Red
        </h6>
        <p className="mt-2 mb-5">
            <span class="mr-1 text-sm font-bold text-green-600">Category :</span>
            <span class="text-sm text-gray-600 font-light">Sneakers</span>
        </p>
        <div class="flex items-center justify-between gap-2">
          <a
            href="#"
            class="flex items-center justify-center rounded-md bg-amber-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring-blue-300 transition-all duration-200 w-full border-2 border-amber-600 hover:border-amber-500"
          >
            View Details
          </a>
          <a
            href="#"
            class="flex items-center justify-center rounded-md border-2 border-gray-400 px-3 py-2.5 text-sm font-medium focus:outline-none focus:ring-blue-300 transition-all duration-200 "
          >
            <FiHeart class="text-lg text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
