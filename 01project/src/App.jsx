import React from 'react'
import { useState } from 'react'

const App = () => {
 const [data, setData] = useState(0)
 const increaseData = () => {
  setData(data+1);
 };
 const decreaseData = () => {
  setData(data-1);
 }
  return (
    <div className='text-center'>
      <h1>{data}</h1>
      <button className='text-blue-700 border' onClick={increaseData}>increaseData</button>
      <button className='pl-4 text-red-700 border'onClick={decreaseData}>decreaseData</button>
    </div>
  )
}

export default App