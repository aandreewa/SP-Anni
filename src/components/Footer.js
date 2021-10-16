import React, { Component } from 'react';
import "../css/Footer.css"
import fb from '../resources/fb.png'
import ig from '../resources/ig.png'


class Footer extends Component {
    showCurrentYear() {
      var year = new Date().getFullYear();
      return year;
    }
    render() {
      return (
      <div className="footer">
        <div class="container-footer">
          <div class="row">
            <div class="col">
              <h4>Namaste Yoga Studio</h4>
            </div>

            <div class="col">
              <h4>Follow us:</h4>
            </div>
            
            <div class="w-100"></div>
            <div class="col">
              Namaste Yoga Studio was established in 2019. We offer practices to relax your body and mind. We want you to be healthy, 
              happy, and calm.
            </div>

            <div class="col">
              <div class="number">
                <a href="https://www.facebook.com">
                  <img src={fb} alt="facebook" />
                </a>
                <a href="https://www.instagram.com">
                  <img src={ig} alt="instagram" />
                </a>
              </div>
            </div>
            
            
            <div class="w-100"></div>
          </div>
        </div>

          <div class="copyright">
            <p>Copyright &copy; Namaste Yoga Studio {this.showCurrentYear()}</p>
          </div>
        </div>
      );
    }
  }
  
  export default Footer;