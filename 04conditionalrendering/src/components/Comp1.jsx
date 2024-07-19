import {useState} from 'react'
function Condition () {
    const[condition, setCondition] = useState(4)
 return(
    <>
    <div>
        {
            condition==1?<h1>Hello Sujata!</h1>: condition==2?<h1>Hello Sujan!</h1>: <h1>Hello who are you?</h1> 
        }
        
    </div>
    </>
 )
}
export default Condition;