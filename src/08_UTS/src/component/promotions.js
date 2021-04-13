import React from 'react';

class Promotions extends React.Component {
    render() {
        return (
            <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-left">
                        <div class="product-image">
                            <img src="assets/images/product1.png" alt=""/>
                        </div>
                        <div class="product-content">
                            <h3>DRAW PAD</h3>
                            <p>Praesent diam eros, semper vitae magna vel, semper venenatis augue. Cras id enim ultricies ligula consequat malesuada. Praesent non laoreet velit, at pretium sapien. <br/><br/>Nullam gravida consequat enim, ut congue ante molestie ut. In et vehicula elit. Proin vehicula nisi ante.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="product-right">
                        <div class="product-image">
                            <img src="assets/images/product2.png" alt=""/>
                        </div>
                        <div class="product-content">
                            <h3>READY FOR CHEF</h3>
                            <p>Praesent diam eros, semper vitae magna vel, semper venenatis augue. Cras id enim ultricies ligula consequat malesuada. Praesent non laoreet velit, at pretium sapien. <br/><br/>Nullam gravida consequat enim, ut congue ante molestie ut. In et vehicula elit. Proin vehicula nisi ante.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}
export default Promotions;