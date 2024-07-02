import React from 'react'
import img from "../assets/banner.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        autoplay:true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    
    return (
        <div >
            <Slider {...settings}>
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="">
                    <img src={img} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Banner