import React from 'react'
import items from '../data/services/items'

const Filters = () => {
  return (
    <ul>
      {items.map((item)=> <li key={item.id}>{item.na}</li>)}
    </ul>
  )
}

export default Filters