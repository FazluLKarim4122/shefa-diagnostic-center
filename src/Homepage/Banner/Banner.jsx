import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/banner1.jpg';
import img2 from '../../assets/banner2.jpg';
import img3 from '../../assets/banner3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                    <div className='relative'>
                        <img src={img1} alt="" />
                        <button className='btn btn-accent absolute left-4 bottom-10 '>All Tests</button>
                    </div>
                    <div className='relative'>
                        <img src={img2} alt="" />
                        <button className='btn btn-accent absolute left-4 bottom-10 '>All Tests</button>
                    </div>
                    <div className='relative'>
                        <img src={img3} alt="" />
                        <button className='btn btn-accent absolute left-4 bottom-10 '>All Tests</button>
                    </div>
            </Carousel>
        </div>
    );
};

export default Banner;