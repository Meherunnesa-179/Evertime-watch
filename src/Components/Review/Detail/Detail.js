import React from 'react';
import '../Review.css'
import Rating from 'react-rating'

const Detail = ({testiMonialDetail}) => {
    const {name, email,number, comments, url} = testiMonialDetail;
    return (
        <div class="item">
            <div class="shadow-effect">
                    <img className="img-circle" src={url} /> 
                <p>{comments}</p>
                <Rating
                    className="text-warning"
                    initialRating={number}
                    emptySymbol="far fa-star fa-x"
                    fullSymbol="fas fa-star fa-x"
                />
            </div>
            <div class="testimonial-name">
                <h5>{name}</h5>
                <small>{email}</small>
            </div>
        </div>
    );
};

export default Detail;