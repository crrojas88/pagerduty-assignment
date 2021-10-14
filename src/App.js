import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DishList from './components/Dish-list';
import Form from './components/Form';

const App = () => {
// Storing our dishes and form state in state hooks
  const [ dishes, setDishes ] = useState([])
  const [ newDish, setNewDish ] = useState('')
  // const [ newCuisine, setNewCuisine ] = useState('')

// Handle form state change for input values and possibility to add search functionality.
  const handleChange = (e) => {
    const value = e.target.value

    setNewDish(value)
  }

  const baseUrl = 'http://localhost:3001/dishes'

// GET: Using an effect hook for fetching our dishes data.
  const dishHook = () => {
    axios.get(baseUrl)
    .then(response => {
      setDishes(response.data)
    })
  }
  useEffect(dishHook, [])

// POST: dishObj with newDish is passed to axios post request and dishes state returns new concated array. Form is reset.
  const addDish = (e) => {
    e.preventDefault()

    const dishObj = {
      name: newDish,
      id: dishes.length + 1
    }

    axios.post(baseUrl, dishObj)
    .then(response => {
      setDishes(dishes.concat(response.data))
      setNewDish('')
    })
  }

// DELETE: id of individual dish is passes to the function and axios delete method removes from our db. setDishes filters out
// dishes that don't match id, causing re-render.
const deleteDish = (id) => {
  axios.delete(`${baseUrl}/${id}`)
  .then(() => {
    setDishes(dishes.filter(dish => dish.id !== id))
  })
} 

return(
  <div>
    <h1>Noms Around the World</h1>
    <Form newDish={newDish} handleChange={handleChange} addDish={addDish}/>
    <DishList dishes={dishes} deleteDish={deleteDish}/>
  </div>
)
}

export default App