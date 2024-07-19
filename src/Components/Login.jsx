import React, {useState} from 'react'
import {z} from 'zod';
function Login () {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState({email:'', password:'' });
    
    const schema =  z.object({
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" })
    })
    function LoginHandle(e){
        e.preventDefault()
        const formData = { email, password };
    const result = schema.safeParse(formData);
    if (result.success) {
      console.log('Form data is valid:', formData);
      // Perform further actions like submitting to a server
    } else {
      const formError = result.error.format();
      setError({
        email: formError.email?._errors[0] || '',
        password: formError.password?._errors[0] || ''
      });
    }
    }
 
    return(
        <>
        <div>
           LogIn Here!
        </div>
        <br/>

        <div>
            <form onSubmit={LoginHandle}>
            <label>
                Email:
                <input type="email" name="email" placeholder="enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            {error.email && <span >{error.email}</span>}
            <br/><br/>
            <label>
                Password:
                <input type="password" name="password" placeholder="enter your password" value={password}onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            {error.password && <span>{error.password}</span>}
            <br/>
            <br/>
            
            <button type='Submit'>Login</button>
            </form>
        </div>
        </>
    )
}
export default Login;