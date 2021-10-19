import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DishList from './components/Dish-list';
import Form from './components/Form';
import SearchForm from './components/Search-form';

const App = () => {
// Storing our dishes and form state in state hooks
  const [ dishes, setDishes ] = useState([])
  const [ newDish, setNewDish ] = useState('')
  const [ newIngredient, setNewIngredient ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ newSearchedDish, setNewSearchedDish ] = useState([])

// Handle form state change for input values and possibility to add search functionality.
  const handleChange = (e) => {
    const value = e.target.value

    setNewDish(value)
  }

  const handleIngredientChange = (e) => {
    const value = e.target.value

    setNewIngredient(value)
  }

  const handleSearch = (e) => {
    const value = e.target.value
    
    setNewSearch(value)
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
      ingredients: newIngredient,
      id: dishes.length + 1
    }

    axios.post(baseUrl, dishObj)
    .then(response => {
      setDishes(dishes.concat(response.data))
      setNewDish('')
      setNewIngredient('')
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

const submitSearch = () => {
  // handles logic for searching dishes with ingredient keywords
}

return(
  <div>
    <h1>Noms Around the World</h1>
    <Form 
    newDish={newDish} 
    newIngredient={newIngredient} 
    handleIngredientChange={handleIngredientChange} 
    handleChange={handleChange} 
    addDish={addDish}
    />
    <SearchForm newSearch={newSearch} handleSearch={handleSearch} submitSearch={submitSearch}/>
    <DishList dishes={dishes} deleteDish={deleteDish}/>
  </div>
)
}

export default App