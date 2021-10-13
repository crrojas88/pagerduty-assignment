import React from 'react';

const Form = ({ newDish, handleChange, addDish }) => {
return(
    <div>
        <form onSubmit={addDish}>
            <div>
                Dish: <input name='newDish' value={newDish} onChange={handleChange}/>
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