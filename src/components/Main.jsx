import React from 'react';
import digitalComics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscriptions from '../assets/img/buy-comics-subscriptions.png';
import shopLocator from '../assets/img/buy-comics-shop-locator.png';
import powerVisa from '../assets/img/buy-dc-power-visa.svg';

function Main() {
  return (
    <main>
      <div className="main-content">
        <h2 className="main-title">{'-->'} Content goes here {'<--'}</h2>
      </div>
      <section className="main-banner">
        <ul className="main-banner-list">
          <li>
            <img src={digitalComics} alt="Digital Comics" />
            <span>DIGITAL COMICS</span>
          </li>
          <li>
            <img src={merchandise} alt="DC Merchandise" />
            <span>DC MERCHANDISE</span>
          </li>
          <li>
            <img src={subscriptions} alt="Subscription" />
            <span>SUBSCRIPTION</span>
          </li>
          <li>
            <img src={shopLocator} alt="Comic Shop Locator" />
            <span>COMIC SHOP LOCATOR</span>
          </li>
          <li>
            <img src={powerVisa} alt="DC Power Visa" />
            <span>DC POWER VISA</span>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;
