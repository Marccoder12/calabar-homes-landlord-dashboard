import "./styles/LogIn.css"
import {Eye, Home } from "lucide-react"
export const LogIn = () => {
  return (
    <div className="login-container">
        <header>
            <div className="logo">
                <Home/>
                <span>Calabar Homes</span>
            </div>
        </header>
        <main>

        <div className="welcome">
            <h2>Welcome back</h2>
            <p>Log in to manage your listings and enquires</p>
        </div>

        <div className="inputs">
            <div className="emailInput">
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
            </div>
            
            <div className="passwordInput">
<div className="dets">

            <label htmlFor="password">Password</label>
            <a href="#">Forgot Password?</a>
</div>
<div className="field">
            <input type="password" id="password"/>
                    <span><Eye/></span>
                </div>
            </div>
        <button type="button">Login</button>
        </div>
        <footer>
            <span>Want to  list a property?<a href="#">Create an Account?</a></span>
        </footer>
        </main>
    </div>
  )
}

export default LogIn;