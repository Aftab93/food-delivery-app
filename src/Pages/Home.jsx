import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar'
import CategoryCards from '../components/Category/CategoryCard'
import MenuCards from '../components/Menu/MenuCards'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useSearch } from '../context/SearchContext'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { searchTerm } = useSearch();

  useEffect(() => {
      Aos.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      Aos.refresh();
    },[]);

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
        <Navbar />
        {!searchTerm && (
          <CategoryCards
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}
        <MenuCards selectedCategory={selectedCategory} />
    </div>
  )
}

export default Home