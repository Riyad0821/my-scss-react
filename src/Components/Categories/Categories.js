import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
const allProducts = [{name:'Lenovo', category:'laptop'}, {name:'Asus', category:'laptop'}, {name:'Dell', category:'laptop'}, {name:'Nokia', category:'mobile'}, {name:'Samsung', category:'mobile'}, {name:'Xiaomi', category:'mobile'}, {name:'Nikkon', category:'camera'}, {name:'Sony', category:'camera'}, {name:'Canon', category:'camera'}]
const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
         const matchedProducts = allProducts.filter(pd => pd.category === category);
         setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h4>Your Selected Category: {category}</h4>
            {
                products.map(pd => <CategoryDetail product = {pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;