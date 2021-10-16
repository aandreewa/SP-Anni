import React, { Component } from 'react';
import '../css/Prices.css';
import Footer from './Footer';
import NavBar from './NavBar';
import PricesImg from './PricesImg';

class Prices extends Component {
    render() {
        return (
            <div>
                <br/>
                <div class="table1">
                <h2>Prices</h2>
                <br/>
                <h4>Single Visit</h4>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col" class="col-8">Type</th>
                        <th scope="col" class="col-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">All yoga classes</th>
                        <td>15 BGN</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <br/>
                <div class="table2">
                <h4>Subscription Cards</h4>
                <table class="table" >
                    <thead>
                        <tr>
                        <th scope="col" class="col-5">Number of Visits</th>
                        <th scope="col" class="col-3">Validity</th>
                        <th scope="col" class="col-2">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">3 visits</th>
                        <td>1 month</td>
                        <td>30 BGN</td>
                        </tr>
                        <tr>
                        <th scope="row">4 visits</th>
                        <td>3 months</td>
                        <td>40 BGN</td>
                        </tr>
                        <tr>
                        <th scope="row">8 visits</th>
                        <td>4 months</td>
                        <td>76 BGN</td>
                        </tr>
                        <tr>
                        <th scope="row">16 visits</th>
                        <td>6 months</td>
                        <td>144 BGN</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                </div>
               
            </div>
        );
    }
}

export default Prices;