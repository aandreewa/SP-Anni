import React, { Component } from 'react';
import '../css/IndexInfo.css';
import strength_img from "../resources/strength.svg";
import relax_img from "../resources/relax.svg";
import energy_img from "../resources/energy.svg";

class IndexInfo extends Component {
    render() {
        return (
            <div class="IndexInfo-table">
                     <table class="table table-borderless">
                        <thead>
                            
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="col" class="col-6"><b>Why should we do yoga?</b><br/>
                                or sit amet, consectetur aiscing em ipsum dolor sit amet, consectetur adipiscing e</th>
                            <th scope="col" class="col-1"><img src={strength_img} class="img-fluid" alt="..."></img></th>
                            <th scope="col" class="col-5">
                                <b>Strength, balance and flexibility</b><br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing en</th>
                            </tr>
                            <tr>
                            <th scope="row" rowspan="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehende</th>
                            </tr>
                            <tr>
                            <th scope="col" class="col-1"><img src={relax_img} class="img-fluid" alt="..."></img></th>
                            <th scope="row">
                                <b>Body and mind relaxation</b><br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
                            </th>
                            </tr>
                            <tr>
                            <th scope="col" class="col-1"><img src={energy_img} class="img-fluid" alt="..."></img></th>
                            <th scope="row">
                                <b>More energy and brighter moods</b><br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
                            </th>
                            </tr>
                            
                        </tbody>
                     </table>
            </div>
        );
    }
}

export default IndexInfo;