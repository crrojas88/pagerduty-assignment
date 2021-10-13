import React from 'react';

const DishList = ({ dishes }) => {
    return(
        <div>
            <ul>
                {dishes.map(dish => <li>{dish.name}</li>)}
            </ul>
        </div>
    )
}

export default DishList