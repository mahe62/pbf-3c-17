import First from '../Home/first';
import Second from '../Home/second';
import Third from '../Home/third';
import Fourth from '../Home/fourth';
export default function Home() {

    return (
        <div>
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
            <br />
            <br />
            <div class="first-section">
                <First />
            </div>

            <div class="second-section">
                <Second />
            </div>

            <div class="third-section">
                <Third />
            </div>
            <div class="fourth-section">
                <Fourth />

            </div>
        </div>
    );
}

