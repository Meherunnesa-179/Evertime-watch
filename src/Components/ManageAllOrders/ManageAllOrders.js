import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
const ManageAllOrders = () => {

    const [allOrders , setAllOrders] = useState([]);
    const { register, handleSubmit } = useForm();
  
    const [orderId, setOrderId] = useState("");
  
    useEffect(() => {
      fetch("https://guarded-inlet-45451.herokuapp.com/allOrders")
        .then((res) => res.json())
        .then((data) => setAllOrders(data));
    }, []);
  
    const handleOrderId = (id) => {
      setOrderId(id);
    };
  
    const onSubmit = (data) => {
      fetch(`https://guarded-inlet-45451.herokuapp.com/statusUpdate/${orderId}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
    };

    return (
        <div className="container">
        <h1>Total Orders : {allOrders.length}</h1>
  
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>Customer's name</th>
              <th>Product Name</th>
              <th>Image </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {allOrders?.map((pd, index) => (
            <tbody>
              <tr>
                <td>{pd.name}</td>
                <td>{pd.productName.slice(0,25)}</td>
                <td><img width="70px"  src={pd.url} alt="" /> </td>
                <td>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <select 
                      onClick={() => handleOrderId(pd?._id)}
                      {...register("status")}
                    >
                      <option value={pd?.status}>{pd?.status}</option>
                      <option value="approve">approve</option>
                      <option value="done">Done</option>
                    </select>
                    <input className="btn bg-light mx-1" type="submit" />
                  </form>
                </td>
                <button className="btn bg-secondary m-2">Delete</button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
};

export default ManageAllOrders;