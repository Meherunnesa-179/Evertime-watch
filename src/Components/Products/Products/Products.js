import useAuth from '../../../Hooks/useAuth';
import Product from '../Product/Product';

const Products = () => {
    const {products} = useAuth();
    return (
        <div>
        <h2 className="text-center  mb-2">All our products are here ..</h2>
   <div className="row row-cols-1 row-cols-md-3 g-2 m-2">
   {
     products?.map(product => <Product
       key = {product._id}
       product = {product}>
       </Product>
     )};
   </div>
   </div>
    );
};

export default Products;