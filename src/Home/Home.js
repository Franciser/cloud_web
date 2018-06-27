import React, { Component } from 'react';
import Header from "../header/Header"
import Carousel from "./Carousel"
import Product from "./Product"
import Serve from "./Serve"
import Solution from "./Solution"
import Grade from "./Grade"
import Gift from "./Gift"
import Footer from "../Footer/Footer"
import ReturnTop from "./ReturnTop"
class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <Carousel />
                <Product />
                <Serve />
                <Solution />
                <Grade />
                <Gift />
                <Footer />
                <ReturnTop/>
            </div>
        );
    }
}

export default Home;
