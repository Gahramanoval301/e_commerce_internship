import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTypeSelectedValue } from '../../slices/OptionCategorySlice';

export default function TypeCategory() {
    const [selectedOption, setSelectedOption] = useState('')

    const dispatch = useDispatch();
    const handleOptionChange = (event) => {
        dispatch(updateTypeSelectedValue(event.target.value));

        setSelectedOption(event.target.value);

    }
    return (
        <div className='categories-box'>
            <h3>Category</h3>
            <div className='categories'>
                <label htmlFor="">
                    <input type="radio" id='all_category' name='category'
                        value='all_category'
                        checked={selectedOption === "all_category"}
                        onChange={handleOptionChange}
                    />
                    <span className='checkmark'></span>
                    <p>All</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id='heels' name='category'
                        value='heels'
                        checked={selectedOption === "heels"}
                        onChange={handleOptionChange}
                    />
                    <span className='checkmark'></span>
                    <p>Heels</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id='sneakers' name='category'
                        value='sneakers'
                        checked={selectedOption === "sneakers"}
                        onChange={handleOptionChange}
                    />
                    <span className='checkmark'></span>
                    <p>Sneakers</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id='flats' name='category'
                        value='flats'
                        checked={selectedOption === "flats"}
                        onChange={handleOptionChange}
                    />
                    <span className='checkmark'></span>
                    <p>Flats</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id='sandals' name='category'
                        value='sandals'
                        checked={selectedOption === "sandals"}
                        onChange={handleOptionChange}
                    />
                    <span className='checkmark'></span>
                    <p>Sandals</p>
                </label>
            </div>
        </div>)
}
