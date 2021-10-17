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
              <h5><b>Namaste Yoga Studio</b></h5>
            </div>

            <div class="col">
            <h5><b>Follow us:</b></h5>
            </div>

            <div class="col">
            <h5><b>Subscribe for our newsletter:</b></h5>
            </div>
            
            <div class="w-100"></div>
            <div class="col">
              Find us at 9 Yoga Vibe Str, Ruse, Bulgaria.
              <br/>
              Call us on +359899838685.
              <br/><br/>
              Copyright &copy; Namaste Yoga Studio {this.showCurrentYear()}
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
            
            <div class="col">
              <div class="number">
                <form class="form-inline">
                  <div class="form-group mb-2">
                    {/* <label for="staticEmail2" class="sr-only">Enter a valid email address:</label> */}
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Enter a valid email address"></input>
                    <button type="submit" class="btn btn-primary mb-2">Subscribe</button>
                  </div>
                  
                </form>
              </div>
            </div>

          </div>
        </div>
        </div>
      );
    }
  }
  
  export default Footer;