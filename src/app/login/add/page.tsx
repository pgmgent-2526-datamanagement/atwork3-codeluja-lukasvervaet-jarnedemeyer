"use client"
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        const firstName = formData.get('firstname')
        const lastName = formData.get("lastname")
        const email = formData.get('email')
        const password = formData.get('password')
        
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstname: firstName, lastname: lastName, email, password }),
        })
    
        if (response.ok) {
          router.push('/login')
        } else {
          const errorData = await response.json()
          console.error("Failed to register:", errorData)
          alert(errorData.error || "Registration failed")
        }
    }
    return (
        <div className="flex flex-col">
            <h1>Register Page</h1>
            <p>Maak hier een account aan</p>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstname" required />
                <br />
                <label>Last Name:</label>
                <input type="text" name="lastname" required />
                <br />
                <label>Email:</label>
                <input type="email" name="email" required />
                <br />
                <label>Password:</label>
                <input type="password" name="password" required />
                <br />
                <button type="submit">Register</button>
                
            </form>
        </div>
    )
}