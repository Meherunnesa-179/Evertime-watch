import React , {useState , useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Roll from 'react-reveal/Roll';
import useFirebase from '../../Hooks/useFirebase';
import './ProductDetail.css'

const ProductDetail = () => {
    const {productId}= useParams();
    const {user} = useFirebase();
    const { register, handleSubmit } = useForm();
    // console.log(productId);
    const [products, setProducts] = useState({});
    // console.log(products)
  useEffect(() => {
    fetch("https://guarded-inlet-45451.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        const products = data?.find((pack) => pack?._id === productId);
        setProducts(products);
      });
  }, [productId]);


  const onSubmit = (data) => {
    data.status = "pending"
    fetch("https://guarded-inlet-45451.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
    return (
        <div>
          <Roll>
              <div className="my-2">
                    {products?.name ? (
                      <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                        <img style={{height:"500px" , width: " 300px"}} className="img-fluid" src={products?.img} alt="" />
                        </Col>
                      <Col md={6}>
 <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
      
      <input
        className="input-field"
        name="name"
        defaultValue={user?.displayName}
        type="text"
        {...register("name", { required: true })}
      />
     
      <input
        className="input-field"
        name="email"
        defaultValue={user?.email}
        type="email"
        {...register("email", { required: true })}
      />

<input
        className="input-field"
        name="text"
        defaultValue={products?.name}
        type="text"
        {...register("productName", { required: true })}
      />
        <input 
        className="input-field"
         type="number"
         defaultValue={products?.price}
          {...register("productPrice", { required: true})} />
       <input
        className="input-field"
        name="url"
        defaultValue={products?.img}
        type="url"
        {...register("url")}
      />

      <input
        className="input-field"
        name="text"
        placeholder="Address"
        type="text"
        {...register("address")}
      />
    <br />
    <input 
        className="input-field"
         type="number"
         value="number"
         placeholder="Phone Number"
          {...register("number")} />
      <br />
      <input
        className="submit-btn btn btn-danger"
        type="submit"
        value="submit"
      />
    </form>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                    <div>
                    <Col md={12} className="text-start border border-1 border-dark p-5">
                              <h2>{products.name}</h2>
                              <h6>Price : $ {products.price}</h6>
                              <h6>Discount : {products.discount}</h6>
                              <p>{products.detail}</p>
                        </Col>
                    </div>
                    </Row>
                    <NavLink to="/home" className="ms-5">Go back to home</NavLink>
                  </Container>
          ) : (
          <div className="my-5 py-1">
            <h1 className="my-5 p-5 text-center">Content Loading..</h1>
          </div>
           )} 
           </div> 
    </Roll>
</div>
    );
};

export default ProductDetail;
