import React from "react";
import "./Wine.css";

const WineList = () => {
  return (
    <div className="menu-app">
        
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

      <div className="menu-title">
        <h1>Wine List</h1>
        <p>( Corkage $10 )</p>
      </div>
      <div className="wine-categories">
        <div>
          <h2>White & Chilled</h2>
        </div>

        <div>
          <div>
            <h3>Albini Pinot Grigio, Sonoma Valley 2018</h3>
            <p>9/36</p>
          </div>

          <div>
            <h3>MacTostie Chardonnay, Sonoma Coast 2017</h3>
            <p>11/24</p>
          </div>

          <div>
            <h3>Laurier Chardonnay, Carneros Sonoma 2013</h3>
            <p>8/32</p>
          </div>

          <div>
            <h3>Roche Chardonnay, Carneros Sonoma 2016</h3>
            <p>11/44</p>
          </div>

          <div>
            <h3>Robledo Sauvignon Blanc, Lake County 2016</h3>
            <p>10/40</p>
          </div>

          <div>
            <h3>Cline Viognier, North Coast 2018</h3>
            <p>9/36</p>
          </div>

          <div>
            <h3>Robledo Riesling, Lake County 2013</h3>
            <p>9/36</p>
          </div>

          <div>
            <h3>Domain Laurer Brut 187ml</h3>
            <p>9</p>
          </div>

          <div>
            <h3>Gloria Ferrer, Blanc de Noirs .5BTL</h3>
            <p>20</p>
          </div>

          <div>
            <h3>Sangria</h3>
            <p>7</p>
          </div>

          <div>
            <h3>House White</h3>
            <p>7</p>
          </div>
        </div>
      </div>

      <div className="wine-categories">
        <div>
          <h2>Red</h2>
        </div>

        <div>
          <div>
            <h3>Robledo Tempranillo, Napa Valley 2017</h3>
            <p>11/44</p>
          </div>

          <div>
            <h3>Albini Cabernet Franc, Sonoma Valley 2014</h3>
            <p>36</p>
          </div>

          <div>
            <h3>Enira Verdot blend, Bessa Valley Bulgaria 2010</h3>
            <p>26</p>
          </div>

          <div>
            <h3>Laurier Pinot Noir, Carneros 2016</h3>
            <p>9/36</p>
          </div>

          <div>
            <h3>Casa Carneros Pinot Noir Carneros 2007</h3>
            <p>36</p>
          </div>

          <div>
            <h3>Lesse Fitch Merlot, California 2016</h3>
            <p>8/32</p>
          </div>

          <div>
            <h3>Roche Merlot, Carneros 2014</h3>
            <p>44</p>
          </div>

          <div>
            <h3>Thirty-seven Syrah, Sonoma Coast 2014</h3>
            <p>9/36</p>
          </div>

          <div>
            <h3>Thirty-seven Tolay, Sonoma Coast 2014</h3>
            <p>38</p>
          </div>

          <div>
            <h3>Hwy 12 Cabernet, Sonoma County 2016</h3>
            <p>9/36</p>
          </div>

          <div>
            <h3>Plungerhead Old Vine Zinfandel, Lodi 2018</h3>
            <p>8/32</p>
          </div>

          <div>
            <h3>Lesse Fitch Zinfandel, California 2015</h3>
            <p>28</p>
          </div>

          <div>
            <h3>House Red</h3>
            <p>7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineList;
