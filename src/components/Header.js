import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css';

export default function Header() {

    const handleLogOut = () => {
        localStorage.removeItem("signIn")
        window.location.reload()
    }
    const handleDelete = () => {
        localStorage.clear()
    }
    const signIn = localStorage.getItem("signIn")
    return (
        <nav className="App-header">
            <Link to="/ToDo-App">
                <img className="App-logo" src="https://sixbytes.io/hibido/images/icon.png" alt="Logo"></img>
            </Link>
            <div className="nav-tools">
                {signIn ? <><h6>{signIn}</h6>
                    <Link to={"/ToDo-App"} className='nav-tool-link'>
                        <button className='btns' onClick={handleLogOut}><h5> LogOut</h5></button>
                    </Link></> : <><h6>Register to sign in</h6>
                    <Link to={"/login"} className='nav-tool-link'>
                        <button className='btns'><h5> Sign In</h5></button>
                    </Link>
                </>
                }
                <Link to={"/signup"} className='nav-tool-link'>
                    <button className='dlt-btn' onClick={handleDelete}><h5> Delete Account</h5></button>
                </Link>
            </div>
        </nav>
    )
}
