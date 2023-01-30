import React, { useState } from 'react'

export default function RegisterPage() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    async function handleSubmit(event) {
        event.preventDefault()
        
        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
        })

        if(response.status === 200){
            alert("Registration Successful")
        }else{
            alert("Registration Failed")
        }

        console.log(credentials)
    }
    function handleChange(event) {
        setCredentials(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <form onSubmit={handleSubmit} className='register'>
            <h1>Register</h1>
            <input type="text" placeholder='username' onChange={handleChange} value={credentials.username} name="username" />
            <input type="password" placeholder='password' onChange={handleChange} value={credentials.password} name="password" />
            <button>Register</button>
        </form>
    )
}
