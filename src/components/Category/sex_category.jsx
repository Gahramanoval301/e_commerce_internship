import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateSexSelectedValue } from '../../slices/OptionCategorySlice';


export default function SexCategory() {
    const [selectedOption, setSelectedOption] = useState(null);

    const dispatch = useDispatch();
    
    const handleOptionChange = (event) => {
        dispatch(updateSexSelectedValue(event.target.value));

        setSelectedOption(event.target.value);
    };
    return (
        <div className='categories-box'>
            <h3>Sex</h3>
            <div className='categories'>
                <label htmlFor="">
                    <input type="radio" id='men' name='sex'
                        value='men'
                        checked={selectedOption === "men"}
                        onChange={handleOptionChange} />
                    <span className='checkmark'></span>
                    <p>Men</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id='women' name='sex'
                        value='women'
                        checked={selectedOption === "women"}
                        onChange={handleOptionChange} />
                    <span className='checkmark'></span>
                    <p>Women</p>
                </label>
            </div>
        </div>

    )
}
