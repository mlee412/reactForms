import { useState } from 'react'

export default function SignUpform({ setToken }) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: {username}, 
                  password: {password} 
                }) 
              })
            const result = await response.json();
            console.log(result);
            setToken(result.token);
            console.log(result.token);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input value={username} onChange={(e)=> setUsername(e.target.value)} />
            </label><br />
            <label>
                Password: <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </label><br />
            <button>Submit</button>
        </form>
        </>
    )
}