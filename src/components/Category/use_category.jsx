import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateUseSelectedValue } from '../../slices/OptionCategorySlice';

export default function UseCategory() {
    const [selectedOption, setSelectedOption] = useState(null);

    const dispatch = useDispatch();

    const handleCheck = (e) => {
        setSelectedOption(e.target.value)

        dispatch(updateUseSelectedValue(e.target.value))
    }


    return (
        <div className="categories-box">
            <h3>Use</h3>
            <div className="categories">
                <label htmlFor="">
                    <input type="radio" id="all_use" name="use" value="all_use"
                        checked={selectedOption === 'all_use'}
                        onChange={handleCheck}
                    />
                    <span className="checkmark"></span>
                    <p>All</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="formal" name="use" value="official"
                        checked={selectedOption === 'official'}
                        onChange={handleCheck} />
                    <span className="checkmark"></span>
                    <p>Formal</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="casual" name="use" value="casual"
                        checked={selectedOption === 'casual'}
                        onChange={handleCheck} />
                    <span className="checkmark"></span>
                    <p>Casual</p>
                </label>
            </div>
        </div>
    )
}
