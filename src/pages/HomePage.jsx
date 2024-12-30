import "react";
import bannerImg from "../assets/images/hero-banner-desktop.png";

import PartyBannerDesktop from "../assets/images/party-banner-desktop.png";
import PartyBannerMobile from "../assets/images/party-banner-mobile.png";
import RajasDesktop from "../assets/images/rajas-desktop.png";
import RajasMobile from "../assets/images/rajas-mobile.png";

import "../styles/homepage.css";

function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}

      {/* What We Offer Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Preorder from 6 up to 1000 TAMALES</h1>
          <button className="btn">Start Your Order</button>
        </div>
      </section>
      <section className="bg-background">
        <img src={PartyBannerDesktop} className="desktop" />
        <img src={PartyBannerMobile} className="mobile" />
      </section>
      <section className="services">
        <img src={bannerImg} className="banner" />
        <div className="section-title">
          <h2>PLAN AHEAD - ORDER NOW</h2>
        </div>
        <div className="section-description">
          <h3>Don't feel like cooking? Seat back and relax</h3>
          <p>Our Delicious Mexicans Tamales are perfect for any Ocassion!</p>
          <ul>
            <li>Breakfast, Lunch & Dinner</li>
            <li>Family Reunios, Game Night, Picnics</li>
            <li>Birthdays, Babyshowers, Baby gender reveals, Office meals</li>
            <li>Cooporate events,Holidays, Weedings & more</li>
          </ul>
          <h3>We will deliver them hot and ready to eat to your door!</h3>
        </div>
      </section>
      <section className="bg-background">
        <img src={RajasDesktop} className="desktop" />
        <img src={RajasMobile} className="mobile" />
      </section>
      <section className="menu">
        <div className="section-title">
          <h2>OUR TAMALES</h2>
        </div>
        <div className="section-description">
          <h3>
            We offer a wide variety of tamales and we can make any of your
            tamale carvings a reality.
          </h3>

          <ul>
            <li>Chicken: Corn or Banana leaf.</li>
            <li>Pork: Corn or Banana leaf. </li>
            <li>Rajas Tamales</li>
            <li>Vegan Tamales: Bell Pepper & Cheese</li>
            <li>Red Sweet Tamales</li>
            <li>Fruit Tamales: Grapes</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
