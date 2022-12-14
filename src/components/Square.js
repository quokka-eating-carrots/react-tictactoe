import React from 'react'
import './Square.css'

export const Square = ({ onClick, value }) => {
  return (
    <button className="square"
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Square