import React from 'react';

import Dish from './Dish';

const DishList = ({ dishes, deleteDish }) => {
    return(
        <div>
            <ul>
                {dishes.map(dish => <li key={dish.id}><Dish dish={dish} deleteDish={() => deleteDish(dish.id)} /></li>)}
            </ul>
        </div>
    )
}

export default DishList