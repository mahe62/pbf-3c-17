import Home from './pages/Home/home';
import Products from './pages/Products/products';
import Promotion from './pages/Promotion/promotion';
import Contact from './pages/Contact/contact';
import Header from './parts/header';
import Footer from './parts/footer';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div class="container-fluid">
          <Header />
          <Switch>
            <Route path="/contact">
              <Contact />
              <Footer />
            </Route>
            <Route path="/promotion">
              <Promotion />
              <Footer />
            </Route>
            <Route path="/products">
              <Products />
              <Footer />
            </Route>
            <Route path="/">
              <Home />
              <Footer />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  
  );

}

export default App;
