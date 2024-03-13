import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {

  return (
    <Link to={`/categories/${category}`}>
      <div className={s.category} >
        <p>{ category }</p>
      </div>
    </Link>

  )
}
