import { useState } from 'react'

function App() {
  const [status, setStatus] = useState(true)

  return (
    <>
      <div>
        {
          status?  <h1>Hello World!</h1>: null
        }
       
        <button onClick={()=>{setStatus(!status)}}>Toggle</button>
      </div>
    </>
  )
}

export default App
