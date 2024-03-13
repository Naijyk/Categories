import React, { useState, useEffect } from 'react'
import ProductsContainer from '../../components/ProductsContainer';
import { getProductsByCategory } from '../../requests/categories';
import { useParams } from 'react-router-dom';

export default function ProductsByCategoryPage() {

  const { category_name } = useParams();

  const [ productsByCategory, setproductsByCategory ] = useState([]);

  useEffect(() => {
    getProductsByCategory(category_name, setproductsByCategory);
  }, [])

  return (
    <div>
      <ProductsContainer productsByCategory={productsByCategory} />
    </div>
  )
}
