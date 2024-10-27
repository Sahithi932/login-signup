import React from 'react';
import { Link } from 'react-router-dom'

function Login() {
 
    return (
      <div className="login">
        <form>
          <h2 style={{ color: "black" }}> &emsp;<u>Login</u></h2>
          <input type="text" placeholder="user name" required /><br /><pre></pre>
          <input type="password" placeholder="password" required /><br /><pre></pre>
          <a href="#" className="fp">Forgot password</a><br></br><br></br>
          <button type="submit">Login</button> &emsp;&emsp;&emsp;&emsp;&emsp;
        </form>
        <div className="sign">
          <Link to="/signup"><button type="button">Sign up</button></Link>
        </div>
        </div>
  );
}

export default Login;