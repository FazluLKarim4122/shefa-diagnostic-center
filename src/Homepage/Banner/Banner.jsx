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
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div >
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
            </Carousel>
        </div>
    );
};

export default Banner;