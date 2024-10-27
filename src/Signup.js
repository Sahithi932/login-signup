import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div class="signup">
    <form>
      <h2 style ={{color: "black"}}> &emsp;&emsp;<u>Sign Up</u></h2><br></br>
      <input type="text" placeholder='user name' required></input><br></br><pre></pre>
      <input type="text" placeholder='E-mail' required></input><br></br><pre></pre>
      <input type="password" placeholder='password' required></input><br></br><pre></pre>
      <div className="bu">
      <button type="submit">Submit</button> &emsp;&emsp;&emsp;&emsp;&emsp;
      </div>
      </form>
        <div className="sign1">
          <Link to="/"><button type="button">Back to login</button></Link>
        </div>
      </div>
      );
};

export default Signup;
