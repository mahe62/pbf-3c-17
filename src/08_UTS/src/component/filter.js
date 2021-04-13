import React from 'react';

class Filter extends React.Component {
    render() {
        return (
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
        );
    }

}
export default Filter;