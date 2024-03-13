import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';
import { getCategories } from './requests/categories';
import { Context } from './context';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';

const App = () => {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    getCategories(setCategories)
  }, [])

  return (
    <div>
      <Context.Provider value={{ categories }} >
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/categories/:category_name' element={<ProductsByCategoryPage />} />
        </Routes>
      </Context.Provider>
    </div>
  )
}

export default App