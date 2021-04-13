import Vidio from '../component/vidio';
import Promotions from '../component/promotions';
import Fourth from '../component/fourth';
export default function Promotion() {
    return (
        <div>
            <div class="page-h promotion">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h3>Promotions</h3>
                        </div>
                    </div>
                </div>
            </div>



            <div class="video-featured">
                <Vidio />
            </div>
            <div class="promotion-s">
                <Promotions />
            </div>

            <div class="fourth-section">
                <Fourth/>
            </div>
        </div>
    );
}