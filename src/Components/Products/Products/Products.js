import useAuth from '../../../Hooks/useAuth';
import Product from '../Product/Product';

const Products = () => {
    const {products} = useAuth();
    return (
        <div>
        <h2 className="text-center  mb-2">Where Do You Want To Go?</h2>
       <p className="text-muted text-center">
         Find Your Place
       </p>
   <div className="row row-cols-1 row-cols-md-3 g-3 m-4">
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