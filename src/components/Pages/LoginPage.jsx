import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'

export default function LoginPage() {
    const [redirect, SetRedirect] = useState(false)
    const [credential, setCredential] = useState({
        username: "",
        password: ""
    })
    const { setUserInfo } = useContext(UserContext)
    async function handleSubmit(event) {
        event.preventDefault()

        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify(credential),
            headers: { "Content-Type": "application/json" },
            credentials: 'include'
        })

        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
                SetRedirect(true)
            })
        } else {
            alert("Wrong Credentials")
        }

    }
    if (redirect) {
        return <Navigate to={"/"} />
    }
    function handleChange(event) {
        setCredential(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className='login'>
            <h1>Login</h1>
            <input type="text" placeholder='username' onChange={handleChange} value={credential.username} name="username" />
            <input type="password" placeholder='password' onChange={handleChange} value={credential.password} name="password" />
            <button>Login</button>
        </form>
    )
}
