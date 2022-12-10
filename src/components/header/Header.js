import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { BACK_END } from "../../utils/utils";
import axios from 'axios';
import Profile from "../profile/Profile";
import "./Header.scss";


export default function Header (){
    const [showSignup, setShowSignup] = useState(false);
    const [showSignin, setShowSignin] =useState(false);
    const [isSigninError, setIsSigninError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [haveToken, setHaveToken] = useState(false);
    

    const handleSignup=(e)=>{
        e.preventDefault();
        console.log(e.target);
       
        axios.post(`${BACK_END}/api/signup`,{
            username:e.target.username.value,
            name:e.target.name.value,
            password:e.target.password.value
        })
        .then((res)=>{
            if(res.data.success){
                console.log(e.target.username.value);
                console.log(e.target.password.value);
                console.log("ok", res.data.success);
                alert("Sweet! You have successfully signed up!");
                setShowSignup(false);
                setShowSignin(true);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

 const handleSignin=(e)=>{
    e.preventDefault();
    console.log(e.target);

    axios.post(`${BACK_END}/api/signin`,{
        username:e.target.username.value,
        password:e.target.password.value
    })
    .then((res)=>{
        console.log(res);
        if(res.data.token){
          console.log(res.data.token);
    
          sessionStorage.setItem('token',res.data.token);
        
          console.log(sessionStorage.setItem('token', res.data.token));
          setHaveToken(true);
          setShowSignin(false);
          setIsSigninError(false);
          setErrorMessage('');
          window.location.reload(false);
        }
    }).catch((err)=>{
    if(err){
    setIsSigninError(true);
    setErrorMessage(err.response)};
    }) 
 }

    return (
      <>
        {!haveToken&&<nav>
          <ul className="header">
            <Link to="/signup">
              <li
                className="header__li"
                onClick={() => setShowSignup(!showSignup)}
              >
                Sign up
              </li>
            </Link>
            <Link to="/signin">
              <li
                className="header__li"
                onClick={() => setShowSignin(!showSignin)}
              >
                Sign in
              </li>
            </Link>
          </ul>
        </nav>}

        <Profile haveToken={haveToken} setHaveToken={setHaveToken} />

        {!showSignin&&showSignup && (
          <div>
            <h1>Sign Up</h1>
            <form onSubmit={(e) => handleSignup(e)}>
              Username:
              <input type="text" name="username" />
              Name:
              <input type="text" name="name" />
              Password:
              <input type="password" name="password" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}

        {showSignin && (
          <div>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSignin(e)}>
              Username:
              <input type="text" name="username" />
              Password:
              <input type="password" name="password" />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </>
    );
}