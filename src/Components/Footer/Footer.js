import React from 'react';
import './Footer.css'
import { Col, Container, Row } from "react-bootstrap";
import ManageProducts from './../ManageProducts/ManageProducts';

const Footer = () => {
    return (
        <div>
        <div className="text-white background justify-content-center">
      <div className="py-4">
          <Container>
              <Row>
                  <Col sx={12} md={3}>
                <h6 >CUSTOMER SERVICE</h6>
                      <ul>
                          <li>My Account</li>
                          <li>Route Insurance</li>
                          <li>My Orders</li>
                          <li>FAQ</li>
                      </ul>
                  </Col>
                  <Col sx={12} md={3}>
                  <h5>LEGAL</h5>
                  <ul>
                      <li>Privacy Policy</li>
                      <li>Accessibility</li>
                      <li>Terms & Conditions</li>
                  </ul>
                  </Col>
                  <Col sx={12} md={3}>
                  <h6>Help</h6>
                  <ul>
                      <li>About Us</li>
                      <li>Our Team</li>
                      <li>Contact us</li>
                      <li>Products</li>
                  </ul>
                  </Col>
                  <Col sx={12} md={3}>
                  <h6>SignUP for our news letter</h6>
                  <input className="w-100" type="email" name="input email" id="" placeholder="input your Email" />
                  <button className="w-100 border rounded-3 mt-3" type="submit">Submit</button>
                  </Col>
              </Row>
          </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Rights Reserved by Evertime-Watch Community <br />
        2021
      </p>
    </div>
        </div>
    );
};

export default Footer;