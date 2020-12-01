import React from "react";
// import { Link } from 'react-router-dom';
import "./Footer.css";
import { FcAbout } from "react-icons/fc";
import { TiLocation } from "react-icons/ti";
import { FcClock } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-home">
          <div className="back-home">
            <a id="back-home" href="/">
              <i class="fas fa-angle-double-up"></i>
            </a>
          </div>
      </div>

      <div className="footer=top-half">
        <div className="footer-main">
          <div className="footer-info">
            <h4>
              <FcAbout /> About
            </h4>
            <p>Taste of Himalayas</p>
            <p>Established 2003</p>
            <p>Sonoma</p>
            <p>Copyright © 2020</p>
          </div>
          <div className="footer-location">
            <h4>
              <TiLocation />
              Location
            </h4>
            <p>464 1st East</p>
            <p>Sonoma, Ca</p>
            <p>95476</p>
            <p>
              <a
                style={{ display: "table-cell" }}
                target="_blank"
                href="https://www.google.com/maps/place/Taste+of+the+Himalayas/@38.2924152,-122.4558005,14.84z/data=!4m5!3m4!1s0x0:0xc8ed3bdef6b63449!8m2!3d38.292116!4d-122.456202"
              >
                View on map
              </a>{" "}
              <i class="fas fa-long-arrow-alt-right"></i>
            </p>
          </div>
          <div className="footer-hours">
            <h4>
              <FcClock />
              Hours
            </h4>
            <h5>Lunch</h5>
            <p>
              Tues - Sun <span id="lunch-hours">11:00 am - 02:30 pm</span>
            </p>
            <h5>Dinner</h5>
            <p>
              Mon - Sun <span id="dinner-hours">05:00 am - 09:00 pm</span>
            </p>
          </div>
          <div className="footer-connect">
            <h4>Connect</h4>
            <p>
              <a
                style={{ display: "table-cell" }}
                target="_blank"
                id="facebook"
                href="https://www.facebook.com/pg/tasteofthehimalayassonoma/about/?ref=page_internal"
              >
                Facebook
              </a>{" "}
              <i id="fb-icon" class="fas fa-long-arrow-alt-right"></i>
            </p>
            <p>
              <a
                style={{ display: "table-cell" }}
                target="_blank"
                id="yelp"
                href="https://www.yelp.com/biz/taste-of-the-himalayas-sonoma"
              >
                Yelp
              </a>{" "}
              <i id="yelp-icon" class="fas fa-long-arrow-alt-right"></i>
            </p>
          </div>
          <div className="footer-contact">
            <h4>
              <span>
                <FcContacts />
              </span>
              Contact
            </h4>
            <div className="footer-phone">
              <i class="fas fa-mobile-alt"></i>
              <p>
                <a href="tel:+1-707-996-1161"> 707-996-1161</a>
              </p>
            </div>
            <div className="footer-mail">
              <i class="far fa-envelope"></i>
              <p>
                <a href="mailto:pthendups@yahoo.com">
                  himalayas.sonoma@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
