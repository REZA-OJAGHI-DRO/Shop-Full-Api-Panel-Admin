import React from 'react'

function Button({href , value , styleButton}) {
  return (
    <>
    <a className={`${styleButton} hover:shadow-lg hover:shadow-cyan-500`} href={href}>
        {value}
    </a>
    </>
  )
}

export default Button