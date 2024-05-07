import React, { useState } from 'react'
import { updateColorSelectedValue } from '../../slices/OptionCategorySlice'
import { useDispatch } from 'react-redux'

export default function ColorCategory() {
    const [selectedOption, setSelectedOption] = useState('')
    const dispatch = useDispatch()

    const handleCheck = (e) => {
        setSelectedOption(e.target.value)

        dispatch(updateColorSelectedValue(e.target.value))
    }

    return (
        <div className="categories-box">
            <h3>Colors</h3>
            <div className="categories">
                <label htmlFor="">
                    <input
                        type="radio"
                        id="all_colors"
                        name="color"
                        value="all_colors"
                        checked={selectedOption === 'all_colors'}
                        onChange={handleCheck}
                    />
                    <span className="checkmark"></span>
                    <p>All</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="black" name="color" value="black"
                        checked={selectedOption === 'black'}
                        onChange={handleCheck}
                    />
                    <span className="checkmark"></span>
                    <p>Black</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="blue" name="color" value="blue"
                        checked={selectedOption === 'blue'}
                        onChange={handleCheck}
                    />
                    <span className="checkmark"></span>
                    <p>Blue</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="red" name="color" value="red"
                        checked={selectedOption === 'red'}
                        onChange={handleCheck} />
                    <span className="checkmark"></span>
                    <p>Red</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="pink" name="color" value="pink"
                        checked={selectedOption === 'pink'}
                        onChange={handleCheck} />
                    <span className="checkmark"></span>
                    <p>Pink</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="brown" name="color" value="brown"
                        checked={selectedOption === 'brown'}
                        onChange={handleCheck} />
                    <span className="checkmark"></span>
                    <p>Brown</p>
                </label>
                <label htmlFor="">
                    <input type="radio" id="green" name="color" value="green"
                        checked={selectedOption === 'green'}
                        onChange={handleCheck} />
                    <span className="checkmark"></span>
                    <p>Green</p>
                </label>
            </div>
        </div>)
}
