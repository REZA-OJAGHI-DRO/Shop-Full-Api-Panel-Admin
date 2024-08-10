import React from 'react'

function Button2({ value , styleButton , onClick}) {
    return (
      <>
      <button onClick={onClick} className={`${styleButton} hover:shadow-lg hover:shadow-cyan-500`} >
          {value}
      </button>
      </>
    )
  }

export default Button2