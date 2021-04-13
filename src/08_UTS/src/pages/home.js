import First from '../component/first';
import Second from '../component/second';
import Third from '../component/third';
import Fourth from '../component/fourth';
import Slider from '../component/slider';

export default function Home() {

    return (
        <div>
            <Slider/>
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

