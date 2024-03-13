import React, { useContext } from 'react';
import { Context } from '../../context';
import CategoryCard from '../CategoryCard';
import s from './index.module.css';


export default function CategoriesContainer() {

  const { categories } = useContext(Context);

  return (
    <div className={s.categories_container}>
        {
          categories.map(el => <CategoryCard key={el} category={el} />)
        }
    </div>
  )
}
