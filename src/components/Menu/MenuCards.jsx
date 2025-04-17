import React from "react";
import { menuItems } from "./MenuItems";
import { useSearch } from "../../context/SearchContext";
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuCards = ({ selectedCategory }) => {
  const { searchTerm } = useSearch();
  const dispatch = useDispatch();

  // Filter logic
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    toast.success(`${item.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6 px-4">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className="group w-[250px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-secondary/60 dark:hover:bg-gray-700"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-[180px] object-cover p-2"
            />

            <div className="p-4 flex flex-col justify-between h-[170px]">
              <h3 className="text-xl font-semibold text-primary dark:text-white group-hover:text-white">
                {item.name}
              </h3>

              <div className="flex justify-between items-center">
                <p className="text-lg text-primary dark:text-gray-200 mt-2 group-hover:text-white">
                  ${item.price}
                </p>
                <div className="flex items-center gap-2">
                  {React.cloneElement(item.icon, {
                    className:
                      "text-primary dark:text-white group-hover:text-white transition-all duration-300",
                  })}
                  <span className="text-primary dark:text-white group-hover:text-white transition-all duration-300">
                    {item.category}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => handleAddToCart(item)}
                className="mt-4 w-full py-2 bg-primary hover:bg-secondary text-white rounded-md shadow-md dark:bg-primary dark:hover:bg-secondary transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full text-center py-8">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No items found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuCards;
