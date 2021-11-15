import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div style={{"background": "linear-gradient(135deg,skyblue , pink)" , "padding": "15px"}}>
            <Container className="text-start">
                  <h2 className="m-5 text-center">Our Story</h2>
                    <div>
                        <h3 className="mx-auto">Time to be Different</h3>
                        <p>That's the motto at Evertime watch. Founded by brothers Mitch & Andrew Greenblatt who are modern horological enthusiasts with a passion for unique timepieces. They've been scouring the globe since 1999 discovering obscure, unusual brands that you've probably never heard of as well as carefully curating the brands you love. Purveyors of wrist-borne time machines, Watches.com is a singular source for unusual modern watches from around the world. A watch says a lot about you and helps you stand out. It's time for YOU to be different.</p>
                        <p> <br />
                        We believe that the modern watch represents more than just a functional mechanism to tell time. The watch is a unique form of art, design and personal expression. We've had a long-standing mission of providing unique and affordable timepieces to adventurous enthusiasts as yourself. As the number one selling independent online watch store, we plan to stay true to our core mission. 
                        </p>
                    </div>
            </Container>
        </div>
    );
};

export default About;