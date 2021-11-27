import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from "react-bootstrap";

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect( () =>{
        fetch("https://guarded-inlet-45451.herokuapp.com/allProducts")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    } , [])        

    //delete product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://guarded-inlet-45451.herokuapp.com/allProducts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products?.filter(user => user._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    }

    return (
        <div>
          <Container fluid>
          <h1>Total Products : {products.length}</h1>
              <div className="services">
                <div className="row container">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Image </th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            {products?.map((pd, index) => (
                            <tbody>
                            <tr>
                                <td>{pd.name}</td>
                                <td> $ {pd.price}</td>
                                <td><img width="70px"  src={pd.img} alt="" /> </td>
                               <button onClick={() => handleDeleteProduct(pd._id)} className="btn bg-secondary m-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                    </Table>
                </div>
              </div>
          </Container>
      </div>
    );
};

export default ManageProducts;