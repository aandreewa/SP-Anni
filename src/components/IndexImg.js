import React, { Component } from 'react';
import index_img from "../resources/background-img.png";


class IndexImg extends Component {
    render() {
        return (
            <div>
                <img src={index_img} class="img-fluid" alt="..."></img>
               
            </div>
        );
    }
}

export default IndexImg;