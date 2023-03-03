import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import LogIn from './LogIn'

export default function SignUp() {
    const email = useRef()
    const password = useRef()
    const [showSignUp, setShowSignUp] = useState(false)
    const getSignUp = localStorage.getItem("signup")
    useEffect(() => {
        if (getSignUp) {
            setShowSignUp(true)
        }
    }, [getSignUp])
    const handelAdd = (event) => {
        event.preventDefault()
        if (email.current.value && password.current.value) {
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("signup", email.current.value)
            localStorage.setItem("password", password.current.value)
            alert("Account created successfully")
            window.location.reload()
        }
    }

    return (
        <>
            {showSignUp ? <LogIn /> :
                <div className='login'>
                    <Link to="/ToDo-App">
                        <img className="nav-logo-login" src="https://sixbytes.io/hibido/images/icon.png" alt="Logo"></img>
                    </Link>
                    <div className="login-setup">
                        <h1>Sign Up</h1>
                        <form onSubmit={handelAdd} className="login-form">
                            <div className="labels">
                                <h4>Email or mobile phone number </h4>
                            </div>
                            <input ref={email} type="email" placeholder='@email' />
                            <div className='labels'>
                                <h4>Password </h4>
                            </div><br />
                            <input ref={password} type='password' /><br /><br />
                            <button ><h3>Sign Up</h3> </button>

                        </form>
                    </div>
                </div>
            }
        </>
    )
}