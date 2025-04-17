import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { LuShoppingBag } from 'react-icons/lu';
import { MdFastfood } from 'react-icons/md';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useSearch } from '../../context/SearchContext';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/slices/cartSlice';

const Navbar = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-8 dark:bg-gray-900 transition-all duration-500 ease-in-out">
      
      {/* Logo */}
      <div className="w-[60px] h-[60px] bg-white dark:bg-gray-800 flex justify-center items-center rounded-md shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <MdFastfood className="w-[30px] h-[30px] text-primary dark:text-white hover:text-secondary dark:hover:text-secondary transition-all duration-200" />
      </div>

      {/* Search Bar */}
      <form 
        onSubmit={(e) => e.preventDefault()}
        className="w-[60%] h-[60px] flex items-center bg-white dark:bg-gray-800 px-4 rounded-md shadow-xl group transition-all duration-300 hover:shadow-2xl focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-secondary"
      >
        <IoSearch className="text-primary dark:text-white w-6 h-6 mr-3 group transition-all duration-300" />
        <input
          type="text"
          placeholder="Search Item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-full outline-none text-gray-700 placeholder-gray-400 dark:text-white dark:placeholder-gray-500 focus:ring-0 transition-all duration-300"
        />
      </form>

      {/* Cart */}
      <div 
        onClick={() => dispatch(toggleCart())}
        className="relative w-[60px] h-[60px] bg-white dark:bg-gray-800 flex justify-center items-center rounded-md shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
      >
        <LuShoppingBag className="w-[30px] h-[30px] text-primary hover:text-secondary dark:text-white dark:hover:text-secondary transition-all duration-200" />
        
        {/* Badge */}
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
            {items.length}
          </span>
        )}
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
