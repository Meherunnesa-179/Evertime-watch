import React from 'react';
import './Home.css'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg'
import banner2 from '../../images/banner/banner3.jpg'
import banner3 from '../../images/banner/banner01.jpg'
import useAuth from '../../Hooks/useAuth';
import Product from './../Products/Product/Product';
import Review from './../Review/Review';
import About from './../About/About';
import Privacy from '../Privacy/Privacy';


const Home = () => {
    const {products} = useAuth();
    const features = products.slice(0,6);
    return (
        <div>
             <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        height="500px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>EVERTIME WATCH</h1>
                        <p>UP TO 30% OF DISCOUNT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        height="500px"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>    EVERTIME WATCH</h2>
                        <h4>PURCHASE THE BEST ONE .......</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        height="500px"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>HOLIDAY GIFT</h2>
                        <h4>VIEW OUR PICKS FOR  THE BEST WATCHES ...</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
        <Container className="py-5">
          <Slide top>
          <h2 className="text-center  mb-2">WHICH PRODUCT DO YOU WANT ?</h2>
          </Slide>
          <Slide top>
            <h6 className="text-muted text-center">
              Find the best one you need ..
            </h6>
          </Slide>
        <Zoom>
        <div className=" row row-cols-1 row-cols-md-3 g-2 m-1">
          {
          features?.map(product => <Product
            key = {product._id}
            product = {product}>
            </Product>
          )};
          </div>
          <Review></Review>
          <About></About>
        </Zoom>
        </Container>
        </div>
    );
};

export default Home;