import React from 'react';
import './Footer.css'
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div>
        <div className="text-white background justify-content-center">
      <div className="py-4">
          <Container>
              <Row>
                  <Col>
                <h6 >CUSTOMER SERVICE</h6>
                      <ul>
                          <li>My Account</li>
                          <li>Route Insurance</li>
                          <li>My Orders</li>
                          <li>FAQ</li>
                      </ul>
                  </Col>
                  <Col>
                  <h5>LEGAL</h5>
                  <ul>
                      <li>Privacy Policy</li>
                      <li>Accessibility</li>
                      <li>Terms & Conditions</li>
                  </ul>
                  </Col>
                  <Col>
                  <h6>Help</h6>
                  <ul>
                      <li>About Us</li>
                      <li>Our Team</li>
                      <li>Contact us</li>
                      <li>Products</li>
                  </ul>
                  </Col>
                  <Col>
                  <h6>SignUP for our news letter</h6>
                  <input type="email" name="input email" id="" placeholder="input your Email" />
                  <button type="submit">Submit</button>
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