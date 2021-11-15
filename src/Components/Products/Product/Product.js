import React from 'react';
import { Card, Container } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import Rating from 'react-rating'


const Product = ({product}) => {
 const {name , _id , img , detail ,  price , rating , discount} =product ;
    return (
        <div>
            <Container >
              <Card style={{"boxShadow" : "5px 5px 10px grey"  , "height" : "520px"}} className="rounded-3 m-3 p-2">
                <Card.Img variant="top" style={{"width":"250px", "height":"300px" , "borderRadius":"100%" ,"margin":"0 auto ", "boxShadow" : "5px 5px 20px black"}} src={img} />
            <Card.Body>
            <Rating
                    className="text-warning"
                    initialRating={rating}
                    emptySymbol="far fa-star fa-x"
                    fullSymbol="fas fa-star fa-x"
                />
            <h6 className="text-warning">{name?.slice(0,30)}</h6>
            <Card.Text>
                  <small className="text-secondary">
                  {detail?.slice(0,100)}
                  <div>
                  <span>Price : ${price}</span>
                  <span className="text-warning p-2">{discount} discount</span>
                  </div>
                  </small>
            </Card.Text>
            </Card.Body>
                <div className=" p-2">
                  <NavLink className="  me-3"to={`/allProducts/${_id}`}>Order now</NavLink>  
                  <NavLink  to="/addreview">Review</NavLink>
                </div>
            </Card> 
            </Container>
    </div>
    );
};

export default Product;