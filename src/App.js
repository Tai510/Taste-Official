import React from 'react';
import './App.css';
import Navigation from './Components/Nav/Navigation';
import Home from './Components/Home/Home';
import DinnerMenu from './Components/Menu/DinnerMenu';
import LunchMenu from './Components/Menu/LunchMenu';
import WineList from './Components/Menu/WineList';
import TakeOut from './Components/Menu/TakeOut';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Components/Footer/Footer';
import Images from '../src/Images/taste.logo.jpg';


const TasteLogo = styled.img`
    height: 100px;
    @media only screen 
and (min-device-width : 320px) 
and (max-device-width : 568px) {
    height: 56px;
    margin: auto;
    margin-left: 10px;
    margin-top: 10px;
 }

 @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) {
    height: 70px;
    margin: auto;
    margin-left: 10px;
    margin-top: 10px;
     }
`;




const Main = styled.div`
  text-align: center;
`;


function App() {
  return (
    <Main className="App">
      <Router>
        <div>
          <TasteLogo src={Images}></TasteLogo>
          <Navigation />
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/lunch-menu' component={LunchMenu} />
        <Route path='/dinner-menu' component={DinnerMenu} />
        <Route path='/wine-list' component={WineList} />
        <Route path='/take-out' component={TakeOut} />
        <Route path='/contact' component={Contact} />
        <Footer />
      </ Router>
    </Main>
  );
}

export default App;