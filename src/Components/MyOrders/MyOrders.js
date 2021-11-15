import React from 'react';
import { useEffect , useState } from 'react';
import { Table } from "react-bootstrap";
import useFirebase from '../../Hooks/useFirebase';

const MyOrders = () => {
  const [myOrders , setMyOrders] = useState([]);
    const {user}=useFirebase();
    useEffect(() => {
        fetch(`https://guarded-inlet-45451.herokuapp.com/myOrder/${user?.email}`)
          .then((res) => res.json())
          .then((data) => setMyOrders(data));
      }, [user?.email]);
    
      return (
        <div className="container">
        <h1>Total Orders : {myOrders.length}</h1>
  
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
            <th>Product name</th>
              <th>Product Price</th>
              <th>Image </th>
              <th>Customer's Name</th>
            </tr>
          </thead>
          {myOrders?.map((pd, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{pd.productName}</td>
                <td>$ {pd.productPrice} </td>
                <td><img width="70px"  src={pd.url} alt="" /> </td>
                <td>{pd.name}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
      );
};

export default MyOrders;