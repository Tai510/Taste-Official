import React from 'react';
import './Menu.css'


const DinnerMenu = () => {
    return (
        <div className='menu-app'>
            <div className='menu-title'>
                <h1>Dinner Menu</h1>
                <p>We also serve vegan entrée. Ask for detail.</p>
            </div>
            <div className='categories'>
            <div>
                    <h2>Appetizers</h2>
                </div>

                <div>
                    <div>
                        <h3>Pakoras</h3>
                        <p>mixed deep fried vegetable fritters served with mint sauce</p>
                        <p>$7</p>
                    </div>

                    <div>
                        <h3>Samosas</h3>
                        <p>2 crisp patties stuffed spiced potatoes and green peas, served with mint sauce</p>
                        <p>$7</p>
                    </div>

                    <div>
                        <h3>Himalayan Salad</h3>
                        <p>spring mix, cucumbers, radishes, carrots, tomatoes w/homemade dressing</p>
                        <p>$8</p>
                    </div>

                    <div>
                        <h3>Chicken Chili</h3>
                        <p>pan-fried chicken strips with green chili, onion, bell peppers & spices</p>
                        <p>$9</p>
                    </div>

                    <div>
                        <h3>Shekwa</h3>
                        <p>tandoored lamb tenderloin bits with spices and fresh vegetables</p>
                        <p>$10</p>
                    </div>

                    <div>
                        <h3>Veggie Momo</h3>
                        <p>steamed vegetable dumplings, tomato chutney</p>
                        <p>$9</p>
                    </div>

                    <div>
                        <h3>Lamb Momo</h3>
                        <p>steamed lamb dumplings, tomato chutney</p>
                        <p>$11</p>
                    </div>

                    <div>
                        <h3>Daal</h3>
                        <p>a bowl of split pea soup with steamed basmati rice or naan bread</p>
                        <p>$8</p>
                    </div>
                </div>
            </div>

            <div className='categories'>
                <div>
                    <h2>Tarkari(Curry Dishes)</h2>
                </div>

                <div className='curry'>
                    <div className='adding-option'>
                        <div>
                            <h3>Add To Any Lunch</h3>
                        </div>

                        <div className='add-ons'>
                            <h5>Chicken 4</h5>
                            <h5>Lamb 5</h5>
                            <h5>Salmon 5</h5>
                            <h5>Shrimp 5</h5>
                            <h5>Vegetable 4</h5>
                            <h5>Paneer 4</h5>
                        </div>
                    </div>

                    <div>
                        <h3>Mismas Tarkari</h3>
                        <p>mixed vegetables cooked in onion and tomato gravy</p>
                        <p>$13</p>
                    </div>

                    <div>
                        <h3>Alu Cauli</h3>
                        <p>potatoes, cauliflower & peas with onion and tomato gravy</p>
                        <p>$13</p>
                    </div>

                    <div>
                        <h3>Alu Bhanta</h3>
                        <p>himalayan style cubes of eggplant & potatoes in curry sauce</p>
                        <p>$13</p>
                    </div>

                    <div>
                        <h3>Chana Masala</h3>
                        <p>sautéed chick chick peas with herbs in an onion gravy</p>
                        <p>$12</p>
                    </div>

                    <div>
                        <h3>Saag Paneer</h3>
                        <p>creamy spinach curry, fresh cheese (paneer)</p>
                        <p>$13</p>
                    </div>

                    <div>
                        <h3>Vegan Saag Paneer</h3>
                        <p>creamy spinach curry with no paneer</p>
                        <p>$13</p>
                    </div>

                    <div>
                        <h3>Chicken Chille</h3>
                        <p>pan fried chicken strips, peepers, onion, jalapenio</p>
                        <p>$13</p>
                    </div>

                    <div>
                        <h3>Shekwa</h3>
                        <p>tandoored lamb cubes, peppers, onion, spinach, spices</p>
                        <p>$13</p>
                    </div>

                    <div>
                        <h3>Kukra Saag</h3>
                        <p>boneless chicken(dark meat) & spincach curry</p>
                        <p>$16</p>
                    </div>

                    <div>
                        <h3>Luksha</h3>
                        <p>slow-cooked lamb & potato curry</p>
                        <p>$17</p>
                    </div>

                    <div>
                        <h3>Macha Tarkari</h3>
                        <p>garlic, ginger, tomatoes & salmon curry</p>
                        <p>$16</p>
                    </div>

                    <div>
                        <h3>Shrimp Tarkari</h3>
                        <p>garlic, ginger, tomatoes & shrimp curry</p>
                        <p>$16</p>
                    </div>

                    <div className='tikka-option'>
                        <div>
                            <h3>Tikka Masala</h3>
                            <p>slow cooked creamy sauce with:</p>
                        </div>

                        <div className='add-ons'>
                            <h5>Paneer 14</h5>
                            <h5>Vegetable 14</h5>
                            <h5>Salmon 16</h5>
                            <h5>Shrimp 16</h5>
                            <h5>Chicken 16</h5>
                            <h5>Lamb 17</h5>
                        </div>

                    </div>

                    <div className='coco-option'>
                        <div>
                            <h3>Coco Masala</h3>
                            <p>slow cooked creamy coconut sauce with:</p>
                        </div>

                        <div className='add-ons'>
                            <h5>Salmon 16</h5>
                            <h5>Shrimp 16</h5>
                            <h5>Vegetable 14</h5>
                            <h5>Paneer 14</h5>
                            <h5>Chicken 16</h5>
                            <h5>Lamb 17</h5>
                        </div>

                    </div>
                </div>
            </div>


            <div className='categories'>
                <div>
                    <h2>Tandoori</h2>
                </div>

                <div>
                    <div className='tandoori-option'>
                        <div>
                            <h3>Add To Any Tandoori</h3>
                        </div>

                        <div className='add-ons'>
                            <h5>Chicken 6</h5>
                            <h5>Lamb 6</h5>
                            <h5>Salmon 7</h5>
                            <h5>Vegetable 4</h5>
                        </div>
                    </div>

                    <div>
                        <h3>Vegetable Tandoori</h3>
                        <p>mixed vegetables on a sizzling platter</p>
                        <p>$16</p>
                    </div>

                    <div>
                        <h3>Chicken Tandoori</h3>
                        <p>chicken with bones marinated & broiled in tandoor oven</p>
                        <p>$18</p>
                    </div>

                    <div>
                        <h3>Lamb Tandoori</h3>
                        <p>cubes of boneless lamb marinated & broiled in tandoor oven</p>
                        <p>$18</p>
                    </div>

                    <div>
                        <h3>Salmon Tandoori</h3>
                        <p>salmon cubes marinated & broiled in tandoor oven</p>
                        <p>$20</p>
                    </div>

                    <div>
                        <h3>Tandoori Tikka</h3>
                        <p>boneless chicken breast marinated & broiled in tandoor oven</p>
                        <p>$18</p>
                    </div>

                    <div>
                        <h3>Tandoori Mixed Grill</h3>
                        <p>a mix of chicken, lamb and salmon tandoori</p>
                        <p>$24</p>
                    </div>

                    <div>
                        <h3>Rack Of Lamb</h3>
                        <p>rack of lamb marinated in spices, broiled in tandoori oven</p>
                        <p>$25</p>
                    </div>
                </div>
            </div>


            <div className='categories'>
                <div classname='options'>
                    <h2>Desert</h2>
                </div>

                <div className='side-orders'>
                    <div>
                        <h3>Kheer</h3>
                        <p>traditional rice pudding</p>
                        <p>$4</p>
                    </div>

                    <div>
                        <h3>Gulab Jamun</h3>
                        <p>fried cheese balls, cardamon honey syrup</p>
                        <p>$4</p>
                    </div>
                </div>

                <div>
                    <h2>Side Orders</h2>
                </div>

                <div className='side-orders'>
                    <div>
                        <h3>Plain Naan</h3>
                        <p>traditionally baked bread in tandoor oven</p>
                        <p>$3</p>
                    </div>

                    <div>
                        <h3>Garlic Cilantro Naan</h3>
                        <p>garlic and cilantro spiced naan</p>
                        <p>$3.50</p>
                    </div>

                    <div>
                        <h3>Garlic Basil Naan</h3>
                        <p>garlic and basil spiced naan</p>
                        <p>$3.50</p>
                    </div>

                    <div>
                        <h3>Papad</h3>
                        <p>deep fried, baked flat lentin wafers (papadam)</p>
                        <p>$3</p>
                    </div>

                    <div>
                        <h3>Raita</h3>
                        <p>yougurt with cucumber, mint and spices</p>
                        <p>$3</p>
                    </div>

                    <div>
                        <h3>Mango Chutney</h3>
                        <p>garlic and basil spiced naan</p>
                        <p>$2.00</p>
                    </div>

                    <div>
                        <h3>Mixed Pickles</h3>
                        <p>chicken with bones marinated & broiled in tandoor oven</p>
                        <p>$2</p>
                    </div>

                    <div>
                        <h3>Steamed Basmati Rice</h3>
                        <p>$3</p>
                    </div>

                    <div>
                        <h3>Mint Sauce</h3>
                        <p>$1</p>
                    </div>

                    <div>
                        <h3>Hot Sauce</h3>
                        <p>$1</p>
                    </div>

                </div>
            </div>

            <div className='categories'>
                <div>
                    <h2>Beverage</h2>
                </div>

                <div className='side-orders'>

                    <div className='beverage-price'>
                        <h4>Mango Lassi</h4>
                        <p>$4</p>
                    </div>

                    <div className='beverage-price'>
                        <h4>Fresh Lemonade</h4>
                        <p>$4</p>
                    </div>

                    <div className='beverage-price'>
                        <h4>Tea Herbal/Spiced (Hot/Iced)</h4>
                        <p>$4</p>
                    </div>

                    <div className='beverage-price'>
                        <h4>Chai (Hot/Iced)</h4>
                        <p>$5</p>
                    </div>

                    <div className='beverage-price'>
                        <h4>Sparkling Water</h4>
                        <p>$5</p>
                    </div>

                    <div className='beverage-price'>
                        <h4>Coke</h4>
                        <p>$3</p>
                    </div>

                    <div className='beverage-price'>
                        <h4>Diet Coke</h4>
                        <p>$3</p>
                    </div>

                    <div className='beverage-price'>
                        <h4>Sprite</h4>
                        <p>$3</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DinnerMenu;