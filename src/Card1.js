import React from 'react';
import './styles/ImgStyle.css';
import { Card, CardGroup } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Garden from './Garden';

const Card1 = () => {
  
    return (
        <> 
        <div className="Heading">
        <h1>Our Services</h1>
        </div>
        <div id="demos" className="section section-padding">
            <div className="container">
                <div className="demo row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="demo col">
                    <div className="inner">
                        <a href="/Garden.js" className="image">
                            <Card>
                                <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-garden-ideas-1614032371.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=640:*" />
                                <Card.Body>
                                <Card.Title>Garden King</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                                </Card.Body>
                            </Card>a
                            <i className="fal fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="demo col">
                    <div className="inner">
                        <a href="/Interior.js" className="image">
                            <Card>
                                <Card.Img variant="top" src="https://images.wallpaperscraft.com/image/plants_indoor_plants_pots_137269_1920x1200.jpg" />
                                <Card.Body>
                                <Card.Title>Interior Swag</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <i className="fal fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="demo col">
                    <div className="inner">
                        <a href="/Seasonal.js" className="image">
                        <Card>
                            <Card.Img variant="top" src="https://st.depositphotos.com/1000848/1276/i/600/depositphotos_12766634-stock-photo-abstract-background-of-flowers.jpg" />
                                <Card.Body>
                                <Card.Title>Seasonal Plant</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            <i className="fal fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Card1;

