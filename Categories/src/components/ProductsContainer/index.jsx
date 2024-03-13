import React from 'react';
import s from './index.module.css';
import ProductCard from '../ProductCard';


export default function ProductsContainer({ productsByCategory }) {
  return (
      <div className={s.products_container}>
        {
          productsByCategory.map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>
  )
}
