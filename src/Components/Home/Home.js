import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CarouselPage from "../Carousel/CarouselPage";
import Button from "@material-ui/core/Button";

const HomePage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1509359149003-657ef23eaf04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: 878px;
  padding-top: 200px;
  width: 100%;
  border-bottom: 2px solid white;
  margin-top: -200px;

  /* homepage background media queries */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    /* Iphone 5 responsive */
    height: 655px !important;
    padding-top: 220px;
  }

  @media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    /* Iphone 8  responsive */
    height: 740px !important;
  }

  @media (max-width: 812px) {
    /* Iphone 8 plus responsive */

    height: 890px !important;
  }
`;

const HomeGreeting = styled.div`
  /* opacity: 0.8; */
`;

const TitleText1 = styled.div`
    margin-bottom: 2px;
    margin-top: 90px;
    width: 750px;
    margin: auto;
    h1 {
    font-size: 47px;
    font-family: 'Sigmar One', cursive;
    padding-top: 14px;
    font-weight: bolder !important;
    color: white;
    text-shadow: 1px 1px black;
    }
    h3{
    font-family: 'Sigmar One', cursive;
    padding-top: 260px;
    font-weight: bolder !important;
    color: #e8db24;
    text-shadow: 1px 1px black;
    margin-bottom: -20px;
    font-size: 20px;
    }
    p{
    font-family: 'Open Sans', sans-serif;
    font-weight: bolder !important;
    color: white;
    text-shadow: 1px 1px black;
    margin-top: -10px;
    font-size: 12px;
    }
    /* Media Queries */

    @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) {
        width: 100% !important;
        height: 50px !important;
        margin-top: -180px;
    h1 {
     font-size: 20px !important;
     height: 50px !important; 
     margin-bottom: 5px;
     padding-top: 12px !important;
       }
    h3 {
     font-size: 16px !important;
     margin-bottom: -11px !important;
    }
    p {
        font-size: 10px;
    }
    }

    @media only screen 
and (min-device-width : 320px) 
and (max-device-width : 568px) { 
    width: 100% !important;
    height: 50px !important;
    margin-top: -140px;
    h1 {
     font-size: 17px !important;
     height: 50px !important; 
     margin-bottom: 5px;
     padding-top: 12px !important;
     /* text-align: center !important; */
       }
    h3 {
        font-size: 16px !important;
        margin-bottom: -11px !important;
    }
    p {
        font-size: 11px;
    }
    }
}
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;

  button {
    outline: none;
    z-index: 1;
    height: 55px;
    width: 200px;
    font-size: 16px;
    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      margin-top: 120px !important;
    }
  }

  a {
    text-decoration: none;
  }

  i {
    padding-left: 5px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    margin-top: 315px !important;
  }

  @media (max-width: 812px) {
    margin-top: 70px;
  }
`;

const Home = () => {
  return (
    <div id="home">
      <HomePage>
        {/* <div className="nav-background"></div> */}
        <HomeGreeting>
          <TitleText1>
            <h3>Welcome to</h3>
            <h1>TASTE OF THE HIMALAYAS</h1>
            <p>TRADITIONAL NEPALESE, TIBETAN & INDIAN DISHES.</p>
          </TitleText1>
        </HomeGreeting>

        <ButtonDiv>
          <a
            style={{ display: "table-cell" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://tastehimalayas.menu11.com/sonoma/order"
          >
            <Button variant="contained" color="secondary">
              ORDER ONLINE <i class="fas fa-phone"></i>
            </Button>
          </a>
        </ButtonDiv>
      </HomePage>
      <CarouselPage />
    </div>
  );
};

export default Home;
