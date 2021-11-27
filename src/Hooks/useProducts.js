import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () =>{
        fetch("https://guarded-inlet-45451.herokuapp.com/allProducts")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    } , [])
    return{products , setProducts}
};

export default useProducts;