import React from "react";
import LogoImage from "../assets/logo.png";
import { useState } from "react";
const Login = () => {
  const [error, setError] = useState(false);
  return (
    <div className="login-container my-10">
      <div className="left-column"></div>
      <div className="branding">
        <img src={LogoImage} />
        <h1 className="text-white text-3xl ">Login - Chat Application</h1>
      </div>
      <div className="login-form">
        <form method="post" action="/">
          <input
            type="text"
            name="username"
            placeholder="enter mobile or email"
          />
          {error ? <p class="error show">Error message here</p> : ""}
          <input type="password" name="password" placeholder="enter password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
