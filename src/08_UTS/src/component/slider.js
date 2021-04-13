import React from 'react';

class Slider extends React.Component {
    render() {
        return (
            <div class="site-slider">
                <div class="flexslider">
                    <ul class="slides">
                        <li class="slide">
                            <div class="overlay"></div>
                            <img src="assets/images/slide1.jpg" alt="" />
                            <div class="slider-caption">
                                <div class="title">
                                    <h2>WEB DESIGN</h2>
                                    <h2>INSPIRATION</h2>
                                </div>
                                <a href="#" class="slider-button">Download</a>
                            </div>
                        </li>
                        <li class="slide">
                            <div class="overlay"></div>
                            <img src="assets/images/slide2.jpg" alt="" />
                            <div class="slider-caption">
                                <div class="title">
                                    <h2>DEVELOPMENT</h2>
                                    <h2>TEMPLATEMO</h2>
                                </div>
                                <a href="#" class="slider-button">Read More</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Slider;
