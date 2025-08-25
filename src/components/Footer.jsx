import React from 'react'

import dcLogoBg from '../assets/img/dc-logo-bg.png';
import facebook from '../assets/img/footer-facebook.png';
import twitter from '../assets/img/footer-twitter.png';
import youtube from '../assets/img/footer-youtube.png';
import pinterest from '../assets/img/footer-pinterest.png';
import periscope from '../assets/img/footer-periscope.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <div className="footer-col">
            <h4>DC COMICS</h4>
            <ul>
              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>
            <h4>SHOP</h4>
            <ul>
              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>DC</h4>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy policy (New)</li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshops</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>SITES</h4>
            <ul>
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>
        </div>
        <div className="footer-logo-bg">
          <img src={dcLogoBg} alt="DC logo background" />
        </div>
      </div>
      <div className="footer-bottom">
        <button className="signup-btn">SIGN-UP NOW!</button>
        <div className="footer-social">
          <span>FOLLOW US</span>
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={youtube} alt="YouTube" />
          <img src={pinterest} alt="Pinterest" />
          <img src={periscope} alt="Periscope" />
        </div>
      </div>
    </footer>
  );
}

export default Footer
