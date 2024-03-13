export const getCategories = callback => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => callback(json));
}

export const getProductsByCategory = ( category, callback ) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(res => res.json())
    .then(json => callback(json));
}