import React, { Component } from 'react';
import '../css/PracticesList.css';
import classic_img from "../resources/classic.jpg";
import hatha_img from "../resources/hatha.jpg";
import yin_img from "../resources/yin.jpg";
import vinyasa_img from "../resources/vinyasa.jpg";
import aerial_img from "../resources/aerial.jpg";
import power_img from "../resources/power.jpg";

class PracticesListHover extends Component {
    render() {
        return (
            <div>
                <div class="content">
                    <div class="grid">
                        <figure class="effect-bubba">
                            <img src={classic_img} class="img-fluid" alt="..."></img>
                                <figcaption>
                                <h2>Classic <span>Yoga</span></h2>
                                <p>Practice is a good balance between movement and breathing. It is suitable for all ages and body types, 
                                aiming to build harmony and connection with the body.</p>
                                {/* <a href="#">View more</a> */}
                                </figcaption>     
                        </figure>

                        <figure class="effect-bubba">
                            <img src={hatha_img} class="img-fluid" alt="..."></img>
                                <figcaption>
                                <h2>Hatha <span>Yoga</span></h2>
                                <p>Practice includes traditional asanas (postures), breathing exercises and meditation techniques. 
                                Positions can be performed dynamically or statically. Moderate level of physical load.</p>
                                {/* <a href="#">View more</a> */}
                                </figcaption>     
                        </figure>

                        <figure class="effect-bubba">
                            <img src={yin_img} class="img-fluid" alt="..."></img>
                                <figcaption>
                                <h2>Yin <span>Yoga</span></h2>
                                <p>Yin yoga is a gentle, quiet, slow practice. It targets the ligaments, bones and joints in the 
                                body. Each posture is held for 2 to 5 minutes in order to relax and safely expand the tissues.</p>
                                {/* <a href="#">View more</a> */}
                                </figcaption>     
                        </figure>

                        <figure class="effect-bubba">
                            <img src={vinyasa_img} class="img-fluid" alt="..."></img>
                                <figcaption>
                                <h2>Vinyasa <span>Yoga</span></h2>
                                <p>Vinyasa Flow is a dynamic, active and warming up form of yoga. This practice helps to clear, move and
                                flex the whole body, but also works to build strength.</p>
                                {/* <a href="#">View more</a> */}
                                </figcaption>     
                        </figure>

                        <figure class="effect-bubba">
                            <img src={aerial_img} class="img-fluid" alt="..."></img>
                                <figcaption>
                                <h2>Aerial <span>Yoga</span></h2>
                                <p>Aerial or anti-gravity yoga is performed on a hammock. It enhances flexibility, helps with back pain, 
                                breathing, and stress-relief. The needed balance also helps burning calories.</p>
                                {/* <a href="#">View more</a> */}
                                </figcaption>     
                        </figure>

                        <figure class="effect-bubba">
                            <img src={power_img} class="img-fluid" alt="..."></img>
                                <figcaption>
                                <h2>Power <span>Yoga</span></h2>
                                <p>Power Yoga is a powerful practice with a high level of workload. Suitable for physically active people. 
                                The class helps to build a balance between strength and flexibility.</p>
                                {/* <a href="#">View more</a> */}
                                </figcaption>     
                        </figure>

                    </div>
                </div>
            </div>
        );
    }
}

export default PracticesListHover;