import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddNewProducts.css'

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch("https://guarded-inlet-45451.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
}
    return (
        <div className="p-5 add">
        <Container>
        <h1>Add New Product</h1>
        <form className="new-product" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name")} />
      <input placeholder="price" type="number" {...register("price")} />
      <input placeholder="discount" type="number" {...register("discount")} />
      <input placeholder="Rating" type="number" {...register("rating")} />
      <input placeholder="img link" {...register("img")} />
      <textarea placeholder="detail" {...register("detail")} />
      <textarea placeholder="about" {...register("about")} />
      <input type="submit" />
    </form>
</Container>          
        </div>

    );
};

export default AddProduct;