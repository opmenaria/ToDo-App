import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import SignUp from './SignUp'

export default function LogIn() {
    const navigate = useNavigate()

    const email = useRef()
    const password = useRef()

    const getEmail = localStorage.getItem("email")
    const getSignUp = localStorage.getItem("signup")
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (getSignUp) {
            setShow(true)
        }
    }, [getSignUp])
    const getPassowrd = localStorage.getItem("password")
    const handleSignin = (event) => {
        event.preventDefault()
        if (email.current.value === getEmail && password.current.value === getPassowrd) {
            localStorage.setItem("signIn", email.current.value)
            navigate("/")
            alert("Logged in successfully")
            window.location.reload()
        } else {
            alert("Please enter valid Email or Password")
        }
    }
    return (
        <>
            {show ?
                <div className='login'>
                    <Link to="/">
                        <img className="nav-logo-login" src="https://sixbytes.io/hibido/images/icon.png" alt="Logo"></img>
                    </Link>
                    <div className="login-setup">
                        <h1>Sign in</h1>
                        <form onSubmit={handleSignin} className="login-form">
                            <div className="labels">
                                <h4>Email or mobile phone number </h4>
                            </div>
                            <input ref={email} type="email" placeholder='@email' />
                            <div className='labels'>
                                <h4>Password </h4>
                            </div><br />
                            <input ref={password} type='password' /><br /><br />
                            <button ><h3>Log in</h3> </button>
                        </form>
                    </div>
                </div>
                : <SignUp />}
        </>
    )
}
