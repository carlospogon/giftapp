import { useState } from 'react';
import { PropTypes } from 'prop-types';
import React from 'react'


export const AddCategory = ({ setCategories }) => {

    const [inputvalue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
//============================================================================
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputvalue.trim().length > 2){
           //console.log('Submit hecho')
            setCategories( cats => [ inputvalue, ...cats ]);
            setInputValue('');
        }
    }
//=============================================================================   
    return (
        
        <form onSubmit={handleSubmit}>

            <input 
                type="text"
                value={ inputvalue }
                onChange={ handleInputChange }
                />
        </form>
        
    )
}

//============================================================================

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
}