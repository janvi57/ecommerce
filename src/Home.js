import React from 'react';
import Carousel from './Carousel.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    
    const data = [
        {
            image: "Image/Covers/cover.jpg",
        },
        {
            image: "Image/Covers/cover2.jpg",
        },
        {
            image: "Image/Covers/cover3.jpg",
        },
        {
            image: "Image/Covers/cover7.jpg",
        },
        {
            image: "Image/Covers/cover5.jpg",
        },
        {
            image: "Image/Covers/cover6.jpg",
        },
        {
            image: "Image/Covers/cover4.jpg",
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold'
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{
            padding: "0 10px"
            }}>
            
            <Carousel
                data={data}
                time={5000}
                width= "90%"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                captionPosition="bottom"
                automatic={false}
                slideImageFit="cover"
                style={{
                textAlign: "center",
                maxWidth: "1200px",
                margin: "20px auto",
                }}
            />
            </div>
        </div>
    );
}

export default Home;