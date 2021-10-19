import React from 'react';

const Form = ({ newDish, handleChange, addDish, newIngredient, handleIngredientChange }) => {
return(
    <div>
        <form onSubmit={addDish}>
            <div>
                Dish: <input name='newDish' value={newDish} onChange={handleChange}/>
            </div>
            <div>
                Ingredients: <input name='newIngredient' value={newIngredient} onChange={handleIngredientChange}/>
            </div>
            <br/>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
)
}

export default Form