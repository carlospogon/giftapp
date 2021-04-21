import React, { useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
export const GifApp = () => {

    const [categories, setCategories] = useState(['Mandalorian']);

    return (
        <div>
            <h2>Carlos Gif Application</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => 
                        (<GifGrid 
                            key = {category} 
                            category = {category}/>))
                }
            </ol>

        </div>
    )
}
