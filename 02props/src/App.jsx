import React from 'react'
import Hello from './Components/Hello.jsx';
import { useState } from 'react';
function App() {
  const [name, setName] = useState("Sujata")
  return (
    <div >
      <h1>Props in React</h1>
       <Hello name={name} email={"sujata@gmail.com"} />
       <button onClick={()=>{setName("Sujan")}}>Update Name</button>
       <Hello name={"Sujan"} />
       <Hello name={"Sudip"} />
    </div>
   
  )
}

export default App