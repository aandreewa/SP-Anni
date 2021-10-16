import React, { Component } from 'react';
import logo from '../resources/logo.png'

class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} class="img-fluid" alt="..."></img>
            </div>
        );
    }
}

export default Logo;