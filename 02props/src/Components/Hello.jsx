import React from 'react'

function Hello(props) {
  return (
    <div>
        <h1>Hello {props.name}</h1>
        <h2>Email:{props.email}</h2>
     
    </div>
  )
}

export default Hello