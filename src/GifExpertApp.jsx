import { useState } from 'react';
import { AddCategory } from './components/AddCategory.jsx';
import { GifGrid } from './components/GifGrid.jsx';
import './styles.css';
export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['valorant']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
            
        </>
    )
}

GifExpertApp.propTypes = {
    // name: PropTypes.string.isRequired
}