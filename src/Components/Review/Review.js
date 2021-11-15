import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../images/user-one.png'
import './Review.css'
import Detail from './Detail/Detail';
import { useEffect, useState } from 'react';
import Rating from 'react-rating'

const Review = () => {
    const [review , setReview] = useState([])
    useEffect( () =>{
        fetch("https://guarded-inlet-45451.herokuapp.com/review")
        .then((res) => res.json())
        .then((data) => {
          setReview(data);
        });
    } , [])

    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 7500,
        smartSpeed: 650,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
           <div className="">
            <section id="testimonial" className="review pt-70 pb-70 container-fluid">
                <div className="text-center ">
                    <h3 className="sectionTitle pt-5">Customer Review</h3>
                </div>
                <p className="text-center ">See what everyone is raving about! 100% real, unedited reviews and testimonials from thousands of happy Evertime Watch customers. Shop with confidence.</p>
                              <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                review.length === 0 ?
                                
                                    <div class="item">

                                        <div class="shadow-effect">

                                        <p className="text-danger ">please wait , review is loading....</p>

                                            <img src={userPic} alt="" />
                                            <p>What defines a good customer experience? Did everything go well? No. It's when something goes wrong and how they handle it. They handled it well. I would recommend them and will use them in the future to b… </p>
                                            <Rating
                                                className="text-warning"
                                                initialRating={3}
                                                emptySymbol="far fa-star fa-x"
                                                fullSymbol="fas fa-star fa-x"
                                            />
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>rajon@gmail.com</small>
                                        </div>
                                    </div> :
                                    review.map(testiMonialDetail => {
                                        return (
                                            <Detail 
                                            testiMonialDetail={testiMonialDetail}
                                             key={testiMonialDetail._id} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
        </section>
        </div>

    );
};


export default Review;