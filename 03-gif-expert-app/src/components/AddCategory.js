import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleSumit = (e)=>{
        console.log(e.target.value)
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(category => [...category,inputValue]);
        }
    }
    return ( 
        <>
            <form onSubmit={handleSumit}>
                {inputValue}
                <input 
                    onChange={handleInputChange}
                    type="text"
                    value={inputValue}
                />
            </form>
        </>
    )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}