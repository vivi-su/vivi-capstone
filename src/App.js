import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { BACK_END } from "./utils/utils";
import axios from "axios";
import Header from "./components/header/Header";
import EntryPage from "./pages/entry-page/EntryPage";
import DisneyPage from "./pages/disney/DisneyPage";
import Drum from "./components/drum/Drum";
import Draw from "./components/draw/Draw";
import Whack from "./components/whack/Whack";

import "./App.scss";
import HomePage from "./pages/home-page/HomePage";

function App() {
      const [showSignup, setShowSignup] = useState(false);
      const [showSignin, setShowSignin] = useState(false);
      const [isSigninError, setIsSigninError] = useState(false);
      const [errorMessage, setErrorMessage] = useState("");
      const [haveToken, setHaveToken] = useState(false);

      const handleSignup = (e) => {
        e.preventDefault();
  
        if (
          !e.target.username.value ||
          !e.target.name.value ||
          !e.target.password.value
        ){
          alert("Please fill out username, name and password, thank you!");
          return;
        }

          axios
            .post(`${BACK_END}/api/signup`, {
              username: e.target.username.value,
              name: e.target.name.value,
              password: e.target.password.value,
            })
            .then((res) => {
              if (res.data.success) {
                console.log(e.target.username.value);
                console.log(e.target.password.value);
                console.log("ok", res.data.success);
                alert("Sweet! You have successfully signed up!");
                setShowSignup(false);
                setShowSignin(true);
              }
            })
            .catch((err) => {
              console.log(err);
            });
      };

      const handleSignin = (e) => {
        e.preventDefault();
        
         if (
           !e.target.username.value ||
           !e.target.password.value
         ) {
           alert("Please fill out username and password, thank you!");
           return;
         }

        axios
          .post(`${BACK_END}/api/signin`, {
            username: e.target.username.value,
            password: e.target.password.value,
          })
          .then((res) => {
            console.log(res);
            if (res.data.token) {
              console.log(res.data.token);

              sessionStorage.setItem("token", res.data.token);

              console.log(sessionStorage.setItem("token", res.data.token));
              setHaveToken(true);
              setShowSignin(false);
              setIsSigninError(false);
              setErrorMessage("");
              window.location.reload(false);
            }
          })
          .catch((err) => {
            if (err) {
              setIsSigninError(true);
              setErrorMessage(err.response);
              alert("Sorry, please make sure your username and password are correct." );
            }
          });
      };

  

  return (
    <section className={showSignup || showSignin ? " " : "App"}>
        <BrowserRouter>
          <Header
            showSignup={showSignup}
            setShowSignup={setShowSignup}
            showSignin={showSignin}
            setShowSignin={setShowSignin}
            haveToken={haveToken}
            setHaveToken={setHaveToken}
            handleSignup={handleSignup}
            handleSignin={handleSignin}
          />
          <section className={showSignup || showSignin ? "App__filter" : ""}>
            <Routes>
              <Route index path="/" element={<EntryPage />} />
              <Route path="/signup" element={<EntryPage />} />
              <Route path="/signin" element={<EntryPage />} />
              <Route path="/profile" element={<EntryPage />} />
              <Route path="/play/disney" element={<DisneyPage />} />
              <Route path="/play/disney/:disneyID" element={<DisneyPage />} />
              
              <Route path="/play" element={<HomePage />}>
                <Route index element={<Navigate replace to="drum" />} />
                <Route path="drum" element={<Drum />} />
                <Route path="draw" element={<Draw />} />
                <Route path="whack" element={<Whack />} />
              </Route>
              
              <Route path="*" element={<EntryPage />} />
            </Routes>
          </section>
        </BrowserRouter>
      </section>
  );
}

export default App;
