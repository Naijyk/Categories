import React from 'react';
import s from './index.module.css';


export default function ProductCard({ title, description, price, image }) {

  return (
      <div className={s.product_card}>
        <img src={image} alt={title} />
        <h3>Title: { title }</h3>
        <p>Description: { description }</p>
        <p>Price: { price }$</p>
      </div>
  )
}
