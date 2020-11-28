import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './Carousel.css'

const CoursalSection = styled.div`
padding-bottom: 30px;
background: rgba(0, 0, 0, 0.5);
margin: auto !important;
padding-right: 50px !important;
padding-left: 50px !important;
padding-top: 30px;
border-bottom: 2px solid white;

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 568px) { 
    .slider {
        width: 100%;
    }
}

@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 568px) { 
    padding-left: 0px !important;
    padding-right: 15px !important;
}

@media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { }

`;



const H6 = styled.div `
    font-family: 'Playfair Display',serif;
    font-size: 35px;
    font-weight: bolder;
    margin-bottom: 20px;
    border: 2px solid white;
    width: 290px;
    background: #EBECEE;
    margin: auto;
    opacity: 0.5;
    border-radius: 5px;
    margin-bottom: 15px !important;
    @media (max-width: 812px) {
        width: 100%;
    }
`;

const CarouselPage = () => {

    const suggestions = [1,2,3,4,5,6,7,8];

    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,

        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <CoursalSection>
            <div className="container">
                <H6>GALLERY</H6>
                {suggestions.length === 0 ? (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                        <Slider className='slider' {...settings}>
                            <div className="card">                 
                            </div>
                            <div className="card2">                                
                            </div>
                            <div className="card3">                              
                            </div>
                            <div className="card4">                              
                            </div>
                            <div className="card5">     
                            </div>
                            <div className="card6">                               
                            </div>
                            <div className="card7">                                
                            </div>
                        </Slider>
                    )}
            </div>
        </CoursalSection>
    );
}

export default CarouselPage;




