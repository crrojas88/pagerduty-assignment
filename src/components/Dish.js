import React from 'react';

const Dish = ({ dish, deleteDish }) => {
    return(
        <div>
            {dish.name} - {dish.ingredients}
            <button onClick={deleteDish}>Delete</button>
        </div>
    )
}

export default Dish