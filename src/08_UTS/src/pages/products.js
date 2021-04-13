import All from '../Service/API/all';
import Music from '../Service/API/music';
import Creative from '../Service/API/creative';
import Responsive from '../Service/API/responsive';
import Filter from '../component/filter';
import Fourth from '../component/fourth';
export default function Products() {
    return (
        <div>
            <div class="page-h">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h3>Products</h3>
                        </div>
                    </div>
                </div>
            </div>



            <div class="filter">
                <Filter/>
            </div>

            <div class="products">
                <div class="container">
                    <div class="row">
                        <div id="Grid">
                            <div class="mix">
                                <All />
                            </div>
                            <div class="category-1">
                                <Music />
                            </div>
                            <div class="category-2">
                                <Creative />
                            </div>
                            <div class="category-2">
                                <Responsive />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="fourth-section">
                <Fourth/>
            </div>
        </div>
    );
}