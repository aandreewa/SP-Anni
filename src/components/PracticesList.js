import React, { Component } from 'react';
import classic_img from "../resources/classic.jpg";
import hatha_img from "../resources/hatha.jpg";
import yin_img from "../resources/yin.jpg";
import vinyasa_img from "../resources/vinyasa.jpg";
import aerial_img from "../resources/aerial.jpg";
import power_img from "../resources/power.jpg";
import '../css/Practices.css';

class PracticesList extends Component {
    render() {
        return (
            <div class="practices">
                <div class="row">
                    <div class="col">
                        <div>
                            <img src={classic_img} class="img-fluid" alt="..."></img>
                        </div>
                    </div>

                    <div class="col">
                        <div>
                            <img src={hatha_img} class="img-fluid" alt="..."></img>
                        </div>
                    </div>

                    <div class="w-100"></div>

                    <div class="col">
                        <div>
                            <img src={yin_img} class="img-fluid" alt="..."></img>
                        </div>
                    </div>

                    <div class="col">
                        <div>
                            <img src={vinyasa_img} class="img-fluid" alt="..."></img>
                        </div>
                    </div>

                    <div class="w-100"></div>
                    
                    <div class="col">
                        <div>
                            <img src={aerial_img} class="img-fluid" alt="..."></img>
                        </div>
                    </div>

                    <div class="col">
                        <div>
                            <img src={power_img} class="img-fluid" alt="..."></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PracticesList;