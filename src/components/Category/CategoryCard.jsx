import React from 'react';
import { categories } from './CategoriesArray';

const CategoryCards = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-full py-10 px-5 flex flex-wrap gap-6 justify-center">
      {categories.map((category, index) => (
        <div
          key={category.id}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
          onClick={() => onSelectCategory(category.name)}
          className={`w-[120px] h-[140px] p-4 flex flex-col justify-center items-center rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer group ${
            selectedCategory === category.name 
              ? 'bg-secondary/60 text-white' 
              : 'bg-white dark:bg-gray-800 hover:bg-secondary/60'
          }`}
        >
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mb-2 transition-all duration-200">
            {React.cloneElement(category.image, {
              className:
                'w-[40px] h-[40px] text-primary group-hover:text-secondary transition-all duration-300',
            })}
          </div>
          <p className={`text-sm font-semibold text-center transition-all duration-200 ${
            selectedCategory === category.name 
              ? 'text-white' 
              : 'text-gray-700 dark:text-white group-hover:text-white'
          }`}>
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
