import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';


import { FirebaseContext } from '../../store/Context';



function Login() {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const handleLoginFormSubmit = (e) => {
    
    e.preventDefault();
    
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=> {
      
      history.push("/");

    }).catch((error) => {

      if (error.code === "auth/user-not-found") {

        alert("Login failed : User Email does not exist. Please check your email address.");

      } else if (error.code === "auth/wrong-password") {  

        alert("Login failed : Incorrect password. Please check your password.");

      } else {

        alert("Login error, Please contact us at our support email address");

      }

    })

  }


  const handleSignUpButtonClick = ()=>{

    history.push("/signup");

  }






  return (

    <div>

      <div className="loginParentDiv">

        <img width="200px" height="200px" src={Logo} alt="logo"></img>

        <form onSubmit={handleLoginFormSubmit} >

          <label htmlFor="fname">Email</label>

          <br />

          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <br />

          <label htmlFor="lname">Password</label>

          <br />

          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <br />
          <br />

          <button>Login</button>

        </form>

        <button onClick={handleSignUpButtonClick}>SignUp</button>

      </div>

    </div>

  );

}

export default Login;
