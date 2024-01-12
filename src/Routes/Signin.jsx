import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
export function Signin(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate();
    async function handleSignIn(e){
        e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((user) => {
        // Success...
        console.log(user)
        navigate('/home')
        //...
    })
    .catch((error) => {
        // Error
        console.log(error)
    })
    }

    return <div>
           <h1>Sign In</h1>
           <form action="#">
            <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" required/>
            <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" required/>
            <button onClick={(e) => {handleSignIn(e)}}>Sign In</button>
           </form>
           <div className="link__page">
            <p>Create new account?</p><Link to="/signup">sign up</Link>
           </div>
    </div>
 
}