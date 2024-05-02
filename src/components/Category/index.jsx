import React from 'react'

export default function Category() {
    return (
        <div className='category_section'>
            <div className='categories-box'>
                <h3>Sex</h3>
                <div className='categories'>
                    <label htmlFor="">
                        <input type="radio" id='men' name='sex' value='men' />
                        <span className='checkmark'></span>
                        <p>Men</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='women' name='sex' value='women' />
                        <span className='checkmark'></span>
                        <p>Women</p>
                    </label>
                </div>
            </div>
            <div className='categories-box'>
                <h3>Category</h3>
                <div className='categories'>
                    <label htmlFor="">
                        <input type="radio" id='all_category' name='category' value='all_category' />
                        <span className='checkmark'></span>
                        <p>All</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='heels' name='category' value='heels' />
                        <span className='checkmark'></span>
                        <p>Heels</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='sneakers' name='category' value='sneakers' />
                        <span className='checkmark'></span>
                        <p>Sneakers</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='flats' name='category' value='flats' />
                        <span className='checkmark'></span>
                        <p>Flats</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='sandals' name='category' value='sandals' />
                        <span className='checkmark'></span>
                        <p>Sandals</p>
                    </label>
                </div>
            </div>
            <div className='categories-box'>
                <h3>Use</h3>
                <div className='categories'>
                    <label htmlFor="">
                        <input type="radio" id='all_use' name='use' value='all_use' />
                        <span className='checkmark'></span>
                        <p>All</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='formal' name='use' value='formal' />
                        <span className='checkmark'></span>
                        <p>Formal</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='casual' name='use' value='casual' />
                        <span className='checkmark'></span>
                        <p>Casual</p>
                    </label>
                </div>
            </div>
            <div className='categories-box'>
                <h3>Price</h3>
                <div className='categories'>
                    <label htmlFor="">
                        <input type="radio" id='all_price' name='price' value='all_price' />
                        <span className='checkmark'></span>
                        <p>All</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='low_cost' name='price' value='low_cost' />
                        <span className='checkmark'></span>
                        <p>$0 - 50</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='normal_cost' name='price' value='normal_cost' />
                        <span className='checkmark'></span>
                        <p>$50 - 70</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='high_cost' name='price' value='high_cost' />
                        <span className='checkmark'></span>
                        <p>$70 - 100</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='highest_cost' name='price' value='highest_cost' />
                        <span className='checkmark'></span>
                        <p>Over $100</p>
                    </label>
                </div>
            </div>
            <div className='categories-box'>
                <h3>Colors</h3>
                <div className='categories'>
                    <label htmlFor="">
                        <input type="radio" id='all_colors' name='color' value='all_colors' />
                        <span className='checkmark'></span>
                        <p>All</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='black' name='color' value='black' />
                        <span className='checkmark'></span>
                        <p>Black</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='blue' name='color' value='blue' />
                        <span className='checkmark'></span>
                        <p>Blue</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='red' name='color' value='red' />
                        <span className='checkmark'></span>
                        <p>Red</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='pink' name='color' value='pink' />
                        <span className='checkmark'></span>
                        <p>Pink</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='brown' name='color' value='brown' />
                        <span className='checkmark'></span>
                        <p>Brown</p>
                    </label>
                    <label htmlFor="">
                        <input type="radio" id='green' name='color' value='green' />
                        <span className='checkmark'></span>
                        <p>Green</p>
                    </label>
                </div>
            </div>

        </div>
    )
}
