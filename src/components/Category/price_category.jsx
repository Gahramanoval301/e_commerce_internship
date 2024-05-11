import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePriceSelectedValue } from '../../slices/OptionCategorySlice'

export default function PriceCategory() {
    const [selectedOption, setSelectedOption] = useState('')

    const dispatch = useDispatch()

    const handleCheck = (e) => {
        setSelectedOption(e.target.value)

        dispatch(updatePriceSelectedValue(e.target.value))   
    }


    return (
        <div className="categories-box">
            <h3>Price</h3>
            <div className="categories">
                <label htmlFor="">
                    <input type="radio" id="all_price" name="price" value="all_price"
                        checked={selectedOption === 'all_price'}
                        onChange={handleCheck}
                    />
                    <span className="checkmark"></span>
                    <p>All</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="low_cost" name="price" value="low_cost"
                        checked={selectedOption === 'low_cost'}
                        onChange={handleCheck}
                    />
                    <span className="checkmark"></span>
                    <p>$0 - 30</p>
                </label>
                <label htmlFor="">
                    <input
                        type="radio"
                        id="normal_cost"
                        name="price"
                        value="normal_cost"
                        checked={selectedOption === 'normal_cost'}
                        onChange={handleCheck}
                    />
                    <span className="checkmark"></span>
                    <p>$30 - 60</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="high_cost" name="price" value="high_cost"
                        checked={selectedOption === 'high_cost'}
                        onChange={handleCheck}/>
                    <span className="checkmark"></span>
                    <p>$60 - 100</p>
                </label>
                <label htmlFor="">
                    <input
                        type="radio"
                        id="highest_cost"
                        name="price"
                        value="highest_cost"
                        checked={selectedOption === 'highest_cost'}
                        onChange={handleCheck}
                    />
                    <span className="checkmark"></span>
                    <p>Over $100</p>
                </label>
            </div>
        </div>
    )
}
