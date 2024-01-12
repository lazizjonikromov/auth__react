import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
export function Signup(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate()
    async function handleSignUp(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
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
           <h1>Sign Up</h1>
           <form action="#">
            <input onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" required/>
            <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" required/>
            <button onClick={(e) => {handleSignUp(e)}}>Sign Up</button>
           </form>
           <div className="link__page">
            <p>You have already account?</p><Link to="/signin">sign in</Link>
           </div>
    </div>
 
}