import All from '../parts/API/all';
import Music from '../parts/API/music';
import Creative from '../parts/API/creative';
import Responsive from '../parts/API/responsive';
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
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <ul class="filter-controls controls">
                                <li class="filter active" data-filter="mix">All</li>
                                <li class="filter" data-filter="category-1">Music</li>
                                <li class="filter" data-filter="category-2">Creative</li>
                                <li class="filter" data-filter="category-3">Responsive</li>
                            </ul>
                        </div>
                    </div>
                </div>
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
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h2>NEW PRODUCT PROMOTION ?</h2>
                            <a href="contact.html">(BE THERE RIGHT NOW)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}