import Navbar from "./Navbar"
import { useState } from 'react'

const Login = () => {

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const BASE_URL = "localhost:3000/api/users"

  const loginHandler = async() => {
    event.preventDefault();

    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput
      })
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    localStorage.setItem("token", jsonResponse.token);
  }

  return(
    <>
    <Navbar/>
    <div class="login">
      <form onSubmit={loginHandler}>
        <h1>LOG IN</h1>
        <label>Username</label>
        <input type="username" placeholder="username" onChange={(event) => setUsernameInput(event.target.value)}/>
        <label>Password</label>
        <input type="password" placeholder="password" onChange={(event) => setPasswordInput(event.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Login