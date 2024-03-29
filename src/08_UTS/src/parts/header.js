import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div class="site-header">
                <div class="container">
                    <div class="row">
                        <nav class="navbar navbar-default navbar-static-top">
                            <div class="navbar-header">
                                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#main-menu">
                                    <span class="sr-only">Toggle navigation</span>
                                    <i class="fa fa-bars"></i>
                                </button>
                                <a class="navbar-brand" href="index.html">Stone</a>
                            </div>
                            <div class="collapse navbar-collapse" id="main-menu">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/promotion">Promotion</a></li>
                                    <li><a href="/products">Products</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        )
    }
}
export default Header;