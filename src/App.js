import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DishList from './components/DIsh-list';

const App = () => {
// Storing our dishes and form state in state hooks
  const [ dishes, setDishes ] = useState([])

// Using an effect hook for fetching our dish data.
  const dishHook = () => {
    axios.get('http://localhost:3001/dishes')
    .then(response => {
      setDishes(response.data)
    })
  }
  useEffect(dishHook, [])

return(
  <div>
    <h1>PagerDuty Assignment</h1>
    <DishList dishes={dishes}/>
  </div>
)
}

export default App