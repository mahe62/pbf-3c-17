import All from '../../parts/API/all';
import Music from '../../parts/API/music';
import Creative from '../../parts/API/creative';
import Responsive from '../../parts/API/responsive';
import Filter from './filter';
import Fourth from './fourth';
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