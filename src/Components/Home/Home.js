import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CarouselPage from "../Carousel/CarouselPage";

const HomePage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1509359149003-657ef23eaf04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  height: 878px;
  padding-top: 200px;
  width: 100%;
  border-bottom: 2px solid white;
  margin-top: -200px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    height: 653px !important;
  }

  @media (max-width: 812px) {
    width: 100%;
    height: 530px !important;
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
        font-size: 10px;
    }
    }
}
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;

  @media only screen 
and (min-device-width : 320px) 
and (max-device-width : 568px) { 
  margin-top: 315px !important;
}

  @media (max-width: 812px) {
    margin-top: 370px;
}
  }
`;

const LunchMenu = styled.div`
  .lunch-button {
    display: inline-block;
    width: 200px;
    padding-top: 15px;
    color: #fff;
    border: 2px solid #fff;
    text-align: center;
    outline: none;
    text-decoration: none;
    font-size: 14px;
    font-weight: bolder !important;
    height: 55px;
    width: 140px;
    margin: 2px 3px;
    border-radius: 3px;

    :hover,
    :active {
      background-color: #fff;
      color: #000;
    }
  }
`;

const DinnerMenu = styled.div`
  .dinner-button {
    display: inline-block;
    width: 200px;
    padding-top: 15px;
    color: #fff;
    border: 2px solid #fff;
    text-align: center;
    outline: none;
    text-decoration: none;
    font-size: 14px;
    font-weight: bolder !important;
    height: 55px;
    width: 140px;
    margin: 2px 3px;
    border-radius: 3px;

    :hover,
    :active {
      background-color: #fff;
      color: #000;
    }
  }
`;

const Home = () => {
  return (
    <div id='home'>
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
          <Link to="/lunch-menu">
            <LunchMenu>
              <span class="lunch-button">LUNCH MENU</span>
            </LunchMenu>
          </Link>

          <Link to="/dinner-menu">
            <DinnerMenu>
              <span class="dinner-button">DINNER MENU</span>
            </DinnerMenu>
          </Link>
        </ButtonDiv>
      </HomePage>
      <CarouselPage />
    </div>
  );
};

export default Home;
