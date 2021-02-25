import React from "react";
import styled from "styled-components";
import "./Contact.css";
import ContactForm from "../Contact/ContactForm";

const ContactPage = styled.div`
  margin-top: 60px;
`;

const Space = styled.div`
  margin: 0;
  background: #252934;
  padding-top: 20px;
  height: 100%;
  border-top: 1px solid black;
`;

const ContactTop = styled.div`
  h1 {
    color: #50b7da;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    /* text-shadow: 1px 1px white; */
  }
  h2 {
    color: white;
    font-family: "Oswald", sans-serif;
    font-weight: bolder;
    /* text-shadow: 1px 1px black; */
  }
  p {
    color: white;
    font-family: "Oswald", sans-serif;
    font-weight: bolder;
    font-size: 20px;
  }
  a {
    color: white;
    text-decoration: none;
    border: 1px solid white;
    padding: 10px;
    font-weight: bolder;
    :hover {
      color: #252934;
      background: white;
      /* text-shadow: 1px 1px black; */
    }
  }
`;

const TopAdd = styled.div`
  margin-bottom: 25px;
  p {
    color: white;
    font-family: "Oswald", sans-serif;
    margin: 0;
    letter-spacing: 1px;
    font-size: 16px;
  }
`;

const TopButton = styled.div`
  button {
    background: #dcb02e;
    border-radius: 5px;
    height: 49px;
    width: 180px;
    font-size: 15px;
    font-weight: 500;
    text-shadow: 1px 1px white;
    margin-top: 10px;
    border: 1px solid white;
    :hover {
      background: #ebc862;
    }
  }
  a {
    color: black;
    text-decoration: none;
    padding-left: 20px;
    :hover {
      color: black;
      /* text-shadow: 1px 1px black; */
    }
  }
`;

const Contact = () => {
  return (
    <div>
      <div className="nav-background"></div>
      <div className="restaurant-collage">
        <div className="restaurant-collage-1"></div>
        <div className="restaurant-collage-2"></div>
        <div className="restaurant-collage-3"></div>
        <div className="restaurant-collage-4"></div>
        <div className="restaurant-collage-5"></div>
        <div className="restaurant-collage-6"></div>
        <div className="restaurant-collage-7"></div>
      </div>

      <div id="contact-title" className="menu-title">
        <h1>We'd love to hear from you!</h1>
        <p>Your feedback is important to us!</p>
      </div>
      <Space>
        <ContactTop>
          <h1>Taste of the Himalayas</h1>
          {/* <h2>Taste of the Himalayas</h2> */}
          <p>Downtown Sonoma</p>
          <TopAdd>
            <p>464 1st St E</p>
            <p>Suite F & G</p>
            <p>Sonoma, CA 95476</p>
          </TopAdd>
          <a href="tel:+1-707-996-1161">
            {/* <i class="fas fa-mobile-alt"></i> */}707-996-1161
          </a>
          {/* <TopButton>
                        <button><a style={{ display: "table-cell" }} target="_blank" href="mailto:himalayas.sonoma@gmail.com">Contact via E-mail</a></button>
                    </TopButton> */}
          <ContactForm />
        </ContactTop>
      </Space>

      <div id='location' className="bottom-title">
        <h1>Locations & Hours</h1>
      </div>

      <div className="contact-bottom-section">
        <div className="contact-bottom-left">
          <img
            alt="directions"
            src="https://maps.googleapis.com/maps/api/staticmap?scale=2&center=38.292372%2C-122.455700&language=en&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C38.292372%2C-122.455700&client=gme-yelp&sensor=false&size=315x150&signature=GX_oTr6mASq1iWBDfPlgbsMsrcM="
          ></img>
          <div className="contact-directions">
            <div className="contact-add">
              <h4>464 1st St E</h4>
              <h4>Sonoma, Ca 95476</h4>
            </div>
            <div className="contact-button">
              <button>
                <a
                  style={{ display: "table-cell" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.yelp.com/map/taste-of-the-himalayas-sonoma"
                >
                  Get directions
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="contact-bottom-right">
          <h4>Hours</h4>
          <h5>Lunch</h5>
          <p>
            Tues - Sun <span id="lunch-hours">11:00 am - 02:30 pm</span>
          </p>
          <h5>Dinner</h5>
          <p>
            Mon - Sun <span id="dinner-hours">05:00 am - 09:00 pm</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
