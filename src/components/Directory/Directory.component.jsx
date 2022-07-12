import React from 'react'
import './Directory.styles.scss'
import CategoryItem from "../Category-item/Category-item.component";
const Directory = ({categories}) => {
    return (
        <div className='categories-container'>

            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}

        </div>
    )
}

export default  Directory