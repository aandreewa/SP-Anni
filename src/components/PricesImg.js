import React, { Component } from 'react';
import prices_img from "../resources/prices-img.jpg";

class PricesImg extends Component {
    render() {
        return (
            <div>
                <img src={prices_img} class="img-fluid" alt="..."></img>
            </div>
        );
    }
}

export default PricesImg;