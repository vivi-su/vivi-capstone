import {Link} from "react-router-dom";
import Profile from "../profile/Profile";
import "./Header.scss";


export default function Header({
  showSignup,
  showSignin,
  haveToken,
  setShowSignup,
  setShowSignin,
  setHaveToken,
  handleSignup,
  handleSignin
}) {

  const handleCancelSignup =()=>{
   setShowSignup(false);
  }

  const handleCancelSignin =()=>{
    setShowSignin(false);
  }

  return (
    <>
      {!haveToken && (
        <nav className="header">
          <ul className="header__ul">
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
        </nav>
      )}

      <Profile haveToken={haveToken} setHaveToken={setHaveToken} />

      {!showSignin && showSignup && (
        <div className="header__sign">
          <div className="header__sign-title-wrap">
            <h1 className="header__sign-title">Sign Up</h1>
            <Link to="/">
              <button
                className="header__delete-btn"
                onClick={handleCancelSignup}
              >
                X
              </button>
            </Link>
          </div>
          <form onSubmit={(e) => handleSignup(e)} className="header__form-sign">
            <div className="header__form-box">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Nick Name"
              />
            </div>

            <div className="header__form-box">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
              />
            </div>

            <div className="header__form-box">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="header__btn">
              Submit
            </button>
          </form>
        </div>
      )}

      {showSignin && (
        <div className="header__sign">
          <div className="header__sign-title-wrap">
            <h1 className="header__sign-title">Sign in</h1>
            <Link to="/">
              <button
                className="header__delete-btn"
                onClick={handleCancelSignin}
              >
                X
              </button>
            </Link>
          </div>
          <form onSubmit={(e) => handleSignin(e)} className="header__form-sign">
            <div className="header__form-box">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Nick Name"
              />
            </div>

            <div className="header__form-box">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="header__btn">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}