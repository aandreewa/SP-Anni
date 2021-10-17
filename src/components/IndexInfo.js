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
                            Yoga can make you stronger and more flexible. It's a great way to stay limber and energetic.
                            </th>
                            <th scope="col" class="col-1"><img src={strength_img} class="img-fluid" alt="..."></img></th>
                            <th scope="col" class="col-5">
                                <b>Strength, balance and flexibility</b><br/>
                                Deep breathing increases blood flow, while holding a pose can build strength.</th>
                            </tr>
                            <tr>
                            <th scope="row" rowspan="3">
                            You'll also feel more focused and alert. And yoga can help you feel great and function better in your daily 
                            life. Yoga can also help improve health conditions.
                            <br/><br/>
                            Yoga offers the powerful benefits of exercise. And since yoga is gentle, almost anyone can do it, regardless 
                            of age or fitness level.
                            </th>
                            </tr>
                            <tr>
                            <th scope="col" class="col-1"><img src={relax_img} class="img-fluid" alt="..."></img></th>
                            <th scope="row">
                                <b>Body and mind relaxation</b><br/>
                                Bedtime yoga gets you in the right mindset and prepares your body to fall asleep.
                            </th>
                            </tr>
                            <tr>
                            <th scope="col" class="col-1"><img src={energy_img} class="img-fluid" alt="..."></img></th>
                            <th scope="row">
                                <b>More energy and brighter moods</b><br/>
                                You may feel increased mental and physical energy, and fewer negative feelings.
                            </th>
                            </tr>
                            
                        </tbody>
                     </table>
            </div>
        );
    }
}

export default IndexInfo;