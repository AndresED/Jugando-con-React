import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';
import './index.css';
export const GifExpertApp = async () => {
    const [categories, setCategories] = useState(['One Puch']);
    return ( 
        <>
        <h2> GifExpertApp </h2> <hr/>
        <AddCategory setCategories={setCategories} />
        <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}